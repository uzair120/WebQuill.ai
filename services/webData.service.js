/*
 * Created on Thu Jun 04 2024
 *
 * Copyright (c) 2024 Hafiz Uzair Raza
 */

// For education purpose only - Not Recommended.

const puppeteer = require("puppeteer");

async function getJobDescription(url) {
  let browser;
  try {
    // Launch a headless browser
    browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate to the provided URL
    await page.goto(url, { waitUntil: "networkidle2" });

    // Scrape the job description
    const jobDescription = await page.evaluate(() => {
      let jobDescriptionElement = document.querySelector(
        'div[class*="description__text"]'
      );

      let jobCompNameElement = document.querySelector(
        'a[class*="topcard__org-name-link"]'
      );
      jobDescriptionElement = jobDescriptionElement
        ? jobDescriptionElement.innerText.trim()
        : "Job description not found.";

      jobCompNameElement = jobCompNameElement
        ? jobCompNameElement.innerText.trim()
        : "Company Name not found.";
      return { company: jobCompNameElement, desc: jobDescriptionElement };
    });

    return jobDescription;
  } catch (error) {
    console.error("Error scraping job description:", error);
    throw new Error("Failed to scrape job description");
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

module.exports = getJobDescription;
