#!/bin/bash

# This wrapper script checks if node_modules exists before attempting to run the menu
# This ensures users get a helpful error message if they forgot to run npm install

if [ ! -d "node_modules" ]; then
    echo -e "\n⚠️  ERROR: node_modules directory not found."
    echo -e "   Please run 'npm install' first to install dependencies.\n"
    exit 1
fi

if [ ! -d "node_modules/spec-up-t" ]; then
    echo -e "\n⚠️  ERROR: spec-up-t package not found in node_modules."
    echo -e "   Please run 'npm install' to install dependencies.\n"
    exit 1
fi

# Run the actual menu script
bash ./node_modules/spec-up-t/src/install-from-boilerplate/menu.sh "$@"
