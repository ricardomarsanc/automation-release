const semver = require("semver");

function getInput(name) {
  let val = process.env[`INPUT_${name.replace(/ /g, "_").toUpperCase()}`] || "";
  val = val.trim();

  return val;
}

(function main() {
  const releaseType = getInput("release-type");
  const version = getInput("version");
  console.log("Type of release: ", releaseType);
  console.log("Version: ", version);
  console.log("release variable type: ", typeof releaseType);
  console.log("Version type: ", typeof version);
  releaseType = releaseType == "hotfix" ? "patch" : releaseType;
  console.log(semver.inc(version, releaseType));
})();
