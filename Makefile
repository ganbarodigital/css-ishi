# build the main CSS file from our sources
#
# @author    Stuart Herbert <stuherbert@ganbarodigital.com>
# @copyright 2015-present Ganbaro Digital Ltd www.ganbarodigital.com
# @license   http://www.opensource.org/licenses/bsd-license.php  BSD License
# @link      http://code.ganbarodigital.com/css-framework

VERSION = 0.1.0

THIRD_PARTY_DEPS = \
	src/00-base/styles/normalize.css

THEMES = \
	build/ishi-$(VERSION)-article-left-sidebar.min.css

.PHONY: clean

all: $(THEMES) docs

build/ishi-$(VERSION)-article-left-sidebar.css: $(THIRD_PARTY_DEPS)
	lessc src/99-themes/article-left-sidebar/main.less > build/ishi-$(VERSION)-article-left-sidebar.css

build/ishi-$(VERSION)-article-left-sidebar.min.css: build/ishi-$(VERSION)-article-left-sidebar.css
	lessc --clean-css="advanced keepSpecialComments=0" build/ishi-$(VERSION)-article-left-sidebar.css > build/ishi-$(VERSION)-article-left-sidebar.min.css

src/00-base/styles/normalize.css:
	npm install --save normalize.css
	cp node_modules/normalize.css/normalize.css src/common/00-reset/normalize.css

clean:
	rm build/*

docs: $(THEMES)
	cp build/* docs/assets-without-prefixes/
	postcss --use autoprefixer docs/assets-without-prefixes/*.css --dir docs/assets/

tools:
	sudo npm install -g less
	sudo npm install --global postcss-cli autoprefixer
	npm install less-plugin-clean-css
