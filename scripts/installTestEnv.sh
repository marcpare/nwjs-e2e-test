# current directory
DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
UITEST_DIR=${DIR}/../test/env

URL_SELENIUM="http://selenium-release.storage.googleapis.com/2.44/selenium-server-standalone-2.44.0.jar"
URL_CD="http://dl.nwjs.io/v0.11.6/chromedriver-nw-v0.11.6-osx-x64.zip"
URL_NW="http://dl.nwjs.io/v0.11.6/node-webkit-v0.11.6-osx-x64.zip"


FN_SELENIUM=$(basename "$URL_SELENIUM")
FN_CD=$(basename "$URL_CD")
FN_NW=$(basename "$URL_NW")

DIR_NW="${FN_NW%.*}"

cd $UITEST_DIR
curl -O $URL_SELENIUM
curl -O $URL_CD
curl -O $URL_NW

# TODO: for linux or windows, too!
unzip -j $FN_CD
unzip $FN_NW

mv $DIR_NW/node-webkit.app .

# npm install -g mocha