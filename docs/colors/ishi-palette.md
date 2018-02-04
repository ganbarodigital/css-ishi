{% import "ishi.twig" as ishi %}
# Ishi Palette

## Introduction

Ishi uses color as part of presenting different typography and components. These colors are chosen for their readability on a wide range - and quality - of devices.

## The Colors

<div class="grid">
    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('ishi-darkred', '#a94442', 'dark-bg') }}
                {{ ishi.small_colorswatch('ishi-red', '#c7254e', 'dark-bg') }}
                {{ ishi.small_colorswatch('ishi-lightred', '#f2dede') }}
                {{ ishi.small_colorswatch('ishi-palered', '#f9f2f4') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('ishi-darkgreen', '#3c763d', 'dark-bg') }}
                {{ ishi.small_colorswatch('ishi-palegreen', '#dff0d8') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('ishi-darkblue', '#234F83', 'dark-bg') }}
                {{ ishi.small_colorswatch('ishi-lightblue', '#34789a', 'dark-bg') }}
                {{ ishi.small_colorswatch('ishi-paleblue', '#f4f8fa') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('ishi-darkyellow', '#e8ca2b') }}
                {{ ishi.small_colorswatch('ishi-paleyellow', '#fcf8e3') }}
            </ul>
        </div>
    </div>

    <div class="cell">
        <div class="swatch">
            <ul>
                {{ ishi.small_colorswatch('ishi-black', '#000000', 'dark-bg') }}
                {{ ishi.small_colorswatch('ishi-nero', '#222222', 'dark-bg') }}
                {{ ishi.small_colorswatch('ishi-carbon', '#303030', 'dark-bg') }}
                {{ ishi.small_colorswatch('ishi-graphite', '#404040', 'dark-bg') }}
                {{ ishi.small_colorswatch('ishi-dimgray', '#696969', 'dark-bg') }}
                {{ ishi.small_colorswatch('ishi-gray', '#a8a8a8') }}
                {{ ishi.small_colorswatch('ishi-lightgray', '#DDDDDD') }}
                {{ ishi.small_colorswatch('ishi-palegray', '#EEEEEE') }}
                {{ ishi.small_colorswatch('ishi-white', '#FFFFFF') }}
            </ul>
        </div>
    </div>
</div>
