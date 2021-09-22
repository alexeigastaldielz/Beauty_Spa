document.querySelector(".contact-form").addEventListener("submit", submitForm);



function submitForm(e){
  e.preventDefault();

  // Get input values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector("message").value;

  saveContactInfo(name, email, message);
  document.querySelector(".contact-form").reset();

  sendEmail(name,email, message);
}

function saveContactInfo(name, email, message){
  
}
//Send Email info
function sendEmail(name,email,message){
  Email.send({
    Host: "smtp.gmail.com",
    Username: 'rafa22524@gmail.com',
    Password: "hynzhtutqjogpmcw",
    To: 'rafa22524@gmail.com',
    From: 'rafa22524@gmail.com',
    Subject: `${name} sent you a message`,
    Body: `Name: ${name} <br/> Email: ${email}<br/> Message: ${messaje}`,

  }).then((message) => alert("mail sent successfully"))
}