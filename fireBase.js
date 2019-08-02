
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBHKXug57uwgF1HyEkO8_bZuvS3_0nLv3c",
    authDomain: "my-portfolio-948b6.firebaseapp.com",
    databaseURL: "https://my-portfolio-948b6.firebaseio.com",
    projectId: "my-portfolio-948b6",
    storageBucket: "",
    messagingSenderId: "711965891156",
    appId: "1:711965891156:web:353d7a29ce5374f1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


var messagesRef = firebase.database().ref('messages')


//Listen for events

document.getElementById('contactForm').addEventListener('submit',submitForm)


function submitForm(event){
    event.preventDefault();

    var fname = getInput('fname');
    var lname = getInput('lname');
    var email = getInput('email');
    var message = getInput('message');

    saveMessage(fname,lname,email,message)

    document.querySelector('.contact-status').style.display = 'block';


    setTimeout(function(){

        document.querySelector('.contact-status').style.display = 'none'; 

    },2000);


}

function getInput(id){
    return document.getElementById(id).value;
}


function saveMessage(fname,lname,email,message){
    var newMessageRef = messagesRef.push();

    newMessageRef.set({
        fname: fname,
        lname : lname,
        email : email,
        message : message
    });

}









