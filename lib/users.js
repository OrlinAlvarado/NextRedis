

export async function getUsers(){
    
    const result = await fetch('https://jsonplaceholder.typicode.com/users');
    
    const users = await result.json();
    
    return users;
    
}