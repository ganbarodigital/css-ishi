---
layout: concepts
title: Device Groups
pageflow_name: device-groups
---

# Device Groups

## Introduction

Ishi uses CSS media queries to look its very best on your favourite device, whether that's your smartphone, your tablet, or your desktop or laptop computer. These media queries target _device groups_. The inspiration for this approach came from the BBC.

The BBC has rich experience in publishing written content that has to be available just about everywhere. In particular, we're big fans of how the [BBC Global Experience Language (GEL) Guidelines](http://www.bbc.co.uk/gel) are approaching the difficult topic of responsive websites.

Unlike many popular CSS frameworks / toolkits, the BBC GEL Guidelines aren't organised around groups such as 'extra-small', 'small', 'medium', or 'large'. Instead, the BBC GEL Guidelines define groups based on the type of device you're likely to be using. The idea is to style each group so that your website looks the best it can on each type of device.

## Supported Groups

Each [Ishi theme]({% include pageurl.html name='themes' %}) supports these device groups:

* __Group A:__ feature phones (up to 320px wide)
* __Group B:__ smart phones (up to 600px wide)
* __Group C:__ tablets (up to 1006px wide)
* __Group D:__ desktops and laptops (over 1006px wide)

## Why It Works

This approach works because the vast majority of people have their browsers full-screen.

* If you're on a smart phone or a tablet, you don't have a choice.
* If you're on a laptop,