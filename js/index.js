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


