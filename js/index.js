//variables
const about = document.getElementById("about-description");
const owner = document.getElementById("owner");
const contact = document.getElementById("contact-info");
const methods = document.getElementById("methods");
const pageDesc = document.getElementsByClassName("page-description");
const wwg = document.getElementById("wwg-accordian");
const htp = document.getElementById("htp-accordian");
const resource = document.getElementById("resources-accordian");
const submit = document.getElementById("submit");
const feedback = document.getElementById("feedback");
const insertImagesHome = document.getElementsByClassName("insert-images-home");
const contentHome = document.getElementsByClassName("content-home");


//functions

function homePage() {
        insertImagesHome[0].innerHTML = "<img src=" + "images/content/jigsaw_mobile.jpg alt='Woodworking Guide link photo' class='content-images'" +
            " srcset='images/content/jigsaw_mobile.jpg 640w, images/content/jigsaw.jpg 1920w' " +
            " sizes='(min-width:320px) 100vw, (min-width:768px) 100vw'" + ">";

        insertImagesHome[1].innerHTML = "<img src=" + "images/content/Easy_Woodworking_Projects01_mobile.jpg alt='How-to Projects link photo' class='content-images'" +
            " srcset='images/content/Easy_Woodworking_Projects01_mobile.jpg 320w, images/content/Easy_Woodworking_Projects01.jpg 625w' " +
            " sizes='(min-width:320px) 100vw, (min-width:768px) 100vw'" + ">";

        insertImagesHome[2].innerHTML = "<img src=" + "images/content/SIP-35-cover-image-main_mobile.jpg alt='Resources link photo' class='content-images'" +
            " srcset='images/content/SIP-35-cover-image-main_mobile.jpg 320w, images/content/SIP-35-cover-image-main.jpg 640w' " +
            " sizes='(min-width:320px) 100vw, (min-width:768px) 100vw'" + ">";

        insertImagesHome[3].innerHTML = "<img src=" + "images/content/farmhouse-dining-table_mobile.jpg alt='photo of dining table' class='content-images-recent'" +
            " srcset='images/content/farmhouse-dining-table_mobile.jpg 320w, images/content/farmhouse-dining-table.jpg 640w' " +
            " sizes='(min-width:320px) 100vw, (min-width:768px) 100vw'" + ">";

        insertImagesHome[4].innerHTML = "<img src=" + "images/content/dovetail_mobile.jpg alt='photo of a dovetail cut' class='content-images-recent'" +
            " srcset='images/content/dovetail_mobile.jpg 640w, images/content/dovetail.jpg 1920w' " +
            " sizes='(min-width:320px) 100vw, (min-width:768px) 100vw'" + ">";

        insertImagesHome[5].innerHTML = "<img src=" + "images/content/handtools_mobile.jpg alt='photo of handtools' class='content-images-recent'" +
            " srcset='images/content/handtools_mobile.jpg 800w, images/content/handtools.jpg 4928w' " +
            " sizes='(min-width:320px) 100vw, (min-width:768px) 100vw'" + ">";

        insertImagesHome[6].innerHTML = "<img src=" + "images/content/tools_mobile.jpg alt='photo of tools' class='content-images-recent'" +
            " srcset='images/content/tools_mobile.jpg 640w, images/content/tools.jpg 1024w' " +
            " sizes='(min-width:320px) 100vw, (min-width:768px) 100vw'" + ">";

        insertImagesHome[7].innerHTML = "<img src=" + "images/content/arch-top_mobile.jpg alt='photo of arch top gate' class='content-images-recent'" +
        " srcset='images/content/arch-top_mobile.jpg 640w, images/content/arch-top.jpg 3264w' " +
        " sizes='(min-width:320px) 100vw, (min-width:768px) 100vw'" + ">";

}

function aboutPage() {


    about.innerHTML = "The purpose of the site is to allow anybody at any skill level to learn and explore the field of woodcrafting and DIY crafts. " +
        "Skip the pre-builts from the store and gather the needed materials and see what you can build for yourself.";



    owner.innerHTML = "Ever since taking woodshop in high school, Steve has taken a major interest in woodcrafting and DIY crafts. " +
        "He wants to spread his knowledge and enthusiasm to others and inspire them to simply try to build and craft their own ideas.";

}

function contactPage() {

    contact.innerHTML = "If you have any questions or comments, please feel free to contact us at:";

    methods.innerHTML =
        "<p>" + "Email: theworkshop@gmail.com" + "</p>" +
        "<p>" + "Twitter: " + "<a href='https://twitter.com/'>" + "@TheWorkshop" + "</a>" + "</p>" +
        "<p>" + "Facebook: " + "<a href='https://facebook.com/'>" + "Facebook.com/TheWorkshop" + "</a>" + "</p>" +
        "<p>" + "Youtube: " + "<a href='https://youtube.com/'>" + "Youtube.com/user/TheWorkshop" + "</a>" + "</p>";
}

function wwgDescription(){
    pageDesc[0].innerHTML = "Whether you are a beginner or experienced craftsman, find guides that will help you learn and improve your woodworking skills.";
}

function htpDescription(){
    pageDesc[0].innerHTML = "Satisfy your DIY cravings no matter what skill level you are with these step by step projects.";
}

function resourcesDescription(){
    pageDesc[0].innerHTML = "Find even more information on everything woodworking. Recommended external videos, articles, and more.";
}

//if statements & function calls

if(contentHome[0]){
    homePage.call();
}

if(contact) {
    contactPage.call();

    submit.addEventListener("click", function(){
        feedback.innerHTML = "Message sent." + "</br>" + "We will reply in the next 24 hours.";

        const form = document.getElementById("contact");
        form.reset();

        window.scrollTo(0,document.body.scrollHeight);

    });
}

if(about) {
    aboutPage.call();
}

if(wwg){
    wwgDescription.call();
}

if(htp){
    htpDescription.call();
}

if(resource){
    resourcesDescription.call();
}


