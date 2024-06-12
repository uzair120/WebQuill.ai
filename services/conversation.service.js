/*
 * Created on Thu Jun 05 2024
 *
 * Copyright (c) 2024 Your Company
 */

const { default: axios } = require("axios");
const { default: stringInject } = require("stringinject");

const getConversationalText = async (company, jobDesc) => {
  let data = "";

  try {
    // this doc url is set by using https://script.google.com/

    data = await axios.get(process.env.DOC_URL);
    console.log(data);
  } catch (err) {
    console.error(err);
  }

  let text = stringInject(process.env.CONTENT_FORMAT, {
    company,
    jobDesc,
    data: data.data.data
  });

  return text;
};

module.exports = getConversationalText;
