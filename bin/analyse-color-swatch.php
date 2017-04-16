<?php

use GanbaroDigital\ColorCalc\V1\RGB\CalculateContrastRatio;
use GanbaroDigital\ColorCalc\V1\RGB\CalculateRelativeLuminosity;
use GanbaroDigital\ColorCalc\V1\RGB\CalculateYIQ;
use GanbaroDigital\CssParser\V1\Parsers\BuildCssColorValue;

require_once __DIR__ . "/../vendor/autoload.php";

// do not call this directly - run build-colors.sh instead, and it will
// generate the content that we expect

function classifyShade($yiq)
{
    if ($yiq < 100) {
        return 'dark';
    }
    if ($yiq > 155) {
        return 'bright';
    }

    return 'dull';
}

function small_colorswatch($name, $hex, $classes = null)
{
    static $varCache = [];

    // make sure all our variables are lower-case
    $varName = strtolower($name);

    // special case - avoid duplicate variables
    if (isset($varCache[$varName])) {
        return $varCache[$varName];
    }

    // light, or dark foreground color?
    $fgColorHex = '#000';
    $fgAltHex = '#fff';
    if (strpos($classes, 'dark-bg') !== false) {
        $fgColorHex = '#fff';
        $fgAltHex = '#000';
    }

    $retval = [
        "varName" => $varName,
        "cssClasses" => $classes,
        "bgColor" => BuildCssColorValue::from($hex),
        "fgColor" => BuildCssColorValue::from($fgColorHex),
        "fgAltColor" => BuildCssColorValue::from($fgAltHex),
    ];
    $retval['hex'] = (string)$retval['bgColor'];

    $retval['bgLuminosity'] = CalculateYIQ::from($retval['bgColor']);
    $retval['fgLuminosity'] = CalculateYIQ::from($retval['fgColor']);
    $retval['fgAltLuminosity'] = CalculateYIQ::from($retval['fgAltColor']);

    $retval['bgShade'] = classifyShade($retval['bgLuminosity']);
    $retval['fgShade'] = classifyShade($retval['fgLuminosity']);
    $retval['fgAltShare'] = classifyShade($retval['fgAltLuminosity']);

    $retval['bgRelLuminosity'] = round(CalculateRelativeLuminosity::from($retval['bgColor']), 3);
    $retval['fgRelLuminosity'] = round(CalculateRelativeLuminosity::from($retval['fgColor']), 3);
    $retval['fgAltRelLuminosity'] = round(CalculateRelativeLuminosity::from($retval['fgAltColor']), 3);

    $retval['contrastRatio'] = round(CalculateContrastRatio::from($retval['fgColor'], $retval['bgColor']), 3);
    $retval['contrastRatioAlt'] = round(CalculateContrastRatio::from($retval['fgAltColor'], $retval['bgColor']), 3);

    $retval['AA_normal'] = ($retval['contrastRatio'] >= 4.5) ? 'yes': 'no';
    $retval['AA_large'] = ($retval['contrastRatio'] >= 3.1) ? 'yes': 'no';
    $retval['AAA_normal'] = ($retval['contrastRatio'] >= 7.0) ? 'yes': 'no';
    $retval['AAA_large'] = ($retval['contrastRatio'] >= 4.5) ? 'yes': 'no';

    $retval['isContrastyBackground'] = $retval['bgShade'] === 'dull' ? 'no' : 'yes';
    $retval['hasClearContrast'] = $retval['fgShade'] != $retval['bgShade'] ? 'yes' : 'no';

    $retval['goodBgContentChoice'] = $retval['goodBgHeadingChoice'] = "yes";
    if ($retval['isContrastyBackground'] !== 'yes' || $retval['hasClearContrast'] !== 'yes' || $retval['AAA_normal'] !== 'yes') {
        $retval['goodBgContentChoice'] = "no";
    }
    if ($retval['AA_large'] !== 'yes') {
        $retval['goodBgHeadingChoice'] = 'no';
    }

    $varCache[$varName] = $retval;
    return $retval;
}

function large_colorswatch($name, $suffix, $hex, $classes = null)
{
    return small_colorswatch($name . '-' . $suffix, $hex, $classes);
}

function prefix_colorswatch($name, $prefix, $hex, $classes = null)
{
    return small_colorswatch($prefix . '-' . $name, $hex, $classes);
}

function sub_colorswatch($prefix, $name, $hex, $classes = null)
{
    return small_colorswatch($prefix . '-' . $name, $hex, $classes);
}
