import React from 'react';

const Car = ({car:{id,model,price,year}, getCarId}) => {
    return (
        <div style={{display:'flex' ,justifyContent:'center' , alignItems:'center', margin:'20px',gap:'20px'}}>
                <div>
                    <div>Model: {model}</div>
                    <div>price: {price}</div>
                    <div>year: {year}</div>
                </div>
            <button onClick={()=>getCarId(id)}>Delete</button>
        </div>
    );
};

export default Car;