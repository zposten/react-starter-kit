# React Starter Kit

Linux: [![Build Status](https://travis-ci.org/zposten/react-starter-kit.svg?branch=master)](https://travis-ci.org/zposten/react-starter-kit) <br>
Windows: [![Build status](https://ci.appveyor.com/api/projects/status/7x1yl9r4r98y42l6/branch/master?svg=true)](https://ci.appveyor.com/project/Zach31771/react-starter-kit/branch/master)



A jumping off point for any react project.  It has best practices built in, making doing the right thing the easy thing!

There are many choices to make when establishing a JS project, this is one of the reasons that doing so is so difficult and time consuming.  I have made the following decisions for this project:

- Automation tool: npm scripts
- Transpiler: Babel
- Module format: ES2015+
- Bundler: Webpack
- Linter: ES Lint
  - Linting standards: ES Lint's recommended set
  - Warnings for console.log
- Test framework: Mocha
  - Assertion library: Chai
  - Test helper libraries: JSDOM, Cheerio
  - Test placment: alongside classes
  - Where to run tests: In memory
  - When to run tests: Every time you save
- CI Servers: Travis and AppVeyor
- HTTP Requests: Fetch
- Mocking an API: json-server, JSON Schema Faker
- Styles
  - CSS modules
  - SCSS
  - PostCSS
    - Autoprefixer
- Data flow architecture: Redux
  - Asynchronous calls: Redux thunk