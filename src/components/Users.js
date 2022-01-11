import React, {useEffect, useState} from 'react';
import User from "./User";


const Users = () => {
    let [users, setUsers] = useState([]);
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value))
    }, [] )
    return (
        <div className='users'>
        {users.map(value => <User id ={value.id} name ={value.name}  surname = {value.surname} email = {value.email}
        street = {value.address.street} suite = {value.address.suite} city = {value.address.city} zipcode = {value.address.zipcode}
        lat = {value.address.geo.lat} lng = {value.address.geo.lng} phone = {value.phone} website = {value.website}
        company nameC = {value.company.name} catchphrase = {value.company.catchPhrase} bs = {value.company.bs}/> )}
        </div>
    );
};

export default Users;