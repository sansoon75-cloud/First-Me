const envelope= document.getElementById("envelope-container");
const letter= document.getElementById("letter-container");
const noBtn= document.querySelector(".no-btn");
const yesBtn= document.querySelector(".yes-btn");

const title= document.getElementById("letter-title");
const catImg= document.getElementById("letter-cat");
const buttons= document.getElementById("letter-buttons");
const finalText= document.getElementById("final-text");
const videoElement= document.getElementById("video");


const yesVideo= "videos/زغروطة.mp4";
const noVideo=["videos/عودة الندلة.mp4",
    "videos/كنت متأكد انه نو.MP4",
    "videos/محدش يتحداني.MP4",
    "videos/شيرين.MP4",
    "videos/ابو الخدود.MP4"
];



envelope.addEventListener("click", () => {
    envelope.style.display="none";
    letter.style.display="flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});


noBtn.addEventListener("click", () => {

    const randomIndex = parseInt(Math.random() * noVideo.length);
    const randomVideo = noVideo[randomIndex];
    
    videoElement.src = randomVideo;
    videoElement.play();

    videoElement.style.display = "block";
    catImg.style.display = "none"; 
    videoElement.style.width="400px";
    videoElement.style.height="250px";    
});

yesBtn.addEventListener("click", () => {

    videoElement.src = yesVideo;
    videoElement.play();
    videoElement.style.display = "block";
    // عشان ياخد نفس مقاسات الgif
    videoElement.style.width = catImg.offsetWidth + "px";
    videoElement.style.height = catImg.offsetHeight + "px";
    catImg.style.display = "none";
    
    title.textContent="أنا ربنا نصرني♡";
    title.style.color="rgb(7, 8, 7)";
    document.querySelector(".letter-window").classList.add("final");
    
    buttons.style.display= "none";
    finalText.style.display="block";
});



