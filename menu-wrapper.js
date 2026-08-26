#!/usr/bin/env node
/**
 * Checks that dependencies are installed before launching the Spec-Up-T menu.
 */

const fs = require('node:fs');
const path = require('node:path');

if (!fs.existsSync('node_modules')) {
    console.error('\n⚠️  ERROR: node_modules directory not found.');
    console.error("   Please run 'npm install' first to install dependencies.\n");
    process.exit(1);
}

if (!fs.existsSync(path.join('node_modules', 'spec-up-t'))) {
    console.error('\n⚠️  ERROR: spec-up-t package not found in node_modules.');
    console.error("   Please run 'npm install' to install dependencies.\n");
    process.exit(1);
}

require(path.join(
    process.cwd(),
    'node_modules',
    'spec-up-t',
    'src',
    'install-from-boilerplate',
    'menu.js'
))(process.argv.slice(2));
