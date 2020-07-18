import React from 'react'

const Rainbow = (WrappedComponent) => {

    const colors = ['red', 'pink', 'orange', 'green', 'yellow'];
    const RandomColor = colors[Math.floor(Math.random() * 5)];
    const className = RandomColor + '-text';

    return(props => {
        return (
            <div className={className}>
                <WrappedComponent />
            </div>
        )
    })
}

export default Rainbow