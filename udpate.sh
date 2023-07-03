#!/bin/bash

echo "Starting updating process..."

# Pull
git pull

# Install new packages
npm i

#Build
npm run build

#Copy new files to nginx
cp -r dist/* /var/www/nozoochee.com

echo "Finished updating"