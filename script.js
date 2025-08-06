function highlight(){
    const cards=document.querySelectorAll(".cards");
    cards.forEach((card=>{
        card.style.transform="scale(1.1)";
        setTimeout(()=>{
            card.style.transform="scale(1)";
        },1000)
    }))
}
function skillhighlight(){
    const skills=document.querySelectorAll(".skills");
    skills.style.transform="scale(1.1)";
}


document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactform");
  const response = document.getElementById("submitmessage");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameValue = document.getElementById("name").value.trim();
    const emailValue = document.getElementById("email").value.trim();
   
    ;

    if (!nameValue || !emailValue ) {
      response.style.color = "orange";
      response.textContent = "Please fill in all fields.";
      return;
    }


    form.reset(); // Clear the form
  });
});
//onSubmit function
const myform=document.getElementById("contactform");
myform.addEventListener("submit",(e)=>{
  e.preventDefault();
  console.log("submitted");
  alert("Submitted");
});
