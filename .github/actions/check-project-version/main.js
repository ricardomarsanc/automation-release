const semver = require("semver");

function getInput(name) {
  let val = process.env[`INPUT_${name.replace(/ /g, "_").toUpperCase()}`] || "";
  val = val.trim();

  return val;
}

(function main() {
  const type = getInput("release-type");
  const version = getInput("version");
  console.log("Type of release: ", type);
  console.log("Version: ", version);
  console.log(semver.inc(version, type));
})();
