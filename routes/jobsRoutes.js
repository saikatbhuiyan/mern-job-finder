import express from "express";
const router = express.Router();

import {
  createJob,
  getAllJobs,
  showStats,
  updateJob,
  deleteJob,
  getDetailJob,
} from "../controllers/jobsController.js";

router.route("/").post(createJob).get(getAllJobs);
// place before :id
router.route("/stats").get(showStats);
router.route("/:id").delete(deleteJob).patch(updateJob).get(getDetailJob);

export default router;
