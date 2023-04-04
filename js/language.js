$("document").ready(function(){

    const url = new URL(location.href).searchParams;
    const language = url.get("lang");
    // consol.log(language)

    const en_nav = new Array("Profile", "Web Publishing", "Design", "Experience", "Contact")
    const Main_typed = new Array("Growind Web Designer &amp; This is Web Publisher <em>Hong Gil-dong</em> Click the button below to view the next page");
    const Main_btn = new Array("Profile")

    /*
    const Profile_title = "0"
    const web_work_list = "0"
    이런식으로 쭉 영어버전을 쓰면됨
    이것도 로컬스트리지가 필요함. 다른페이지로 가면 다시 되돌아가기때문에..
    */

    const lang_chk = localStorage.getItem("language");


    // ┌만약 ~거나 ~라면 | 는 shift+\
    if(lang_chk == "en" || language == "en"){
        // alert("영어")
        $("#typed p").html(Main_typed[0])
        $(".type a").text(Main_btn[0]);

        // 반복문으로 영어로 바뀌게
        for(let i = 0; i < en_nav.length; i++){
            $(".header .nav ul li a").eq(i).text(en_nav[i])
        }
    }

})