var myIamges = Array.from(document.querySelectorAll(".item img"));
var lightboxContainer = document.querySelector(".lightbox-Container ");

var close = document.getElementById("close");
var prev = document.getElementById("prev");
var next = document.getElementById("next");

var crruentImageIndex = 0;


for (var i = 0; i < myIamges.length; i++) {
    myIamges[i].addEventListener("click", showLightBox);
}

function showLightBox(e) {
    lightboxContainer.style.transform = "scale(1,1)";
    lightboxContainer.firstElementChild.style.transform = "scale(1,1)";

    var imgsrc = e.target.src;

    crruentImageIndex = myIamges.indexOf(e.target);
    lightboxContainer.firstElementChild.style.backgroundImage = "url(" + imgsrc + ")";
}

close.addEventListener("click", hideLightBox);
function hideLightBox() {
    lightboxContainer.style.transform = "scale(0,0)";
    lightboxContainer.firstElementChild.style.transform = "scale(0,0)";
}




next.addEventListener("click", goNext)

function goNext() {
    crruentImageIndex++;
    if (crruentImageIndex == myIamges.length) {
        crruentImageIndex = 0;
    }
    lightboxContainer.firstElementChild.style.backgroundImage = "url(" + myIamges[crruentImageIndex].src + ")";
}
prev.addEventListener("click", goPrev)
function goPrev() {
    crruentImageIndex--;
    if (crruentImageIndex < 0) {
        crruentImageIndex = myIamges.length - 1;
    }
    lightboxContainer.firstElementChild.style.backgroundImage = "url(" + myIamges[crruentImageIndex].src + ")";
}

document.addEventListener("keydown", function (e) {
    if (e.keyCode == 39) {
        goNext();
    }
    else if (e.keyCode == 37) {
        goPrev();
    }
    else if (e.keyCode == 27) {
        hideLightBox();
    }
})
