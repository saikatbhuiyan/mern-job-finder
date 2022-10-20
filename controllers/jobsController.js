import Job from "../models/Job.js";
import { StatusCodes } from "http-status-codes";
import { BadRequestError, UnAuthenticatedError } from "../errors/index.js";

const createJob = async (req, res) => {
  const { position, company, jobDescription } = req.body;

  if (!position || !company || !jobDescription) {
    throw new BadRequestError("Please provide all values");
  }
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);

  res.status(StatusCodes.CREATED).json({ job });
};

const getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId });
  res
    .status(StatusCodes.OK)
    .json({ jobs, totalJobs: jobs.length, numOfPages: 1 });
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
