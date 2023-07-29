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