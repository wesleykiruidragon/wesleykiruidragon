//const items =document.querySelectorAll(".item");
//console.log(items);
//items.forEach((item)=>console.log(item));
//const ul=document.querySelector(".items");
//console.log(ul);
//ul.remove();
//ul.lastChild.remove();
//ul.firstElementChild.textContent="TUK";
const btn=document.querySelector(".btn");
console.log(btn);
btn.style.background="red";//btn style
btn.addEventListener("mouseover",(e) =>{
    e.preventDefault();
    console.log(e.target.className);//see the event object
    document.querySelector('#my-form')
    .style.background="#ccc"; //changing the background color
   

});

const myForm=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const gradeInput=document.querySelector('#grade');
const courseInput=document.querySelector('#course');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');

myForm.addEventListener('submit', onsubmit);

function onsubmit(e) {
  e.preventDefault();

  // to give alert when all fields are not filled
  if(nameInput.value==='' ||emailInput.value===''||gradeInput.value===''||courseInput.value==='') {
    alert('Please enter all required fields');
   
    msg.innerHTML='please enter all required fields!';
    //set timeout error message
    setTimeout(()=>msg.remove(), 3000);
  } else{
   console.log("SUCCESS AND WELCOME TO OUR SCHOOL");
       //create a list into userList
    const li = document.createElement ('li');
       //add text node with the input value
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}: ${gradeInput.value}: ${courseInput.value}`));
       //append the li(list)into an ul

    userList.appendChild(li);

       //clear the fields
    nameInput.value = '';
    emailInput.value = '';
    gradeInput.value = '';
    courseInput.value = '';
  }
  
}
