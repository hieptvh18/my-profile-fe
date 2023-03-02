import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";

export const cloudinary = cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.API_KEY,
      api_secret: process.env.API_SECRET,
    });