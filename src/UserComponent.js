import React from 'react';

const UserComponent = (props) => {
    let {item} = props
    return (
        <div>
                <h2>{item.name} {item.id}</h2>
                <p>{item.email}</p>
        </div>
    );
};

export default UserComponent;