const createJob = async (req, res) => {
  res.send("create job");
};

const getAllJobs = async (req, res) => {
  res.send("getAllJobs");
};

const updateJob = async (req, res) => {
  res.send("updateJob");
};

const showStats = async (req, res) => {
  res.send("showStats");
};

const deleteJob = async (req, res) => {
  res.send("deleteJob");
};

export { createJob, deleteJob, getAllJobs, updateJob, showStats };
