ReactJS
-----------------------------------------------------------------------------------

    Pre-Requisites
    -----------------------------
        1. HTML 5
        2. CSS 3
        3. JavaScript (ES6)
        4. Bootstrap 5

    Objectives
    -----------------------------
        TypeScript 
        React 18 Fundamental
        React 18 Working components
        React 18 styling app
        React 18 NeXTjs Playbook 

    NodeJS
    --------------------------------

        is a javascript runtime.
        this allows javascript to execute in a standalone mode.

        https://nodejs.org

        node --version

        node script.js

        A project development involves variuos steps like
            1. Compose the code                     IDE             VSCode
            2. Compile the code                     Compiler        tsc
            3. Build the code and package           Build Tool      npm (node package manager)
            4. Test the app                         Testing Tool    jasmine
            5. Deploy the app                       Server          any http server
            6. Execute the app                      Runtime         any browser

        The tools like tsc, npm and jasmine are javascript tools and these tools
        use NodeJS as runtime.

        NodeJS is used as a development platform and Browsers are used as runtime by the APP.

        creating an application on NodeJS
            1. md proj
            2. cd proj
            3. npm init -y

        'package.json' is the build config file fro NPM.

        'node_modules' is the folder used to houe the dependencies.

        npm i package-name -g
        npm i package-name
        npm i

        npm uninstall package-name

        npm start
        npm run script-name
        npm test

    Typescript
    --------------------------------------------------------------------------------------------

        Typescript = JavaScript + Types

        Lab Setup

            tsc         typescript compiler

            compiling .ts into .js is called transpelling

        Creating a project:

            npm init -y
            npm i Typescript --save-dev

            npx tsc --init

            npx tsc filename.ts 

        Datatypes

            number
            string
            boolean
            bigint
            symbol          let empId = new Symbol()        let empId:Symbol = new Symbol();
            void

        Special Datatypes

            any
            unknown
            never
            undefined
            null

        Standard tsconfig

            {
                "compilerOptions": {
                    "module": "commonjs",
                    "esModuleInterop": true,
                    "target": "es6",
                    "moduleResolution": "node",
                    "sourceMap": false,
                    "outDir": "dist"
                },
                "lib": ["es2015"]
            }

        functions

            function funName(param1:type,param2:type) : returntype {

            }

            const funName = function(param1:type,param2:type) : returntype {

            }

            returnType can be any supported data type inc;uding void and never.

            mostly we use void, and void facilitates null value.
            never doesnt even allow nulls.

            
        OOP

            interface
            class
            aliases
            enums
            unions

            



    