#!/bin/bash

# Google Cloud Storage gsutil

echo Syncing files... [www.corsinoart.com]
echo -- -- --
gsutil -m rsync -d -r www/ gs://www.corsinoart.com

echo Enabling public-read access to all files...
echo -- -- --
gsutil -m acl set -R -a public-read gs://www.corsinoart.com

echo Cache Control to all Static pictures...
echo -- -- --
gsutil -m setmeta -h "Cache-Control:public, max-age=31536000"  gs://www.corsinoart.com/assets/pics/*.jpg