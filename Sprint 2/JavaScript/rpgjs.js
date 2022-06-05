//Javascript for navigation

function navigationBar() {
    const menuBtn = document.getElementById("menuBar");

    //checks for image source and changes everytime the container is clicked
    //shows navigation pages
    if (menuBtn.src.match("../pics/menu.png")) {
        menuBtn.src = "../pics/exit.png";
        document.getElementById("menuOptions").style.display = "block";
        document.getElementsByTagName("body").style.height = "100%";
        document.getElementsByTagName("body").style.overflow = "hidden";
    } else {
        //hides the navigation 
        menuBtn.src = "../pics/menu.png";
        document.getElementById("menuOptions").style.display = "none";
    }
}

//redirects the page
function redirectPage(event) {
    const button = event.target;
    const operation = document.getElementById(button.id).innerHTML;

    //checks the innerHTML of element and redirects to the corresponding page
    switch (operation) {
        case "HOME":
            location.href = "homepage.html";
            break;
        case "COLLECTION":
            location.href = "collection.html";
            break;
        case "ABOUT":
            location.href = "about.html";
            break;
        case "NEWS":
            location.href = "news.html";
            break;
    }
}

//Javascript for Homepage

function toPromo(event) {
    const promo = document.getElementById("featGame")
    promo.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
}

function toDownload() {
    location.href = "collection.html";
}

function toNews() {
    location.href = "news.html";
}

//Javascript for About Page
function toOfficial() {
    location.href = "https://vgperson.com";
}

function toTwitter() {
    location.href = "https://twitter.com/KerokeroCoder";
}

function toTumblr() {
    location.href = "https://vgperson.tumblr.com";
}

function toYoutube() {
    location.href = "https://www.youtube.com/c/vgperson";
}

function toSoundcloud() {
    location.href = "https://soundcloud.com/vgpersona";
}

function toOldSound() {
    location.href = "https://soundcloud.com/vgperson";
}

function toDailymotion() {
    location.href = "https://www.dailymotion.com/vgperson";
}

function toSoftsubs() {
    location.href = "https://vgperson.com/videosub.php";
}