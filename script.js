
function savetoLocalStorage(event){
    event.preventDefault();

    const  name=event.target.name.value;
    const  email=event.target.email.value;
    const phonenumber=event.target.phonenumber.value;

    const obj={
        name:name,
        email:email,
        phonenumber:phonenumber
    }
    localStorage.setItem(name.obj,JSON.stringify(obj))
}