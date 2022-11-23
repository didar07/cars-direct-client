import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p>This way to manage state in react was with a class-based component, to know if you are using a class-based component you have to check how you declare the component. For example This is a class-based component because it starts with class and has a constructor and a render method.</p>
                </div>
            </div>

            <br />
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does prototypical inheritance work?
                </div>
                <div className="collapse-content">
                    <p>When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype . That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.</p>
                </div>
            </div>
            <br />

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p>Unit testing is a software testing method where “units”—the individual components of software—are tested. Developers write unit tests for their code to make sure that the code works correctly. This helps to detect and protect against bugs in the future.</p>
                </div>
            </div>

            <br />
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p>
                        <h2 className='text-4xl font-bold'>React --</h2>
                        <h1>React is an open source JavaScript library for building interactive, stateful, and reusable user interfaces (UI). It is good for rendering complex UI with high performances. It also works with the basic fundamental of virtual Document Object Model (DOM) to offer a highly stable web application.</h1>
                    </p>
                    <br />
                    <p>
                        <h2 className='text-4xl font-bold'>Angular --</h2>
                        <h1>Angular is an open source, frontend web app framework by Google that has a Model-View-Controller (MVC) architecture and makes development, maintenance, and testing easier for developers. It’s great for building highly active and interactive web applications, but it is most popular for Single page applications.</h1>
                    </p>
                    <br />
                    <p>
                        <h2 className='text-4xl font-bold'>Vue --</h2>
                        <h1>Vue is a progressive JavaScript framework for building user interfaces. Vue is designed from the ground up to be incrementally adoptable. It comes with various optional tools for building user interfaces. Vue has a high capability of backing sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.</h1>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;