# build the main CSS file from our sources
#
# @author    Stuart Herbert <stuherbert@ganbarodigital.com>
# @copyright 2015-present Ganbaro Digital Ltd www.ganbarodigital.com
# @license   http://www.opensource.org/licenses/bsd-license.php  BSD License
# @link      http://code.ganbarodigital.com/css-framework

VERSION = 0.1.0

ENQUIRE_VERSION = v2.1.2
LAROUX_VERSION = v2.1.0

THIRD_PARTY_DEPS = \
	src/00-base/styles/normalize.css \
	docs/assets/laroux.js

SRC_FILES = $(shell find src -name '*.less')

ENQUIRE_SRC_FILES = $(shell find node_modules/enquire.js/src -name '*.js')
LAROUX_SRC_FILES = $(shell find node_modules/laroux.js/src -name '*.js')

.PHONY: clean

all: docs

src/00-base/styles/normalize.scss:
	npm install --save normalize.css
	cp node_modules/normalize.css/normalize.css src/common/00-reset/normalize.scss

clean:
	rm build/*

docs: $(SRC_FILES) docs/_src/docs.scss docs/_src/enquire.js docs/_src/laroux.js docs/_src/docs.js
	sass --compass -I src docs/_src/docs.scss > docs/_src/docs.css
	postcss --use autoprefixer docs/_src/*.css --dir docs/assets/
	cp docs/_src/*.js docs/assets/

tools: node_modules/enquire.js/README.md node_modules/laroux.js/README.md
	sudo gem install sass
	sudo npm install --global postcss-cli autoprefixer

docs/_src/enquire.js: node_modules/enquire.js/dist/enquire.js
	cp node_modules/enquire.js/dist/*.js docs/_src/

node_modules/enquire.js/dist/enquire.js: node_modules/enquire.js/README.md $(ENQUIRE_SRC_FILES)
	( cd node_modules/enquire.js && node_modules/.bin/gulp )

node_modules/enquire.js/README.md:
	( cd node_modules && git clone https://github.com/WickyNilliams/enquire.js.git && cd enquire.js && git checkout $(ENQUIRE_VERSION) && npm install )

docs/_src/laroux.js: node_modules/laroux.js/build/dist/web/laroux.js
	cp node_modules/laroux.js/build/dist/web/laroux.* docs/_src/

node_modules/laroux.js/build/dist/laroux.js: node_modules/laroux.js/README.md $(LAROUX_SRC_FILES)
	( cd node_modules/laroux.js && node_modules/.bin/gulp )

node_modules/laroux.js/README.md:
	( cd node_modules && git clone https://github.com/larukedi/laroux.js.git laroux.js && cd laroux.js && git checkout $(LAROUX_VERSION) && npm install )