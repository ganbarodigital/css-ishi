# build the main CSS file from our sources
#
# @author    Stuart Herbert <stuherbert@ganbarodigital.com>
# @copyright 2015-present Ganbaro Digital Ltd www.ganbarodigital.com
# @license   http://www.opensource.org/licenses/bsd-license.php  BSD License
# @link      http://code.ganbarodigital.com/css-framework

VERSION = 0.1.0
GROUPA_FILES="src/groupa/type.less"

.PHONY: $(GROUPA_FILES)

all: ishi-$(VERSION)-min.css

ishi-$(VERSION).css: src/normalize.css src/main.less $(GROUPA_FILES)
	lessc src/main.less > ishi-$(VERSION).css
	cp ishi-$(VERSION).css docs/assets/ishi.css

ishi-$(VERSION)-min.css: ishi-$(VERSION).css
	lessc --clean-css="advanced keepSpecialComments=0" ishi-$(VERSION).css > ishi-$(VERSION)-min.css

src/normalize.css:
	npm install --save normalize.css
	cp node_modules/normalize.css/normalize.css src/normalize.css

tools:
	sudo npm install -g less
	npm install less-plugin-clean-css