var form=document.getElementById("form")
form.addEventListener('submit',(e)=>{
   var name=document.getElementById("name").Value;
   var email=document.getElementById("email").Value;
   var phone=document.getElementById("phone").Value;
   var state=document.getElementById("state").Value;
   var country=document.getElementById("country").Value;
   console.log("name"+'$name')
   console.log("email"+'$email')
   console.log("phone"+'$phone')
   console.log("state"+'$state')
   console.log("country"+'$country')
}
)