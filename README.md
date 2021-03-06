# Exertis Micro-P Samsung Mobile Microsite

This project is based on the [Bang-Conect](https://github.com/ExertisMicro-P/Bang-Conect) (multi-page) framework.

Bang's test site: [http://samsung-mobile.microp.bang-on.net/?project=samsung-mobile](http://samsung-mobile.microp.bang-on.net/?project=samsung-mobile)

## TODO
* Better workflow for `src/js`. Ideally we want to concatenate 3rd party plugins and our custom scripts on `grunt build` or `grunt watch`. 3rd party plugins can be minified, our custom scripts should be left un-minified 
* Add linting task to grunt for our custom scripts in `src/js`

## Getting started

### Dependencies

* [grunt](http://gruntjs.com/installing-grunt) (and node)
* [bundler](http://bundler.io/) (and ruby)
* [Editorconfig](https://github.com/sindresorhus/editorconfig-sublime) sublime plugin
* [Handlebars](https://github.com/daaain/Handlebars) sublime plugin

You'll also want the [livereload browser extension](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions).

### Setup

Clone the repo to your local machine:
```sh
git clone git@github.com:ExertisMicro-P/Bang-Samsung-Mobile.git
cd Bang-Samsung-Mobile
```

Install the node modules:
```sh
npm install
```

Install the ruby gems:
```sh
bundle install
```

Generate the `newer` cache (this will take a minute or two).
```sh
grunt newer:imagemin
```

## Development

**You should not be changing anything in the [multi-page](multi-page) or [samsung-mobile](samsung-mobile) directories directly.**

Our files can be found in the [src](src) directory. The files in `src` are then compiled by grunt (in combination with `micro-site`) to build the `samsung-mobile` directory.

To avoid confusing files from the `samsung-mobile` and `src` directories when making content changes, it's best to open only the `src` directly in your editor, e.g. `subl Bang-Samsung-Mobile/src`.

To start a local webserver with grunt listening for changes simply run `grunt`.

Running or `grunt` or `grunt watch` will listen for changes and do partial recompile of the `samsung-mobile` microsite, but this is **not a complete build**. `grunt build` should be run before committing.

## Grunt tasks

* `grunt` - alias for `grunt watch` & `grunt server`
* `grunt watch` - watch the `src` directory for changes
* `grunt server` - run a local webserver and open a browser tab
* `grunt build` - compile the `samsung-mobile` microsite
* `grunt rebuild` - wipe the `samsung-mobile` microsite before building (updates the `micro-site` framework).
* `grunt deploy:test` - deploy **committed and pushed** changes to test site

## Updating the multi-page framework

The [multi-page](multi-page) framework should be kept up to date with the version in the [Bang-Conect](https://github.com/ExertisMicro-P/Bang-Conect) repository.

You can update the framework by pulling the latest version from [Bang-Conect](https://github.com/ExertisMicro-P/Bang-Conect) and copying the changes into the repo.

```sh
# make sure to clone the repo outside of this one
git clone git@github.com:ExertisMicro-P/Bang-Conect.git

rsync -r --delete Bang-Conect/multi-page Bang-Conect/index.html Bang-Samsung-Mobile/
cd Bang-Samsung-Mobile
grunt rebuild
grunt server
```

You'll then need to test everything is still working as expected before committing the changes. It's best to commit a library update on it's own without additional changes, when possible.

## Deploying to test

Test site: [http://samsung-mobile.microp.bang-on.net/?project=samsung-mobile](http://samsung-mobile.microp.bang-on.net/?project=samsung-mobile)

1. Run `grunt build` (or `grunt rebuild`)
2. Commit and push changes
3. Deploy the changes to the test site with your preferred method:

```sh
# option 1 - use grunt (under the covers this is basically an alias for option 3)
grunt deploy:test

# option 2 - use the ec2 script
ec2 deploy site microp/samsung-mobile-microsite-test

# option 3 - run remotely over ssh
ssh -t vapour.ec2 'cd /data/microp/samsung-mobile-microsite-test/ && ./deploy.sh'

# option 4 - ssh to the machine and run locally
ssh vapour.ec2
cd /data/microp/samsung-mobile-microsite-test
./deploy.sh
```
