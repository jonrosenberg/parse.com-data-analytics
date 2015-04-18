[![Build Status](https://travis-ci.org/jonrosenberg/parse.com-data-analytics.svg)](https://travis-ci.org/jonrosenberg/parse.com-data-analytics)

# Angular Parse Analytics Project

## Getting started

### Create parse account or have one you want to connect to

### set up parseDataViz

```
git clone https://github.com/davidolesch/ParseDataViz
```

Get started by adding parseDataViz.js to your cloud directory within your Parse CloudCode directory. Next add the line var parseDataViz = require('cloud/parseDataViz.js'); to your main.js file. Finally deploy to your Parse app.

For mroe info: (https://github.com/davidolesch/ParseDataViz) 

### Prerequisites

You need git to clone the angular-seed repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test angular-seed. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

Clone the angular-seed repository using [git][git]:

```
git clone https://github.com/jonrosenberg/parse.com-data-analytics
cd parse.com-data-analytics
```


### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
angular-seed changes this location through the `.bowerrc` file.  Putting it in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.

For more info see: (https://github.com/angular/angular-seed)

## Application Stack
ParseDataViz [Github David Olesch Parse Data Visualization](https://github.com/davidolesch/ParseDataViz)
Angular Seed [Github angular/angular-seed](https://github.com/angular/angular-seed)
Parse Angular Patch [Github brandid/parse-angular-patch](https://github.com/brandid/parse-angular-patch)

