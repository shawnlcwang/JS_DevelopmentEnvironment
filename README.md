JavaScript Node.js Development Environment: Node Application Boiler Plate/Starter Kit

1. Editors Configuration 
- config file: /.editorconfig (customizable) 
- editor: Visual Studio Code/Atom (plugin installatiion required) 

2. Package Management
- config file: /package.json (customizable)  
- dir: node_modules (npm i / npm install: install all the JS dev-env npm packages) 
- manager: Node Package Manager (npm)

3. Development Web Server
- starter file: /buildScripts/srcServer.js (boiler plate) 
- starter file: /src/index.html (boiler plate) 
- package file: /ngrok.exe (dev-in-progress sharing)
- dev-webserver framework: Express (configurable & production grade)
- dev-in-progress sharing: ngrok (./ngrok authtoken 1YgrbFfKyaBzPDEq9Vl9Fv2hQr9_2J5g2hdRBH8D9wuqMxgHn => ngrok http port# => url sharing)

4. Tasks Automation 
- config file: /package.json ("scripts":{})
- automation: npm scripts (use tools directly & no separate plugins)
- scripts: npm run <start/security/fix/share/lint>

5. JS Versions Transpiling (post-2015: ES6/ES7/ES8 => post-2009: ES5)
- config file: /.babelrc (non npm specific)  
- alternative file: /package.json ("babel":{})
- transpiler: Babel 
- altervative transpilers: TypeScript (superset of ES6) / Elm (different syntax)]

6. JS Modules Bundling (bundle different JS modules => single executable browser JS file )
- config file: /webpack.config.dev.js (webpack bundler configuration)
- starter file: /src/index.js
- starter file: /src/index.css
- module format: ES6 modules 
- alternative module formats: IIFE / AsynchronousMD / CommonJS / UniversalMD (past formats)
- bundler: Webpack 
- alternative bundlers: Broswerify / Rollup / JSPM
- sourcemap: Webpack configuration {devtool: 'inline-source-map'} & use "debugger" keyword

7. JS Linting 
- config file: /.eslintrc.json (non npm specific)  
- alternative file: /package.json ("eslintConfig":{})
- linter: ESLint
- alternative linters: JSLint / JSHint
- rules: using recommended preset
- rules-warning/error: "no-console": 1 / "no-console": 2
- plugin: "plugin:import/errors", "plugin:import/warnings" 
- preset: "eslint:recommended"

8. JS Unit Testing 
- config file: /buildScripts/testSetup.js
- starter file: /src/index.test.js
- testing framework: Mocha  
- assertion library: Chai 
- helper library: JSDOM
- testing environment: Node (testing alongside src files upon save)

9. JS Continuous Intergration (CI) Testing for Production 
- config file: /.travis.yml
- CI servers: Travis (Linux/Mac) 
- config file: /.appveyor.yml
- CI servers: Appveyor (Windows)
- Git environment: git status > git add . > git commit -m "<msg>" > git push 

10. HTTP Calls APIs
- centralized API file: /src/api/userApi.js 
- HTTP call server Node apporach: Node (request module)
- alternative server Node approach: Node (http module)
- HTTP call client browser approach: Fetch 
- alternative client browser approach: XMLHttpRequest/jQuery/Angular
- HTTP call Node & browser approach: isomorphic-fetch/xhr/SuperAgent/Axios
- potential browser polyfill: https://polyfill.io/

11. Mock HTTP Calls APIs for Prototyping/Testing 
- Mock schema: JSON Schema Faker 
- Mock data: JSON Schema Faker (faker.js/chance.js/randexp.js)
- Mock HTTP calls API: JSON Server
- alternative mock API: Nock/static JSON/Express
