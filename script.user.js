// ==UserScript==
// @name         Pixeldrain Download Bypass
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  Download pixeldrain file without any limitation.
// @author       BIPLOB
// @match        https://pixeldrain.com/u/*
// @grant        none
// @run-at       document-start
// @updateURL    https://update.greasyfork.org/scripts/542461/Pixeldrain%20Download%20Bypass.user.js
// @downloadURL  https://update.greasyfork.org/scripts/542461/Pixeldrain%20Download%20Bypass.user.js
// ==/UserScript==

(function() {
    'use strict';

    // --- Configuration ---
    // The new domain you want to redirect to.
    const newDomain = 'https://pixel.asianrev.fun';
    // -------------------

    // Get the path from the URL (e.g., "/u/bXCUGPMA")
    const path = window.location.pathname;

    // Extract the file ID by splitting the path and taking the last part.
    const fileId = path.split('/').pop();

    // Ensure we actually got a file ID before redirecting.
    if (fileId) {
        // Construct the new URL.
        const redirectUrl = `${newDomain}/${fileId}`;

        // Perform the redirect immediately.
        window.location.href = redirectUrl;
    }
})();
