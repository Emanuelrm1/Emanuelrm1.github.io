// use an event listener to find when the screen is less than 600 pixels


// when it is as a class called 'responsive' to the nav element.

// this function below needs to run when the burger icon is clicked.


//  make an event listener that listens for a click on the icon and console logs something.

function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
