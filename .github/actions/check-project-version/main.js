const semver = require("semver");
const core = require("@actions/core");

// function getInput(name) {
//   let val = process.env[`INPUT_${name.replace(/ /g, "_").toUpperCase()}`] || "";
//   val = val.trim();
//   return val;
// }

(function main() {
  try {
    let releaseType = core.getInput("release-type");
    releaseType = releaseType == "hotfix" ? "patch" : releaseType;
    const version = core.getInput("version");
    const newVersion = semver.inc(version, releaseType);
    core.setOutput("new_version", newVersion);
  } catch (error) {
    core.setFailed(error.message);
  }
})();
