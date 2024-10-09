"use strict";
require("dotenv").config();

const PRODUCTION_ANALYTCS_UAID = "UA-692197-1";
const STAGING_ANALYTCS_UAID = "UA-692197-4";

module.exports = (variable) => {
  const env = process.env.DOCS_ENV ? process.env.DOCS_ENV : null;
  if (!env) return "";

  switch (env) {
    case "staging":
      return STAGING_ANALYTCS_UAID;
    case "production":
      return PRODUCTION_ANALYTCS_UAID;
    default: {
      return "";
    }
  }
};
