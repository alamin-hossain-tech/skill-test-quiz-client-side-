import React from "react";

const Blog = () => {
  return (
    <div className="py-5" style={{ height: "80vh" }}>
      <h2>Blog</h2>
      <div className="container pt-5">
        <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What is the Purpose of React Router ?
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body text-start">
                ReactJS Router is mainly used for developing Single Page Web
                Applications. React Router is used to define multiple routes in
                the application. When a user types a specific URL into the
                browser, and if this URL path matches any 'route' inside the
                router file, the user will be redirected to that particular
                route. React Router is a standard library system built on top of
                the React and used to create routing in the React application
                using React Router Package. It provides the synchronous URL on
                the browser with data that will be displayed on the web page. It
                maintains the standard structure and behavior of the application
                and mainly used for developing single page web applications.
                React Router plays an important role to display multiple views
                in a single page application. Without React Router, it is not
                possible to display multiple views in React applications. Most
                of the social media websites like Facebook, Instagram uses React
                Router for rendering multiple views.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                How Context API Works?
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body text-start">
                The React Context API is a way for a React app to effectively
                produce global variables that can be passed around. This is the
                alternative to "prop drilling" or moving props from grandparent
                to child to parent, and so on. Context is also touted as an
                easier, lighter approach to state management using
                Redux.React.createContext() is all you need. It returns a
                consumer and a provider. Provider is a component that as it's
                names suggests provides the state to its children. It will hold
                the "store" and be the parent of all the components that might
                need that store.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Waht are the use of UseRef Hook in REACT ?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body text-start">
                The useRef hook is the new addition in React 16.8. Before
                proceeding to this article there is a prerequisite to know about
                the ref in react. The useRef is a hook that allows to directly
                create a reference to the DOM element in the functional
                component.The useRef returns a mutable ref object. This object
                has a property called .current. The value is persisted in the
                refContainer.current property. These values are accessed from
                the current property of the returned object. The .current
                property could be initialised to the passed argument
                initialValue e.g. useRef(initialValue). The object can persist a
                value for a full lifetime of the component.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
