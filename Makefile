# build the main CSS file from our sources
#
# @author    Stuart Herbert <stuherbert@ganbarodigital.com>
# @copyright 2015-present Ganbaro Digital Ltd www.ganbarodigital.com
# @license   http://www.opensource.org/licenses/bsd-license.php  BSD License
# @link      http://code.ganbarodigital.com/css-framework

VERSION = 0.1.0

COMMON_FILES = $(COMMON_GROUPA_FILES) $(COMMON_GROUPB_FILES) $(COMMON_GROUPC_FILES) $(COMMON_GROUPD_FILES) $(COMMON_RESET_FILES) $(COMMON_PREGROUP_FILES) $(COMMON_PERGROUP_FILES)

COMMON_RESET_FILES = \
	src/common/00-reset/normalize.css \
	src/common/00-reset/reset.less

COMMON_PREGROUP_FILES = \
	src/common/01-pre-groups/clearfix.less \
	src/common/01-pre-groups/colors.less \
	src/common/01-pre-groups/type.less

COMMON_GROUPA_FILES = \
	src/common/02-group-a/type.less

COMMON_GROUPB_FILES = \
	src/common/02-group-b/type.less

COMMON_GROUPC_FILES = \
	src/common/02-group-c/type.less

COMMON_GROUPD_FILES = \
	src/common/02-group-d/type.less

COMMON_PERGROUP_FILES = \
	src/common/02-per-group/callouts.less \
	src/common/02-per-group/footer.less \
	src/common/02-per-group/lists.less \
	src/common/02-per-group/panels.less \
	src/common/02-per-group/type.less

LAYOUT_FILES = \
	src/layouts/02-group-a/layout-left.less \
	src/layouts/02-group-b/layout-left.less \
	src/layouts/02-group-c/layout-left.less \
	src/layouts/02-group-d/layout-left.less \
	src/layouts/layout-left.less

.PHONY: clean

all: ishi-$(VERSION)-common-min.css ishi-$(VERSION)-layout-left-min.css docs

ishi-$(VERSION)-common.css: $(COMMON_FILES)
	lessc src/common/main.less > ishi-$(VERSION)-common.css

ishi-$(VERSION)-common-min.css: ishi-$(VERSION)-common.css
	lessc --clean-css="advanced keepSpecialComments=0" ishi-$(VERSION)-common.css > ishi-$(VERSION)-common-min.css

ishi-$(VERSION)-layout-left.css: $(LAYOUT_FILES)
	lessc src/layouts/layout-left.less > ishi-$(VERSION)-layout-left.css

ishi-$(VERSION)-layout-left-min.css: ishi-$(VERSION)-layout-left.css
	lessc --clean-css="advanced keepSpecialComments=0" ishi-$(VERSION)-layout-left.css > ishi-$(VERSION)-layout-left-min.css

src/common/00-reset/normalize.css:
	npm install --save normalize.css
	cp node_modules/normalize.css/normalize.css src/common/00-reset/normalize.css

clean:
	rm ishi-$(VERSION)-*.css

docs: ishi-$(VERSION)-common-min.css ishi-$(VERSION)-layout-left-min.css
	cp ishi-$(VERSION)-common.css docs/assets-without-prefixes/ishi-common.css
	cp ishi-$(VERSION)-layout-left.css docs/assets-without-prefixes/ishi-layout-left.css
	postcss --use autoprefixer docs/assets-without-prefixes/*.css --dir docs/assets/

tools:
	sudo npm install -g less
	sudo npm install --global postcss-cli autoprefixer
	npm install less-plugin-clean-css
