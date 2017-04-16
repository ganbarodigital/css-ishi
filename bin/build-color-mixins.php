<?php

// do not call this directly - run build-colors.sh instead, and it will
// generate the content that we expect

require_once __DIR__ . '/analyse-color-swatch.php';

$lines='';
while ($line = fgets(STDIN)) {
    $lines .= $line;
}
$lines = explode("\n", $lines);

// here we go!
$currentFile='';
foreach($lines as $line) {
    $parts = explode(':', $line);
    $filename = $parts[0];
    if (!isset($parts[1])) {
        continue;
    }
    $funcCall = $parts[1] . ';';

    // are we looking at a new file?
    if ($filename !== $currentFile) {
        $currentFile = $filename;
        $prefix='';
    }

    $details = eval('return ' . $funcCall);
    extract($details);

    $sRGB = $bgColor->getSRGB();
    $red = $sRGB[0];
    $green = $sRGB[1];
    $blue = $sRGB[2];

    echo <<<EOS
@mixin {$varName}-bg {
    background-color: \$$varName;
    color: $fgColor;
}
@mixin {$varName}-rgba-bg(\$transparency) {
    background-color: rgba($red, $green, $blue, \$transparency);
    color: $fgColor;
}

EOS;

}