# Pixeldrain Download Bypass

A simple userscript to bypass the download limitations on Pixeldrain by redirecting to an alternative domain.

## Description

This script automatically redirects you from a `pixeldrain.com/u/...` URL to an alternative mirror, `pixel.asianrev.fun`, allowing for direct downloads without any timers or restrictions.

## How It Works

The script captures the file ID from the Pixeldrain URL and constructs a new URL using the alternative domain. It then immediately redirects the browser to this new URL.
For example, `https://pixeldrain.com/u/bXCUGPMA` becomes `https://pixel.asianrev.fun/bXCUGPMA`.

## Installation

Make sure you have a userscript manager installed, such as:

* [Tampermonkey](https://www.tampermonkey.net/) (Recommended)
* [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)
* [Violentmonkey](https://violentmonkey.github.io/get-it/)

Install the script from [Greasy Fork](https://greasyfork.org/en/scripts/542461-pixeldrain-download-bypass).

