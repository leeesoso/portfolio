$("document").ready(function(){

    const work_img = [
        //"../이미지폴더/파일명.확장자",
        //"../이미지폴더/파일명.확장자",
        //"../이미지폴더/파일명.확장자"
        //마지막에 콤마(,)넣으면 에러발생
        "https://via.placeholder.com/1200x2000",
        "https://via.placeholder.com/1200x2000/dea",
        "https://via.placeholder.com/1200x2000/ad5",
        "https://via.placeholder.com/1200x2000/e70",
        "https://via.placeholder.com/1200x2000/dh6",
        "https://via.placeholder.com/1200x2000/c15"
    ]
    
    $(".work-content").click(function(e){
         // a태그 #이 가지고있는 위로올라가는걸 없애기위해서
        e.preventDefault()
        /*파라미터-어떠한정보를 가져와서 출력하는것
        그리고 기존기능을삭제. e는 아무의미없음.(작명)*/

        let i = $(this).index();
        // alert(i)

        // display:none 해둔 뒷배경부터 나오게
        $(".window").fadeIn();
        $(".window-content").show();

        // 그리고 이미지나오게. sre속성을 바꾼다.
        // work_img 는 배열이고  선택한번호는 i 
        $(".window-content img").attr("src", work_img[i])

        // 이미지 클릭했을때 바깥부분 스크롤은 잠궈버림.
        $("html, body").css("overflow", "hidden")
    })

    // x클릭했을때 창이 닫히고 스크롤도 원래대로 나오도록

    $(".window, .window-content i").click(function(){
        // alert()
        $(".window").fadeOut();
        $("html, body").css("overflow", "");
        // └"" 빈칸으로 둬서 초기화
        $(".window-content").scrollTop(0).hide();
        
    })

    let close = parseInt($(".window-content i").css("top"));
    // └parseInt숫자만 가져오는 코드

    $(".window-content").scroll(function(){
        let pos = $(".window-content").scrollTop();
        console.log(pos)

        // 최초 닫기버튼의 위치가 20px (탑값) 모달창이 스크롤이 되면,
        // 스크롤이 된 scrollTop 값 + 20을 더해준다. 해당위치에 고정되는 원리. 스크롤 이 내려가도 내려간곳 + 20 위치 그대로 존재하게됨
        $(".window-content i").css("top", pos + close+"px")

    })

})