
var Qicon = document.querySelectorAll("i");
var ans = document.querySelectorAll("h4");

Qicon.forEach((i, index) => {
    i.addEventListener("click", function () {
        if (ans[index].style.display === "none") {
            ans[index].style.display = "inline";
        } else {
            ans[index].style.display = "none";
        }
    });
});




