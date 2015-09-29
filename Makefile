# build the main CSS file from our sources
#
# @author    Stuart Herbert <stuherbert@ganbarodigital.com>
# @copyright 2015-present Ganbaro Digital Ltd www.ganbarodigital.com
# @license   http://www.opensource.org/licenses/bsd-license.php  BSD License
# @link      http://code.ganbarodigital.com/css-framework

VERSION = 0.1.0

LAROUX_VERSION = v2.1.0

SCSS_THIRD_PARTY_DEPS = \
	src/ishi/00-base/styles/normalize.scss

SCSS_SRC_FILES = $(shell find src -name '*.scss')
JS_SRC_FILES = $(shell find src/js )

LAROUX_SRC_FILES = $(shell find node_modules/laroux.js/src -name '*.js')

NODETOOLS_BIN = node_modules/.bin

.PHONY: clean

all: js docs

js: dist/ishi.js dist/laroux.js
	@echo "JS rebuilt"

dist/ishi.js: $(JS_SRC_FILES) node_modules/fastclick/lib/fastclick.js
	$(NODETOOLS_BIN)/webpack

dist/laroux.js: node_modules/laroux.js/build/dist/web/laroux.js
	cp node_modules/laroux.js/build/dist/web/laroux.* dist/

clean:
	rm build/*

docs: $(SCSS_SRC_FILES) $(SCSS_THIRD_PARTY_DEPS) docs/_src/docs.scss dist/laroux.js dist/ishi.js
	sass --compass -I src docs/_src/docs.scss > docs/_src/docs.css
	$(NODETOOLS_BIN)/postcss --use autoprefixer docs/_src/*.css --dir docs/assets/
	cp dist/* docs/assets/

tools: node_modules/laroux.js/README.md $(NODETOOLS_BIN)/webpack $(NODETOOLS_BIN)/postcss
	sudo gem install sass

src/ishi/00-base/styles/normalize.scss: node_modules/normalize.css/normalize.css
	npm install --save normalize.css
	cp node_modules/normalize.css/normalize.css src/ishi/00-base/styles/normalize.scss

node_modules/fastclick/lib/fastclick.js:
	npm install fastclick
	cp node_modules/fastclick/lib/fastclick.js src/js/vendor/

node_modules/laroux.js/build/dist/laroux.js: node_modules/laroux.js/README.md $(LAROUX_SRC_FILES)
	( cd node_modules/laroux.js && node_modules/.bin/gulp )

node_modules/laroux.js/README.md:
	( cd node_modules && git clone https://github.com/larukedi/laroux.js.git laroux.js && cd laroux.js && git checkout $(LAROUX_VERSION) && npm install )

$(NODETOOLS_BIN)/postcss:
	npm install postcss-cli autoprefixer

$(NODETOOLS_BIN)/webpack:
	npm install webpack