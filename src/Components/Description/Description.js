import React from 'react';

const Description = () => {
    return (
        <div className='container'>
            <div>
                <h2>How react works ?</h2>
                <p>
                React is the most popular javascript framework or library whatever you call it. React creates a virtual dom . When rendering actual dom react creates the same dom. That's called virtual dom. Virtual dom compares between her old virtual dom and changes only which state or data has been changed.
                </p>
            </div>
            <div>
            <h2>Difference between props and state.</h2>
            <p>
                Props are used to communicate between components.By using props as arguments you can pass data one component to other component.Props is unidirectional.Props is immutable.
            </p>
            <p>state can be used for rendering dynamic changes with her components.State cannot make component reusable.State cannot be accessed by child components.</p>
            </div>
        </div>
    );
};

export default Description;