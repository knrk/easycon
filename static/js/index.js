document.addEventListener("DOMContentLoaded", function () {
    particlesJS.load("particles-js", "./js/particles.json", function () {
        console.log("callback - particles.js config loaded")
    });
    var e = document.querySelectorAll("main .boxes a"),
        t = document.querySelectorAll("main .content");
    e.forEach(function (n) {
        n.addEventListener("click", function (n) {
            var o;
            o = t, e.forEach(function (e) {
                e.classList.remove("active")
            }), o.forEach(function (e) {
                e.classList.add("hidden")
            }), n.target.classList.add("active");
            var c = Array.from(n.target.classList).filter(function (e) {
                return "box" !== e
            });
            document.querySelector("#" + c[0] + "-content").classList.remove("hidden")
        })
    }), new Glide("#webapps .slider").mount(), new Glide("#controlling .slider", {
        autoplay: 1e4,
        hoverpause: !0
    }).mount()
});