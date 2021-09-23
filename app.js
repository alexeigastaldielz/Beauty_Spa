
function sendMail(params){
  var tempParams = {
    name: document.getElementById("tonName").value,
    email: document.getElementById("email").value,
    message: document.getElementById("messages").value,
  };

  emailjs.send("service_l8t7c6q","template_58vn7ck", tempParams)
  .then (function(res){
console.log("sucess", res.status);
  })
}