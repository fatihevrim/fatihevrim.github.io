function filterItems() {
    var meyveCheckbox = document.getElementById("AUDİ");
    var sebzeCheckbox = document.getElementById("FİAT");
    var sutCheckbox = document.getElementById("HYUNDAİ");

    var meyveItems = document.getElementsByClassName("AUDİ");
    var sebzeItems = document.getElementsByClassName("FİAT");
    var sutItems = document.getElementsByClassName("HYUNDAİ");

    for (var i = 0; i < meyveItems.length; i++) {
        meyveItems[i].style.display = meyveCheckbox.checked ? "" : "none";
    }

    for (var i = 0; i < sebzeItems.length; i++) {
        sebzeItems[i].style.display = sebzeCheckbox.checked ? "" : "none";
    }

    for (var i = 0; i < sutItems.length; i++) {
        sutItems[i].style.display = sutCheckbox.checked ? "" : "none";
    }
}