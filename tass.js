const op = document.getElementById("ba");
const po = document.getElementById("bb");
const overlay = document.querySelector(".overlay");


op.addEventListener("click", function () {
    document.getElementById("list").classList.add("show");
    overlay.style.display = "block";
});
po.addEventListener("click", function () {
    document.getElementById("list").classList.remove("show");
    overlay.style.display = "none"; 
});

overlay.addEventListener("click", function () {
    document.getElementById("list").classList.remove("show");
    overlay.style.display = "none"; 
});