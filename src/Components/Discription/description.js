import React from 'react';

const description = () => {
    return (
        <div>
            <h2>Difference between props and state</h2>
            <p>
                Props are used to communicate between components.By using props as arguments you can pass data one component to other component.Props is unidirectional.Props is immutable.
            </p>
            <p>state can be used for dynamic changes with her components.State cannot make component reusable.</p>
        </div>
    );
};

export default description;