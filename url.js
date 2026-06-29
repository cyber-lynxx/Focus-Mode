function goToWebsite() {
    const URL = document.getElementById("url_input").value;

    // Makes sure they don't exploit the URL input to go to social media
    let banned_urls = ["instagram.com", "youtube.com", "tiktok.com", "x.com", "facebook.com", "snapchat.com", "discord.com", "reddit.com", "twitch.tv", "pinterest.com"]

    for (let i = 0; i < 10; i++) {
        if (URL.includes(banned_urls[i])) {
            alert("Touch grass! 🌿");

            document.getElementById("url_input").value = "";

            // Ends the function
            return;
        }
    }

    // Making sure it has "https://", or it will not work properly
    if (!URL.startsWith("https://") && !URL.startsWith("http://")) {
        const newURL = "https://" + URL;

        // Going to the external website
        window.open(newURL, "_blank");
    } else {
        window.open(URL, "_blank");
    }

    document.getElementById("url_input").value = ""
}
