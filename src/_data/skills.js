const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const resumeText = require("./resumeText.js");
const resumeKeywords = require("./resumeKeywords.json");

module.exports = function () {
  const workDir = path.join(__dirname, "..", "professional");
  const files = fs.readdirSync(workDir).filter((f) => f.endsWith(".md"));

  const counts = {};
  const projectsByTag = {};

  // Source 1: tags on your Work case studies only (personal/recipe tags are excluded on purpose)
  files.forEach((f) => {
    const raw = fs.readFileSync(path.join(workDir, f), "utf8");
    const { data } = matter(raw);
    (data.stack || []).forEach((t) => {
      counts[t] = (counts[t] || 0) + 1;
      projectsByTag[t] = projectsByTag[t] || [];
      projectsByTag[t].push(data.title);
    });
  });

  // Source 2: how often a tracked keyword shows up in your resume text
  const lowerText = resumeText.toLowerCase();
  Object.entries(resumeKeywords).forEach(([pattern, label]) => {
    const regexStr = pattern.includes("\\b")
      ? pattern
      : pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(regexStr, "g");
    const matches = lowerText.match(regex);
    if (matches) counts[label] = (counts[label] || 0) + matches.length;
  });

  const maxCount = Math.max(...Object.values(counts), 1);
  const skills = Object.keys(counts).map((name) => {
    const pct = Math.round((counts[name] / maxCount) * 100);
    const projects = projectsByTag[name] || [];
    return { name, pct, count: counts[name], hasProjects: projects.length > 0, projects };
  });
  skills.sort((a, b) => b.pct - a.pct);

  return {
    all: skills.slice(0, 20),
    top5: skills.slice(0, 5),
  };
};
