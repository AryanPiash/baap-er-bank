// Move to another website when button was clicked
const button = document.getElementById('button')
button.addEventListener('click',function(){
    const emailField = document.getElementById('email')
    const email = emailField.value
    const passwordField = document.getElementById('password')
    const password = passwordField.value
     if(email == 'aryan.dreamcable@gmail.com' && password == 'bolbonatomake'){
         
        window.location.href = 'banking.html'
            
     }
})



