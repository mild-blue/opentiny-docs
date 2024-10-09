"use strict";
require("dotenv").config();

const PRODUCTION_CID = "78021";
const STAGING_CID = "79143";

module.exports = (variable) => {
  const env = process.env.DOCS_ENV ? process.env.DOCS_ENV : null;
  if (!env) return "";

  switch (env) {
    case "staging":
      return STAGING_CID;
    case "production":
      return PRODUCTION_CID;
    default: {
      return "";
    }
  }
};
