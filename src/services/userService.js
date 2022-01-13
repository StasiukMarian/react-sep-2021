const getUsers = () =>{
  return   fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
}
async function getUser (id) {
  return fetch('https://jsonplaceholder.typicode.com/users/'+ id)
      .then(value => value.json())
}
async function getPosts () {
  return await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(value => value.json())
}
export const userService = {
getUsers, getUser , getPosts
}