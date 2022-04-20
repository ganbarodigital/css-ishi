# CSS Ishi

A [Sass](http://sass-lang.com)-based _CSS Authoring Framework_ with a focus on

## Getting Setup

You need the following installed and working on your machine:

* Ruby (including support for building native extensions)
* Jekyll & Pygments
* NodeJS and NPM
* make

Jekyll v3.0 changed the default syntax highlighter from [Pygments](http://pygments.org/) to [Rouge](http://rouge.jneen.net/). At the time of writing, Rouge isn't the drop-in replacement for Pygments that you're looking for. We recommend that you stick with Pygments for the time being.

Once you have these working, run this command:

    make tools

### Ubuntu Instructions

Run these commands to get everything setup on Ubuntu:

    sudo apt-get install ruby ruby-dev
    sudo gem install jekyll pygments-rb
    curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
    sudo apt-get install -y nodejs
    make tools

We have to use a third-party build of [Node JS](http://nodejs.org). The version that Ubuntu ships with is too old.

## Building The Docs Site

To build Ishi's documentation, do the following:

    make docs
    cd docs && jekyll serve -H 0.0.0.0

You should now be able to see Ishi's documentation by browsing to [http://127.0.0.1:4000/].
