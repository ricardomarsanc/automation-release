const fs = require("fs");
const semverMajor = require("semver/functions/major");
const semverMinor = require("semver/functions/minor");
const semverPatch = require("semver/functions/patch");
const semverInc = require("semver/functions/inc");

function getInput(name) {
  let val = process.env[`INPUT_${name.replace(/ /g, "_").toUpperCase()}`] || "";
  val = val.trim();

  return val;
}

(function main() {
  const type = getInput("type");
  console.log("Type of release: ", type);
  console.log("Version: ", getInput("version"));
  console.log(semverInc(getInput("version"), type));
})();
