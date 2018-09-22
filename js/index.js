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
const insertImagesWwg = document.getElementsByClassName("insert-images-wwg");
const insertImagesHtp = document.getElementsByClassName("insert-images-htp");



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

function WoodworkingPage(){
    insertImagesWwg[0].innerHTML = "<img src=" + "../../images/wood/cedar.gif alt='photo of cedar wood'" + ">";

    insertImagesWwg[1].innerHTML = "<img src=" + "../../images/wood/oaktexture_mobile.jpg alt='photo of oak wood'" +
        " srcset='../../images/wood/oaktexture_mobile.jpg 640w, ../../images/wood/oaktexture.jpg 1200w' " +
        " sizes='(min-width:320px) 100vw, (min-width:768px) 100vw'" + ">";

    insertImagesWwg[2].innerHTML = "<img src=" + "../../images/wood/particleboard_mobile.jpg alt='photo of particleboard'" +
        " srcset='../../images/wood/particleboard_mobile.jpg 640w, ../../images/wood/particleboard.jpg 1200w' " +
        " sizes='(min-width:320px) 100vw, (min-width:768px) 100vw'" + ">";

    insertImagesWwg[3].innerHTML = "<img src=" + "../../images/wood/plywood_mobile.jpg alt='photo of plywood'" +
        " srcset='../../images/wood/plywood_mobile.jpg 640w, ../../images/wood/plywood.jpg 1200w' " +
        " sizes='(min-width:320px) 100vw, (min-width:768px) 100vw'" + ">";

    insertImagesWwg[4].innerHTML = "<img src=" + "../../images/content/dovetail_mobile.jpg alt='photo of a dovetail cut'" +
        " srcset='../../images/content/dovetail_mobile.jpg 640w, ../../images/content/dovetail.jpg 1920w' " +
        " sizes='(min-width:320px) 100vw, (min-width:768px) 100vw'" + ">";

    insertImagesWwg[5].innerHTML = "<img src=" + "../../images/content/miter-joint-lead_mobile.jpg alt='photo of a miter cut'" +
        " srcset='../../images/content/miter-joint-lead_mobile.jpg 640w, ../../images/content/miter-joint-lead.jpg 1200w' " +
        " sizes='(min-width:320px) 100vw, (min-width:768px) 100vw'" + ">";

    insertImagesWwg[6].innerHTML = "<img src=" + "../../images/content/ripversuscross.jpg alt='photo of a rip versus cross cut'" + ">";

    insertImagesWwg[7].innerHTML = "<img src=" + "../../images/content/buttjoint_mobile.jpg alt='photo of a butt joint'" +
        " srcset='../../images/content/buttjoint_mobile.jpg 640w, ../../images/content/buttjoint.jpg 1200w' " +
        " sizes='(min-width:320px) 100vw, (min-width:768px) 100vw'" + ">";

    insertImagesWwg[8].innerHTML = "<img src=" + "../../images/content/handtools2_mobile.jpg alt='photo of hand tools'" +
        " srcset='../../images/content/handtools2_mobile.jpg 640w, ../../images/content/handtools2.jpg 1200w' " +
        " sizes='(min-width:320px) 100vw, (min-width:768px) 100vw'" + ">";

    insertImagesWwg[9].innerHTML = "<img src=" + "../../images/content/tools_mobile.jpg alt='photo of power tools'" +
        " srcset='../../images/content/tools_mobile.jpg 640w, ../../images/content/tools.jpg 1200w' " +
        " sizes='(min-width:320px) 100vw, (min-width:768px) 100vw'" + ">";

    insertImagesWwg[10].innerHTML = "<img src=" + "../../images/content/DEWALT-DWS709-Slide-Compound-Miter-Saw_mobile.jpg alt='photo of a miter saw'" +
        " srcset='../../images/content/DEWALT-DWS709-Slide-Compound-Miter-Saw_mobile.jpg 640w, ../../images/content/DEWALT-DWS709-Slide-Compound-Miter-Saw.jpg 1200w' " +
        " sizes='(min-width:320px) 100vw, (min-width:768px) 100vw'" + ">";

    insertImagesWwg[11].innerHTML = "<img src=" + "../../images/content/stationarysaw_mobile.jpg alt='photo of a stationary saw'" +
        " srcset='../../images/content/stationarysaw_mobile.jpg 640w, ../../images/content/stationarysaw.jpg 1200w' " +
        " sizes='(min-width:320px) 100vw, (min-width:768px) 100vw'" + ">";

}

function howToProjectsPage(){
    insertImagesHtp[0].innerHTML = "<img src=" + "../../images/content/bench_mobile.jpg alt='photo of a wooden bench'" +
        " srcset='../../images/content/bench_mobile.jpg 640w, ../../images/content/bench.jpg 1200w' " +
        " sizes='(min-width:320px) 100vw, (min-width:768px) 100vw'" + ">";

    insertImagesHtp[1].innerHTML = "<img src=" + "../../images/content/shoeorg_mobile.jpg alt='photo of a wooden shoe organizer'" +
        " srcset='../../images/content/shoeorg_mobile.jpg 640w, ../../images/content/shoeorg.jpg 1200w' " +
        " sizes='(min-width:320px) 100vw, (min-width:768px) 100vw'" + ">";

    insertImagesHtp[2].innerHTML = "<img src=" + "../../images/content/storagecontainer_mobile.jpg alt='photo of a wooden magazine holder'" +
        " srcset='../../images/content/storagecontainer_mobile.jpg 640w, ../../images/content/storagecontainer.jpg 1200w' " +
        " sizes='(min-width:320px) 100vw, (min-width:768px) 100vw'" + ">";

    insertImagesHtp[3].innerHTML = "<img src=" + "../../images/content/woodenchair_mobile.jpg alt='photo of a wooden chair'" +
        " srcset='../../images/content/woodenchair_mobile.jpg 640w, ../../images/content/woodenchair.jpg 1200w' " +
        " sizes='(min-width:320px) 100vw, (min-width:768px) 100vw'" + ">";

    insertImagesHtp[4].innerHTML = "<img src=" + "../../images/content/farmhouse-dining-table_mobile.jpg alt='photo of dining table'" +
        " srcset='../../images/content/farmhouse-dining-table_mobile.jpg 320w, ../../images/content/farmhouse-dining-table.jpg 640w' " +
        " sizes='(min-width:320px) 100vw, (min-width:768px) 100vw'" + ">";

    insertImagesHtp[5].innerHTML = "<img src=" + "../../images/content/reclaimed%20wood%20shelf%20diy03_mobile.jpg alt='photo of wooden shelf'" +
        " srcset='../../images/content/reclaimed%20wood%20shelf%20diy03_mobile.jpg 640w, ../../images/content/reclaimed%20wood%20shelf%20diy03.jpg 1200w' " +
        " sizes='(min-width:320px) 100vw, (min-width:768px) 100vw'" + ">";

    insertImagesHtp[6].innerHTML = "<img src=" + "../../images/content/lawnchair_mobile.jpg alt='photo of wooden lawn chair'" +
        " srcset='../../images/content/lawnchair_mobile.jpg 320w, ../../images/content/lawnchair.jpg 640w' " +
        " sizes='(min-width:320px) 100vw, (min-width:768px) 100vw'" + ">";

    insertImagesHtp[7].innerHTML = "<img src=" + "../../images/content/storagebox_mobile.jpg alt='photo of wooden storage box'" +
        " srcset='../../images/content/storagebox_mobile.jpg 320w, ../../images/content/storagebox.jpg 640w' " +
        " sizes='(min-width:320px) 100vw, (min-width:768px) 100vw'" + ">";

    insertImagesHtp[8].innerHTML = "<img src=" + "../../images/content/arch-top_mobile.jpg alt='photo of wooden arch top gate'" +
        " srcset='../../images/content/arch-top_mobile.jpg 640w, ../../images/content/arch-top.jpg 1200w' " +
        " sizes='(min-width:320px) 100vw, (min-width:768px) 100vw'" + ">";

    insertImagesHtp[9].innerHTML = "<img src=" + "../../images/content/woodshed_mobile.jpg alt='photo of wooden shed'" +
        " srcset='../../images/content/woodshed_mobile.jpg 640w, ../../images/content/woodshed.jpg 1200w' " +
        " sizes='(min-width:320px) 100vw, (min-width:768px) 100vw'" + ">";

    insertImagesHtp[10].innerHTML = "<img src=" + "../../images/content/cardtable_mobile.jpg alt='photo of a card table'" +
        " srcset='../../images/content/cardtable_mobile.jpg 640w, ../../images/content/cardtable.jpg 1200w' " +
        " sizes='(min-width:320px) 100vw, (min-width:768px) 100vw'" + ">";

    insertImagesHtp[11].innerHTML = "<img src=" + "../../images/content/customworkbench_mobile.jpg alt='photo of a workbench'" +
        " srcset='../../images/content/customworkbench_mobile.jpg 640w, ../../images/content/customworkbench.jpg 1200w' " +
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
        "<p>" + "Twitter: " + "<a href='https://twitter.com/' target=\"_blank\">" + "@TheWorkshop" + "</a>" + "</p>" +
        "<p>" + "Facebook: " + "<a href='https://facebook.com/' target=\"_blank\">" + "Facebook.com/TheWorkshop" + "</a>" + "</p>" +
        "<p>" + "Youtube: " + "<a href='https://youtube.com/' target=\"_blank\">" + "Youtube.com/user/TheWorkshop" + "</a>" + "</p>";
}

function wwgDescription(){
    pageDesc[0].innerHTML = "Whether you are a beginner or experienced craftsman, find guides that will help you learn and improve your woodworking skills.";
}

function htpDescription(){
    pageDesc[0].innerHTML = "Satisfy your DIY cravings no matter what skill level you are with these step by step projects.";
    howToProjectsPage.call();
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
    WoodworkingPage.call();
}

if(htp){
    htpDescription.call();
}

if(resource){
    resourcesDescription.call();
}


