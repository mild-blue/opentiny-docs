"use strict";
require("dotenv").config();

module.exports = (variable) => {
  const query = variable.toString();
  switch (query) {
    case "tinymce-key":
      return process.env.TINYMCE_KEY ? process.env.TINYMCE_KEY : "no-key";
    case "enviornment":
      return process.env.DOCS_ENV ? process.env.DOCS_ENV : "development";
    default: {
      return "no-env-variable-found";
    }
  }
};
