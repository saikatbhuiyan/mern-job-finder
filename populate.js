import { readFile } from "fs/promises";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/connect.js";
import Job from "./models/Job.js";

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    await Job.deleteMany();
    const jsonProducts = JSON.parse(
      await readFile(new URL("./mock-data.json", import.meta.url))
    );
    // (import.meta.url) This is defined exactly the same as it is in browsers providing the URL of the current module file.
    await Job.create(jsonProducts);
    console.log("Success!!!");
    process.exit(0); // It's Optional (successfully exit)
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
