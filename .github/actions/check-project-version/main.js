const semver = require("semver");

function getInput(name) {
  let val = process.env[`INPUT_${name.replace(/ /g, "_").toUpperCase()}`] || "";
  val = val.trim();

  return val;
}

(function main() {
  const type = getInput("type");
  console.log("Type of release: ", type);
  console.log("Version: ", getInput("version"));
  console.log(semver.inc(getInput("version"), type));
})();
