const form=document.querySelector('.login-form');


form.addEventListener('submit',onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();
    const formElements=event.currentTarget.elements;
    const email=formElements.email.value;
    const password=formElements.password.value;
    if(email.trim()===''||password.trim()===''){
        return alert('All form fields must be filled!');
    }
    console.log({email,password});
    event.currentTarget.reset();
}
