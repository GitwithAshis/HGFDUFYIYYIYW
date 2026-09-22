// ================================
// Explainable AI Website
// script.js
// ================================

// Welcome Message
console.log("Website Loaded Successfully");

// Detect Button
const detectBtn = document.querySelector(".detect");

detectBtn.addEventListener("click", function(){

    const news = document.getElementById("newsText").value;

    if(news.trim()==""){

        alert("Please enter news text.");

        return;

    }

    alert("AI Detection will be connected soon!");

});


// Voice Button

document.querySelectorAll(".chat-tools button")[0].onclick=function(){

alert("🎤 Voice Recognition - Coming Soon");

};


// Camera Button

document.querySelectorAll(".chat-tools button")[1].onclick=function(){

alert("📷 Image Scanner - Coming Soon");

};


// Upload Button

document.querySelectorAll(".chat-tools button")[2].onclick=function(){

alert("📄 Upload PDF / TXT - Coming Soon");

};


// URL Button

document.querySelectorAll(".chat-tools button")[3].onclick=function(){

alert("🌐 URL Detection - Coming Soon");

};