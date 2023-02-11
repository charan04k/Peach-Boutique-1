const registerLink = document.querySelector("#register-link");
const registerForm = document.querySelector("#register-form");

registerLink.addEventListener("click", function (event) {
  event.preventDefault();
  registerForm.style.display = "block";
});

document.addEventListener("click", function (event) {
  if (event.target !== registerLink && event.target.parentNode !== registerForm) {
    registerForm.style.display = "none";
  }
});

const form =document.querySelector("#register-form")
const sub=document.querySelector("#sub")
const view4 =document.getElementById("view4")

sub.addEventListener("click",()=>{
    view()
    registerForm.style.display='none'
    form.reset();
})

function view(){
    let t1=document.getElementById("t1").value
    let p=document.getElementById("view1")
    p.innerHTML=t1
    let e2=document.getElementById("e1").value
    let p1=document.getElementById("view2")
    p1.innerHTML=e2
    let n1=document.getElementById("n1").value
    let p2= document.getElementById("view3")
    p2.innerHTML=n1
    document.body.append(p)
    document.body.append(p1)
    document.body.append(p2)
    console.log(p)
    
    
    
}


// function validate(){
// if(mail=="karthick25042000@gmail.com" && pass=="12345"){
//     console.log("logged in")
// }
// else{
//     console.log("no")
// }
// }