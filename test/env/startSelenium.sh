HERE=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
java -jar ${HERE}/selenium-server-standalone-2.44.0.jar -Dwebdriver.chrome.driver=${HERE}/chromedriver