module.exports = function (eleventyConfig) {
  // Copy static assets straight through to the output folder
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addFilter("year", (dateObj) => new Date(dateObj).getFullYear());

  // Remove the current page from a collection (used for "more case studies / recipes")
  eleventyConfig.addFilter("without", (arr, url) => (arr || []).filter((item) => item.url !== url));

  // Trim a collection down to N items
  eleventyConfig.addFilter("limit", (arr, n) => (arr || []).slice(0, n));

  // "March 2026"-style date for the "Published ..." line
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    const d = new Date(dateObj);
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  });

  // Portfolio-level stats used on the Professional/Personal homepages
  eleventyConfig.addFilter("countUniqueTopics", (collection) => {
    const set = new Set();
    (collection || []).forEach((item) => {
      (item.data.topics || "").split(",").forEach((t) => {
        const trimmed = t.trim();
        if (trimmed) set.add(trimmed);
      });
    });
    return set.size;
  });

  eleventyConfig.addFilter("yearRange", (collection) => {
    const years = (collection || []).map((item) => parseInt(item.data.year));
    if (!years.length) return "";
    const min = Math.min(...years);
    const max = Math.max(...years);
    return min === max ? `${min}` : `${min}–${max}`;
  });

  // For attachments: figure out how to preview a file based on its extension
  eleventyConfig.addFilter("fileExt", (str) => (str || "").split(".").pop().toLowerCase());
  eleventyConfig.addFilter("urlencode", (str) => encodeURIComponent(str || ""));

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    pathPrefix: process.env.PATH_PREFIX || "/",
  };
};
