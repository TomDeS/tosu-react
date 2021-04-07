# Tosu.be: no more friesday discussions

<p align="center">
  <a href="https://github.com/TomDeS/tosu-react/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="tosu.be is released under the MIT license." />
  </a>
    <img src="https://img.shields.io/netlify/dd67d570-42f1-46c8-939a-8a04a1c9a862" alt="Current Netlify build status." />
    <img alt="GitHub issues count" src="https://img.shields.io/github/issues/tomdes/tosu-react"/>
</p>

Ever had a discussion with your colleagues on who should go and get the Belgian fries on Friday? While interesting, those discussions may not take too long. You don't want to go hungry, right? There can be only one<sup id="a1">[1](#f1)</sup> solution to this issue: let the nyan cats decide! The one that gets the farthest, can go and get the fries<sup id="a2">[2](#f2)</sup>. And as you can see, the winner is totally pseudo-randomly decided on. Now, go and enjoy the cats.

## What's in it?

It all started with nyan cats. But there's more not-so-hidden functionality.

### Bank account generator

Were you ever in need of a random and valid bank account? Probably not. But if you were, tosu.be has you covered. Currently two countries are supported:

- Belgium
- the Netherlands

You can easily generate IBANs which passess most (all?) modern checks. Modern, since the eleventest for Dutch bank accounts is removed as it is no longer required.

### Crypto

Implementing the great CryptoJS library for some quick base64 encoding/decoding and SHA-256 transforming.

### Racing

The nyan cats, loved by young and old. And everyone who's hungry on a friesday 🍟.

## How is it made?

The answer, my friend, is React and Gatsby.

## How can I work on it?

1. Install the Gatsby CLI if you hadn't already
   ```shell
   npm install -g gatsby-cli
   ```
2. Clone the main branch
   ```shell
   git clone https://github.com/TomDeS/tosu-react
   ```
3. Move into the website directory and start it up:
   ```shell
   cd tosu-react
   gatsby develop
   ```
4. Enjoy!

---

<b id="f1">1</b>
Ok, I guess technically there may be more than one way. But then again... nyan cats! [↩](#a1)

<b id="f2">2</b>
You may or may not have different uses for this functionality. [↩](#a2)

---
