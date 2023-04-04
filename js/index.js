$("document").ready(function(){
    let typed = new Typed("#typed1",{
        stringsElement: "#typed",
        typeSpeed: 100
    })
    $("#wave-1").wavify({
        height: 800,
        bones: 4,
        color: "#9a48fa",
        speed: 0.15,
        amplitude: 40
        // 웨이브 모양
    })
    $("#wave-2").wavify({
        height: 700,
        bones: 4,
        color: "#140a42",
        speed: 0.25,
        amplitude: 40
    })
})