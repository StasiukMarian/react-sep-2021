import React from 'react';

const User = (props) => {
    let {id , name, username, email,street , suite , city, zipcode, lat, lng , phone , website , nameC , catchphrase , bs } = props
    return (
        <div>
            <div>id : {id}</div>
            <div>name : {name}</div>
            <div>username : {username}</div>
            <div>email : {email}</div>
            <div>street: {street}</div>
            <div>suite: {suite}</div>
            <div>city: {city}</div>
            <div>zipcode: {zipcode}</div>
            <div>lat: {lat}</div>
            <div>lng: {lng}</div>
            <div>phone: {phone}</div>
            <div>website: {website}</div>
            <div>name: {nameC}</div>
            <div>catchPhrase: {catchphrase}</div>
            <div>bs: {bs}</div>
        </div>
    );
};

export default User;