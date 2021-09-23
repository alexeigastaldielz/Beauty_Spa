import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9Is8rJpFeIJ3IttzUI4jQv5iKaqRhvYQ",
  authDomain: "contactanos-cfa53.firebaseapp.com",
  projectId: "contactanos-cfa53",
  storageBucket: "contactanos-cfa53.appspot.com",
  messagingSenderId: "23471736302",
  appId: "1:23471736302:web:39ecdf97f25e25f772faff",
  measurementId: "G-QLCEKKF1Y7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
firebaseConfig.initializeApp(firebaseConfig);

let saveContactInfo = firebase.database().ref("infos");



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
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email : email,
    message : message,
  });
  retrieveInfos();
}

function retrieveInfos(){
  let ref = firebase.database().ref("infos");
  ref.on("value", gotData);
}

function gotData(data){
  let info = data.val();
  let keys = Object.keys(info);

  for (let i = 0; i < keys.length; i++){
    let infoData = keys[i];
    let name = info[infoData].name;
    let email = info[infoData].email;
    let message = info[infoData].message;
    console.log(name, email, message);;

    let infosResults = document.querySelector(".infosResults");

    infosResults.innerHTML += `<div>
    <p><strong> Name: <strong/>${name}<br/>
    <a><strong> Email: <strong/>${email}</a><br/>
    <a><strong> Message: <strong/>${message}</a>
    </p>
    </div>`;
  }
}
retrieveInfos();

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
