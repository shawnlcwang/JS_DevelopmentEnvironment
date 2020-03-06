import 'whatwg-fetch'; 
// Public API functions 
export function getUsers(){
    return get('users'); 
}
// other API functions...

// Private API functions 
function get(url){
    return fetch(url).then(onSuccess, onError);
}

function onSuccess(response){
    return response.json(); 
}

function onError(error){
    console.log(error); //eslint-disable-line no-console
}
