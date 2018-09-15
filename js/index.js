const about = document.getElementById("about-description");
const owner = document.getElementById("owner");
const contact = document.getElementById("contact-info");

function aboutPage() {


    about.innerHTML = "The purpose of the site is to allow anybody at any skill level to learn and explore the field of woodcrafting and DIY crafts. " +
        "Skip the pre-builts from the store and gather the needed materials and see what you can build for yourself.";



    owner.innerHTML = "Ever since taking woodshop in high school, Steve has taken a major interest in woodcrafting and DIY crafts. " +
        "He wants to spread his knowledge and enthusiasm to others and inspire them to simply try to build and craft their own ideas.";

}

    function contactPage() {


        contact.innerHTML = "If you have any questions or comments, please feel free to contact us at:\n" +
            "Email: theworkshop@gmail.com\n" +
            "\n" +
            "Find us on social media:\n" +
            "Twitter: @TheWorkshop\n" +
            "Facebook: facebook.com/TheWorkshop\n" +
            "Youtube: youtube.com/user/TheWorkshop\n";

    }

if(contact) {
    contactPage.call();
}

if(about) {
    aboutPage.call();
}