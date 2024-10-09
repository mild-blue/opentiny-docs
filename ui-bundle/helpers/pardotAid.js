"use strict";
require("dotenv").config();

const PRODUCTION_AID = "3202";
const STAGING_AID = "3202";

module.exports = (variable) => {
  const env = process.env.DOCS_ENV ? process.env.DOCS_ENV : null;
  if (!env) return "";

  switch (env) {
    case "staging":
      return STAGING_AID;
    case "production":
      return PRODUCTION_AID;
    default: {
      return "";
    }
  }
};
