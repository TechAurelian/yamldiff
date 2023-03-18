const fs = require('fs');
const yaml = require('js-yaml');

/**
 * Normalizes the given YAML file.
 * @param {string} file - The YAML file to normalize.
 * @returns {string} The normalized YAML file.
 */
function normalizeYaml(file) {
  const data = fs.readFileSync(file, 'utf8');
  const doc = yaml.load(data);
  return yaml.dump(doc);
}

/**
 * Compares the given YAML files and outputs the differences between them.
 * @param {string} file1 - The first YAML file to compare.
 * @param {string} file2 - The second YAML file to compare.
 */
function compareYaml(file1, file2) {
  const normalizedFile1 = normalizeYaml(file1);
  const normalizedFile2 = normalizeYaml(file2);
  if (normalizedFile1 === normalizedFile2) {
    console.log('The two YAML files are identical in content.');
  } else {
    console.log('The two YAML files are different.');
    console.log('Differences:');
    const diff = require('diff');
    const diffResult = diff.diffLines(normalizedFile1, normalizedFile2);
    diffResult.forEach((part) => {
      const color = part.added ? '\x1b[32m' : part.removed ? '\x1b[31m' : '\x1b[0m';
      if (part.added || part.removed) {
        console.log(color + part.value);
      }
    });
  }
}

// Check if the required command line parameters are given.
if (process.argv.length !== 4) {
  console.log('Usage: node yamldiff.js <file1> <file2>');
  console.log('Example: node yamldiff.js file1.yaml file2.yaml');
  process.exit(1);
}

// Get the command line parameters.
const file1 = process.argv[2];
const file2 = process.argv[3];

// Compare the YAML files.
compareYaml(file1, file2);