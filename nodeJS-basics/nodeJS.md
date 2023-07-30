what is node js?

node.js is a javascript runtime built on chrome's V8 javascript engine

What is a difference between a language and a runtime ?

creating a new language in 2 steps:
  - design the language
  - build something that runs it(javascript engine)

REPL - > READ EVALUATE PRINT LOOP. to enter a repl you need to type : node and enter . to exit the repl to need to type : .exit and enter.

WHEN TO USE NODE.JS:
  - node.js shines in : 
                        * non-blocking
                        * event-driven
                        * data-intensive
                        * I/O intensive
  - example application : 
                        * web servers
                        * real time applications (socket programming, etc.)
                        * command line tools
                        * APIs fronting NoSQL DB
                        * build tooling
    
single threaded - runs through a queue of events. using event loop.
a thread in node.js is a separate execution context in a single process

NODE.JS IS NOT GOOD FOR :
                         * data calculations
                         * processor intensive
                         * blocking operations

NPM - is like a package management
     :
     * repository/registry (online repository, command utility)

About npm
npm, Inc. is a company founded in 2014, and was acquired by GitHub in 2020. npm is a critical part of the JavaScript community and helps support one of the largest developer ecosystems in the world.

npm is lots of things.

npm is the package manager for Node.js. It was created in 2009 as an open source project to help JavaScript developers easily share packaged modules of code.

The npm Registry is a public collection of packages of open-source code for Node.js, front-end web apps, mobile apps, robots, routers, and countless other needs of the JavaScript community.

npm is the command line client that allows developers to install and publish those packages.

!!! THE POWER OF NPM IS DOWNLOADING DEPENDENCIES AND HAVING THEM AVAILABLE IN YOUR PROJECT
