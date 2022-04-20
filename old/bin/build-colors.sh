#!/bin/bash

DEST="src/ishi/00-setup/reference/_documented_colors.scss"

# this stops Bash from stripping out the newlines from our find/grep
# combination
OLD_IFS=$IFS
IFS=""

# prepare the info that our PHP script needs
x=`find docs/colors -type f -print0 | xargs -0 grep 'colorswatch' | grep -v howto.md | grep -v '/details/'`
x=`echo $x | sed -e 's/{{//g;'`
x=`echo $x | sed -e 's/}}//g;'`
x=`echo $x | sed -e 's/ishi\\.//g;'`

# use PHP to do the hard work
echo $x | php `dirname $0`/build-color-vars.php | sort > $DEST
echo $x | php `dirname $0`/build-color-mixins.php >> $DEST
echo $x | php `dirname $0`/build-color-detail-page.php