# Overview

This project contains a fully featured setup you need to start developing web frontends using 

- Single File VueJS Components
- Global SASS/SCSS Stylesheets (Both are supported)
- Modern Javascript (Including CommonJS Modules and ES2016)
- Storyboard generation using @storyboard/vue

# Installation

A simple `npm install` shall suffice.  
Take note though that changing the version numbers in package.json is quite unstable,  
due to the complex dependencies going on.

## Vue Components
--- 

#### Using Sass/Scss Variables in your code

It is absolutely imperative that you do not `@import` files that contain CSS rules into scoped styles in Vue Components.  
Due to the way that scoped styles get processed this can easily lead to massive code duplication.  

It is however recommended that you include  

`@import "settings"`

in your code if you want, as this will allow you access to some useful mixins and functions.  
Anyone editing the settings file shall be under extreme caution not to accidentally bloat this file.  
Mixings and Variables are perfectly fine, since they get compiled away, but any CSS rules will be  
duplicated across every component instantiation that includes this file, which could potentially be hundreds.