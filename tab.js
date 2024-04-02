    document.addEventListener("DOMContentLoaded", function() {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-content");

    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].addEventListener("click", function(e) {
            var target = e.target.dataset.tab;
            for (var j = 0; j < tablinks.length; j++) {
                tablinks[j].classList.remove("active-link");
            }
            for (var j = 0; j < tabcontents.length; j++) {
                tabcontents[j].classList.remove("active-tab");
            }
            e.target.classList.add("active-link");
            document.getElementById(target).classList.add("active-tab");
        });
    }
});