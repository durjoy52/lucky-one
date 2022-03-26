import React from 'react';

const Description = () => {
    return (
        <div className='container'>
            <div>
                <h2>How react works ?</h2>
                <p>
                React is the most popular javascript framework or library whatever you call it.React actually create tree for user.React create a virtual dom .Virtual dom compare to browser actual dom and changes only which statement is changes.
                </p>
            </div>
            <div>
            <h2>Difference between props and state.</h2>
            <p>
                Props are used to communicate between components.By using props as arguments you can pass data one component to other component.Props is unidirectional.Props is immutable.
            </p>
            <p>state can be used for rendering dynamic changes with her components.State cannot make component reusable.State cannot be accessed by child component</p>
            </div>
        </div>
    );
};

export default Description;