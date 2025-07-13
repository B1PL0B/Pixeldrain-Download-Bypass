# Pixeldrain Download Bypass

A simple userscript to bypass the download limitations on Pixeldrain by redirecting to an alternative domain.

## Description

This script automatically redirects you from a `pixeldrain.com/u/...` URL to an alternative mirror, `pixel.asianrev.fun`, allowing for direct downloads without any timers or restrictions.

## How It Works

The script captures the file ID from the Pixeldrain URL and constructs a new URL using the alternative domain. It then immediately redirects the browser to this new URL.
For example, `https://pixeldrain.com/u/bXCUGPMA` becomes `https://pixel.asianrev.fun/bXCUGPMA`.

## Installation (Desktop)

Make sure you have a userscript manager installed on your desktop browser, such as:

* [Tampermonkey](https://www.tampermonkey.net/) (Recommended)
* [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)
* [Violentmonkey](https://violentmonkey.github.io/get-it/)

Install the script from [Greasy Fork](https://greasyfork.org/en/scripts/542461-pixeldrain-download-bypass).

## Usage on Android

To use this userscript on Android, you have a couple of options.

### Recommended: Via Browser

The recommended method is to use **[Via Browser](https://play.google.com/store/apps/details?id=mark.via.gp)**. It has built-in support for userscripts, so you don't need to install any extra extensions—it just works.

### Alternative: Firefox

Alternatively, you can install the **[Firefox browser for Android](https://play.google.com/store/apps/details?id=org.mozilla.firefox)** and then add the Violentmonkey extension to it.
