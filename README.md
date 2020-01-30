# Creating custom menu bar in Electron

You are building an electron app and want to replace that default menu bar with some thing cool. Let's see how to build a custom menu bar by building a similar one to slack's menubar.

## Pre-requisite

Basics of ElectronJS. Check [this tutorial](https://www.electronjs.org/docs/tutorial/first-app) to get started.

## What we'll build

Here is what it is going to look when we finish.

<p align="center">
  <img alt="Result image before clicking on menu" src="./result_image.jpg" width="500" />
</p>

<p align="center">
  <img alt="Result image with menu open" src="./result_image_2.jpg" width="500" />
</p>

<p align="center">
  <img alt="Result image with mouse over close" src="./result_image_3.jpg" width="500" />
</p>

## Set up electron project

Set up a minimal electron app from electrons's official quick start github repo.

```
# Clone the Quick Start repository
$ git clone https://github.com/electron/electron-quick-start

# Go into the repository
$ cd electron-quick-start

# Install the dependencies and run
$ npm install && npm start

```

## Main process code
