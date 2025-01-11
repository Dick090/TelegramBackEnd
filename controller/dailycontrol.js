const Schema = require("../models/dailyShema")


const dailyCreate = async (req,res)=>{
  console.log('good in ');
  
    try {
      const data = new Schema(req.body);
      await data.save();
      res.status(200).send({ message: "Data saved successfully" });
    } catch (error) {
      console.error("Error saving data:", error.message);
      res.status(500).send({ error: "Failed to save data" });
    }

}


const getdailytask = async (req, res) => {
  try {
    const data = await Schema.find(); // Fetch all documents
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data:", error.message);
    res.status(500).json({
      message: "Error fetching data",
      error: error.message || error,
    });
  }
};

const getDataByName = async (req, res) => {
  const { dailyId } = req.params;
  try {
    const data = await Schema.findOne({ dailyId: new RegExp(`^${dailyId}$`, "i") });
    if (!data) {
      console.log(`No data found with referalCode: ${dailyId}`);
      return res.status(404).json({ 
        sucess: false,
        message: `No data found with dailyId: ${dailyId}` });
    }
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching data by dailyId:", error.message);
    res.status(500).json({
      message: "Error fetching data by dailyId",
      error: error.message || error,
    });
  }
};



const updateDailyTasks = async (req, res) => {
  const { dailyId } = req.params; // Extract the referalCode from the URL
  const updates = req.body; // The data to update

  try {
    // Update the document directly
    const result = await Schema.updateOne(
      { dailyId: new RegExp(`^${dailyId}$`, "i") }, // Case-insensitive match
      { $set: updates } // Use $set to apply only the fields you want to update
    );

    if (result.matchedCount === 0) {
      // No matching document found
      return res.status(404).json({ message: `No data found with referalCode: ${referalCode}` });
    }


  
    res.status(200).json({
      message: `Data for ${referalCode} updated successfully`,
      result,
    });
  } catch (error) {
    console.error("Error updating data:", error.message);
    res.status(500).json({
      message: "Error updating data",
      error: error.message || error,
    });
  }
};


module.exports= {
  dailyCreate,
  getdailytask,
  getDataByName,
  updateDailyTasks
}