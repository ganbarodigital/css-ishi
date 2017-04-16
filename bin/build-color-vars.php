<?php

require_once __DIR__ . "/../vendor/autoload.php";
require_once __DIR__ . '/analyse-color-swatch.php';

// do not call this directly - run build-colors.sh instead, and it will
// generate the content that we expect

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

    // find out about the color
    $details = eval('return ' . $funcCall);
    extract($details);

    // write the details we care about out
    echo '$' . $varName . ': ' . $hex . ';' . PHP_EOL;

    // are we happy with the definition of this color?
    if ($contrastRatio < 4.5 && $contrastRatioAlt > 7.0) {
        fwrite(STDERR, "*** error: $varName would have much better contrast if you flipped the foreground color" . PHP_EOL);
        fwrite(STDERR, "contrast ratio for {$fgColor} / {$bgColor}: {$contrastRatio}" . PHP_EOL);
        fwrite(STDERR, "contrast ratio for {$fgAltColor} / {$bgColor}: {$contrastRatioAlt}" . PHP_EOL);
        exit(1);
    }
    if (($contrastRatio >= 4.5 && $contrastRatio < 7.0) && ($contrastRatioAlt < 7.0 && $contrastRatioAlt >= 4.5)) {
        fwrite(STDERR, "*** notice: $varName has bad color contrast; you flip the foreground color if you prefer without affecting accessibility" . PHP_EOL);
        // fwrite(STDERR, "contrast ratio for {$fgColor} / {$bgColor}: {$contrastRatio}" . PHP_EOL);
        // fwrite(STDERR, "contrast ratio for {$fgAltColor} / {$bgColor}: {$contrastRatioAlt}" . PHP_EOL);
    }

    if ($bgShade == $fgShade) {
        fwrite(STDERR, "*** warning: $varName doesn't have enough contrast; $fgShade on $bgShade" . PHP_EOL);
    }
}