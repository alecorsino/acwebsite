#!/bin/bash

# Google Cloud Storage gsutil

echo Syncing files... [www.corsinoart.com]
echo -- -- --
gsutil rsync -d -r www/ gs://www.corsinoart.com

echo Enabling public-read access to all files...
echo -- -- --
gsutil -m acl set -R -a public-read gs://www.corsinoart.com
