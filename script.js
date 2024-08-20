
// // signup 
// document.querySelector('signup-btn')
// .addEventListener('click',function(){
    
// })

// document.getElementById('play-btn')
// .addEventListener('click',function(){
//     console.log('play button clicked!')
// })
window.addEventListener("click",function(){
    const signupForm = document.getElementById('signupform')
const loginForm = document.getElementById('loginform')
const signupBtn = document.querySelector('.signup-btn')
const loginBtn = document.querySelector('.login-btn')
const closeBtn = document.querySelectorAll('.close-btn')

signupBtn.addEventListener('click',function Signup(){
    signupForm.classList.add('show');
})

loginBtn.addEventListener('click',function Login(){
    loginForm.classList.add('show');
})

closeBtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        loginForm.classList.remove('show');
        signupForm.classList.remove('show');
    })
})

window.addEventListener("click", function (event) {
    if (event.target === loginForm) {
        loginForm.classList.remove("show");
    }
    if (event.target === signupForm) {
        signupForm.classList.remove("show");
    }
});
})
