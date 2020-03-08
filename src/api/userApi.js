import 'whatwg-fetch'; 
import getBaseUrl from './baseUrl'; 

const baseUrl = getBaseUrl(); 

// Public API functions 
export function getUsers(){
    return get('users'); 
}

export function deleteUsers(id){
    return del(`users/${id}`);
}
// other API functions...



// Private API functions 
function get(url){
    return fetch(baseUrl + url).then(onSuccess, onError);
}

function del(url){
    const request = new Request(baseUrl + url, {
        method: 'DELETE'
    }); 

    return fetch(request).then(onSuccess, onError);
}

function onSuccess(response){
    return response.json(); 
}

function onError(error){
    console.log(error); //eslint-disable-line no-console
}
