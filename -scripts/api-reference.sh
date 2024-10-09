#!/bin/bash

set -e

API_VERSION="$(cat .api-version)"
TARBALL_URL="https://codeload.github.com/mild-blue/opentiny/tar.gz/$API_VERSION"
API_TMPDIR="/tmp/opentiny-$API_VERSION"

echo -e "\n > importing data files for opentiny api reference: $API_VERSION\n"

rm -rf _data

rm -rf "$API_TMPDIR"
mkdir "$API_TMPDIR"
curl -s "$TARBALL_URL" | tar xzf - -C "$API_TMPDIR" --strip-components 1
npx moxiedoc "$API_TMPDIR/modules/tinymce/src/core/main/ts" -t antora -o "$API_TMPDIR/opentiny-api-reference.zip"
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

echo "API reference updated."
