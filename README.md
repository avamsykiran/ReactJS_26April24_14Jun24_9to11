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

            returnType can be any supported data type incuding void and never.

            mostly we use void, and void facilitates null value.
            never doesnt even allow nulls.

            
        OOP

            interface
            class
            aliases
            enums
            unions

    React JS Intro
    --------------------------------------------------------------------

        is a javascript based SPA framework.

        SPA - Single Page Application. is a web application that has only one html page
        and the entire content of the page is managed and generated on the client machine.

        Static WebSite
            a folder having pre-written .html documents hosted on a HTTP SERVER.

        Dynamic Web Applications

            Http-Server                                  Client/Browser

                Server Side Programs
                (servlets/jsp/php/aspx..etc.,)
                                <----------------REQ---------
                            generate html dynamically
                                ------ (generated html) RESP ------>
                                
                                <----------------REQ---------
                            generate html dynamically
                                ------ (generated html) RESP ------>


        Single Page Applications


            Http-Server                                  Client/Browser

                spa-bundle
                (index.html + .js)
                                <----------------REQ---------
                                ------ (spa-bundle) RESP ------>    index.html along with the JS will be loaded

                                                                    any form submition or any event or any link
                                                                    are all handled by the JS on the clietn itself.

                                                                    the JS on the client will generate html dynamically
                                                                    and will replace the content of the index.html
                                                                    as and when neeed.

            Application Server
                
                rest-api        <--------.json/.xml------------>    spa-bundle will call the rest-api for data operations.


        Create React JS Application

            npx create-react-app app-name

        React JS Components

            A component is a reusable isolated unit that forms the html-extension of React.

            html-extension allows us to create our own html elements and attributes.

            The html-element that we create using react is called a Component.

            1. Class Components
            2. Function Components

            Class Component 
                is a javascript class that is extended from React.Component class.

                class Dashboard extends React.Component{
                    constructor(props){
                        super(props);
                        this.state = {};
                    }

                    render(){
                        return (
                            /*an html element*/
                        );
                    }
                }

                <Dashboard></Dashboard>

            Function Component

                is a javascript function that accpets the props as a parmeter and returns an html-element.

                const Banner = (props) => (/* html element */ );

                <Banner></Banner>

            JSX - JavsScript eXtended.

                is a amolgamation of javascript + html.

                in other words JSX is javascript embeded with HTML.

                This is deviced to eliminate a lot of boiler plate coding while DOM manipulation is written.

                .js

                    let userName = "Vamsy";
                    let pObj = document.createElement("p");
                    pObj.innerText = `Hello ${userName}! How Are You?`;
                
                .jsx

                    let userName = "Vamsy";
                    let pObj = <p>{userName}</p>;

                .js

                    let friends = ['Vamsy','Rahul','Varma','Vijay'];
                    let frdList = document.createElement("ol");
                    
                    for(let f of friends){
                        let friendItem = document.createElement("li");
                        friendItem.innerText = f;
                        frdList.append(friendItem);
                    }

                .jsx

                    let friends = ['Vamsy','Rahul','Varma','Vijay'];
                    let frdList = (
                        <ol>
                            { friends.map( f => <li>{f}</li> ) }
                        </ol>
                    );

                Rules

                    1. "class" attribute is not to be used, instead 'className' is to be used.
                    2. the html elements must be always written in lower-case 
                    3. the entire jsx is case-sensitive.
                    4. the function component or the 'render()' function of a class component can return only one top-most element.

                    const Banner = () => <div></div>; 
                    const Header = () => ( <header> <section></section> </header>  );

        Class Component

            From React.Component class, 'state','setState()','render()','componentDidMount()','componentDidUpdate()'
            and a few more life cycle methods are inhereted by a class Component.

            state       is the field of a Class Component tht holds all the data to be managed by that component.
                        state is continuosly monitored and as and when the state is modified, the 'render()' method is invoekd.
                        state is immutable, state is only replacable using 'setState()' method.

            render()    is the method that returns the DOM to be displayed by this component.
                        we developes ovveride the 'render()' method to decide on the DOM.

            setState()  can take a full or partial state and replace the existing state.

        Function Component vs Class Component

            function component has no 'state' or any other life cycle methods as compared to the class Component.
            And hence, Function Components are also called state-less components.
        
        'props' is short for properties. 'props' carry data from a parent component to a child component.
                props can be passed as attributes on to the child component tag from parent component.

    Shadow DOM / Virtual DOM

        is a in-memory copy of DOM managed by the react.

        Any change to the actual DOM will be very costly as it is directly linked with the screen.

        But changes to shadow DOM are much cheaper as it is not going reflect directly on the screen.

        Each time 'state' is modified, the shadow DOM is tweeked accordingly. Once all the changes
        on the shadom DOM is done, shadow DOM is superimposed on the actual DOM and only the final changes
        are shipped to the actual DOM.

        An attribute called 'key' is maintaiend on repitative DOM entries, to uniquly
        identify that DOM entry and mange changes.

    ReactJS on Typescript

        npm i -g typescript

        npx create-react-app app-name --template typescript

    Life Cycle Methods Of A Component

        constructor()
            |
            ↓
            render()
                |
                ↓
                componentDidMount()     //is used to execute any task after the first rendering..!
                            
                            /************************************************/
                                setState() has to get invoked
                                either in the componentDidMount()
                                or due to any event handler
                            /************************************************/
                                        |
                                        ↓
                                        render()
                                            |
                                            ↓
                                            componentDidUpdate()  //is used to execute any task after every rendering..!

            
    ReactJS Hooks

        Hook is a special function that provides features to a function component.

        useState        will add state feature to a function component.

                        let [getter,setter] = useState(initalValue);

                        let [x,setX] = useState(0);

                        use 'x' to read the value
                        use 'setX' to change the value

        useEffect       will add life cycle feature to the function component

                        useEffect(callBack)

                            the callBack is executed after every rendering...!

                        useEffect(callBack,[])
                            the array here indicates dependencies.
                            and here dependencies are empty.
                            the callBack is executed only one after first rendering...!

                        useEffect(callBack,[feild1,field2])
                            the array here indicates dependencies.
                            and here field1 and field2 are dependencies
                            the callBack is executed after every rendering... if there a change in value of
                            field1 or field2.

    NextJS

        is a UI framework based on ReactJs.

        Features
            Routing     is used for navigating from one component to another.

                        file system based routing is provided on top of
                        server components. These router support layouts,
                        error rendering, state rendering ..etc like features.

            Rendering   Server Components and Client Component

                        Server components will render on the server side and the 
                        cached html content is passed to the client.

                        Where as , client components can be re-rendered on the
                        client as well.

                        Server Components are employed when api-calls or 
                        authentication  or any other operation that invlove data
                        privacy or secracy has to be concerned.

                        Cleint Components are engaged where a user - interaction,
                        life cycle methods of component snd event handling for
                        a responsive application are needed.

            Data Feateching

                        supports aynsc/awati server component and flexible fetech api
                        to talk to rest-api and perform data operations

            Styling

                        supports a vriety of styling options that include CSS, TailWind CSS,
                        CSS-in-JS.

            Optimization

                        All static resources liek images, fonts, and non static resource like
                        scripts are optimized to improve the rendering time and performence.

            Typescript

                        Supports typescript for a type-safe application building.

        Createing a NextJS application

            npx create-next-app app-name

        hr-app
            |- public       is used to hold all static files like images, videos ..etc.,
            |- src
                |-app                   is refered to the context-root ("/")
                    |-global.css        is the global style sheet (equivalent to 'index.css' in reactjs)
                    |-layout.tsx        root-layout. And layout controls the structure of the page
                    |-page.tsx          provides the content of the page.
                    |
                    |-departments       is accessable as /departments
                    |   |-page.tsx
                    |
                    |-employees         is accessable as /employees
                    |   |-layout.tsx 
                    |   |-page.tsx
                    |   |-list          is accessable as /employees/list
                    |   |   |-page.tsx
                    |   |-save          is accessable as /employees/save
                    |   |   |-page.tsx
                    |
                    |-projects          is accessable as /projects
                    |   |-page.tsx    
                    |
                    |- lib              put all .ts files holding bussiness logic
                    |- ui               put all .tsx files for components.
                |-pages
                    |-api               represents rest-api
                        |-emps.js       http://localhost:3000/api/emps
                        |-depts.js      http://localhost:3000/api/depts
                        |-projs.js      http://localhost:3000/api/projs