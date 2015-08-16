---
layout: contributing
title: Contributing
pageflow_name: contributing
---
# Contributing

Ishi is open-source software from [Ganbaro Digital](https://ganbarodigital.com), released under [the MIT license]({% include pageurl.html name='license' %}). We welcome all contributions to the framework that further [the goals]({% include pageurl.html name='goals' %}) that we have for Ishi.

Before contributing, please read our [code of conduct]({% include pageurl.html name='code-of-conduct' %}). Please also make sure that you have the necessary legal authority to contribute - for example, that you own the work that you are submitting, or that your employer has authorised you to contribute work that they own.

All contributions must be licensed under [the MIT license]({% include pageurl.html name='license' %}).

## How To Contribute Via Github

Ishi uses the [Gitflow](http://datasift.github.io/gitflow/) model for managing branches in our Git repository:

* `master` contains tagged, released code only
* `develop` contains completed features & bugfixes that are waiting for release
* `feature/*` branches contain work-in-progress

Don't worry if you're not used to Gitflow. Follow these steps for your features or fixes:

1. on Github, fork the `ganbarodigital/css-ishi` project.
1. clone your fork to your local computer
1. create a new branch on your local computer: `git checkout -b feature/<my-feature> develop`
1. work on your feature

When you're ready to submit your pull request, please make sure it's a pull request against our `develop` branch.

We'll check your pull request for the following:

1. does the pull request apply cleanly against our `develop` branch?
1. does it fit [our goals for the project]({% include pageurl.html name='goals' %})?
1. do any new variables, classes, or mixins fit into the [internal structure]({% include pageurl.html name='sass-structure' %})?
1. does the pull request include updated docs showing how the new feature works?

If the answer is 'no' to any of those, we'll respond and let you know what we need you to do before we can accept your pull request.

## Accepted Contributions

If we accept your pull request, we'll add your details to our [authors]({% include pageurl.html name='authors' %}) page, so that your contribution is acknowledged. We'll also add details of your change to our [changelog]({% include pageurl.html name='changelog' %}) page.