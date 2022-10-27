import React from "react";

const Blog = () => {
  return (
    <div>
      <h3 className="text-3xl font-semibold text-center mb-10 font-textHead">
        This is Blog Section
      </h3>
      <div className="mb-8 px-3">
        <h4 className="text-lg font-textHead">What is cors?</h4>
        <p>
          Cors is a middleware, it happens when conflicting with cross origin
          resource or in a system there are two server running on the same
          system.Cross-Origin Resource Sharing (CORS) is an HTTP-header based
          mechanism that allows a server to indicate any origins (domain,
          scheme, or port) other than its own from which a browser should permit
          loading resources
        </p>
      </div>
      <div className="mb-8 px-3">
        <h4 className="text-lg font-textHead">
          What is FireBase? and what are their alternative
        </h4>
        <p>
          Firebase is a set of hosting services for any type of application.
          this is one of the googles belongings. For Authentication learning
          firebase can be the best choice. it also provides cloud storage google
          analytics many more. There are some good rivals of firebase like
          mongoDb, oracle database, couchbase etc.
        </p>
      </div>
      <div className="mb-8 px-3">
        <h4 className="text-lg font-textHead">How private route works</h4>
        <p>
          Private route is a beneficiary feature of react router. it let us
          protect a specified route. which route can not be accessed with an
          authorization of the app owner. private route mainly work like a
          cloak. it wrap all the route inside of it. whenever we need to access
          it, we wrap the specific route with it's tag and connect by
          destructure it as a children prop. And set the condition to access
          that route.
        </p>
      </div>
      <div className="mb-8 px-3">
        <h4 className="text-lg font-textHead">
          What is node and how it works?
        </h4>
        <p>
          Node is runtime library of javascript. it has been invented a man
          named ryan dahl. who bring out the v8 engine from chrome. and make
          javascript a versatile language. now javascript can be run with a
          browser.It is a used as backend service where javascript works on the
          server-side of the application. This way javascript is used on both
          frontend and backend. Node. js runs on chrome v8 engine which converts
          javascript code into machine code, it is highly scalable, lightweight,
          fast.
        </p>
      </div>
    </div>
  );
};

export default Blog;
