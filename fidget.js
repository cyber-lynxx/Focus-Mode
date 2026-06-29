clicks = 0;

function clickFidget() {
    const click_count = document.getElementById("click_count").value;

    if (click_count === "Click Count: 0") {
        clicks = 1
    } else {
        clicks++

        // A higher threshold will prevent scolding the people who are actually using the clicker as a fidget
        if (clicks > 500) {
            alert("Focus on your work 📚")
        }
    }

    document.getElementById("click_count").textContent = "Click Count: " + clicks

}
