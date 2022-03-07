var time = 0;
window.onload = function () {
    setInterval(change, 50);
};

function change() {
    time++;
    changeImg("01_bubble", 120);
    changeImg("02_ocean", 120);
    changeImg("03_sky", 85);
    changeImg("04_fish", 87);
    changeImg("05_island", 120);
    changeImg("06_leave", 96);
    changeImg("07_dragon", 120);
    changeImg("08_scarf", 150);
    changeImg("09_bird", 120);
    changeImg("10_blow", 73);
    changeImg("11_distance", 120);
}

function changeImg(img, count) {
    var num = (time % count) + 1;
    document.querySelector("#Img_" + img).setAttribute("src", "#" + img + num)
}
