# grunt-rvm-switcher

> Grunt plugin to allow Ruby Virtual Machine switching through grunt configuration

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-rvm-switcher --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-rvm-switcher');
```

## The "rvm_switch" task

### Overview
In your project's Gruntfile, add a section named `rvm_switcher` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  rvm_switch: {
    options: {
      ruby_version: '2.1.2',
      virtual_machine: 'styleguide-1.0',
      rvm_path: '$HOME/.rvm/scripts/rvm'
    },
  },
});
```

### Options

#### options.ruby_version
Type: `String`
Default value: `2.1.2`

The ruby version to use for the vm.

#### options.virtual_machine
Type: `String`
Default value: `styleguide-1.0`

The virtual machine config to load.

#### options.rvm_path
Type: `String`
Default value: `$HOME/.rvm/scripts/rvm`

The path to your rvm script (this cannot be the bin)

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  rvm_switcher: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  rvm_switcher: {
    options: {
      separator: ': ',
      punctuation: ' !!!',
    },
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
