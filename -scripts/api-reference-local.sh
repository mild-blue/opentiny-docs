#!/bin/bash

set -e

if [[ -z $1 ]] ; then
  echo 'You need to specify the root opentiny directory to generate the source for'
  echo './-scripts/api-reference-local ../opentiny'
  exit 1
fi

API_TMPDIR="/tmp/opentiny-$API_VERSION"

echo -e "\n > importing data files for opentiny api reference: local from $1\n"

rm -rf "$API_TMPDIR"
mkdir "$API_TMPDIR"
npx moxiedoc "$1/modules/tinymce/src/core/main/ts" -t antora -o "$API_TMPDIR/opentiny-api-reference.zip"
unzip -o "$API_TMPDIR/opentiny-api-reference.zip"

# remove old api adoc pages
rm -rf modules/ROOT/pages/apis/

# removed old static api html pages (clear cache), it can corrupt the build
rm -rf build/site/_/opentiny/6.0/apis/

# move newly generated adoc pages, antora will then generate new static html pages
mv _data/antora modules/ROOT/pages/apis

# move api navigation
mv _data/moxiedoc_nav.adoc modules/ROOT/moxiedoc_nav.adoc

# cleanup moxiedoc tmp _data folder
rm -rf _data

echo "API reference updated using local opentiny build."
