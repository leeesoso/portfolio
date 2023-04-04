$("document").ready(function(){
    /*햄버거일때 클릭했을때 X
    x일때 클릭했을때 햄버거*/
    $(".m-btn").click(function(){
        $(this).toggleClass("on")
        // └자기혼자있을때 토글클래스, 여러개 있으면 remove eq(i) addclass
        // 여기서 this = .m-btn 자신 이므로 this 대신 ".m-btn"을 넣어도 됨.
        $(".m-nav").toggleClass("on")
        // 눌렀을 시 r-300으로 감춰져있던 m-nav가 나옴.
    })

    // 폰트설정박스 클릭시 노출
    $(".font-box .icon").click(function(){
        $(this).toggleClass("on")
        $(".font-box ul").toggleClass("on")
    })
    // 폰트설정박스 배열 - 미리보기
    let font = [
        "'TheJamsil5Bold'",
        "'Dovemayo_gothic'",
        "'NeoDunggeunmoPro-Regular'",
        "'bitbit'"
    ]
    // 마우스 오버시 폰트미리보기 제공, 마우스 오버해제시 원래대로
    $(".font-box ul li").mouseover(function(){
        let i = $(this).index();
        // index 값을 받아옴. i 는 위의 0123이 됨
        $("html").css("font-family", font[i])
    }).mouseout(function(){
        $("html").css("font-family", "")
        // └""는 비우겠다는뜻
    })
    //클릭되었을때 폰트지정
    $(".font-box ul li").click(function(){
        let i = $(this).index();
        // 0번부터 시작하는게아니고 css에서 .font-box ul li:nth-child(1) 1부터 시작하기때문
        if(i == 0){
            $("html").removeClass()
            localStorage.removeItem("font")
        }else{
            $("html").removeClass().addClass("font"+i);
            localStorage.setItem("font", "font"+i);
            // └이동해도 폰트 유지되게 로컬스트리지 적용
        }
    })

        // 로딩됐을때 폰트가져오기(새로고침해도 폰트유지)
        const font_list = localStorage.getItem("font");
        // 조건문. 폰트리스트가 비어있지않다면 (! 는 다르다면/ ==같다면)
        if(font_list !=''){
            $("html").addClass(font_list);
        }

    $(".header .etc ul li ul li").click(function(){
        // alert()
        let i = $(this).index();
        if(i == 0){
            // alert("한국어 클릭")
            localStorage.setItem("language", "kr")
            // localStorage에서 한국어 눌렀을때 kr뜨는지 확인
        }else{
            // alert("영어 클릭")
            localStorage.setItem("language", "en")
        }
    })


// 다크모드 되는지 확인하는코드
    $("html").attr("data-dark", false);
    // html요소의 data-dark 속성값을 false(거짓)으로 변경한다.
    // https://redcow77.tistory.com/326참고


    const dark_mode = localStorage.getItem("dark");
    console.log(dark_mode)

    if(dark_mode == "true"){
        $(".dark-btn i").removeClass("fa-moon").addClass("fa-sun")
        $("html").attr("data-dark", true);
        $(".header .etc ul li").eq(0).find("i").removeClass("fa-moon").addClass("fa-sun")
        // └다크모드일때는 달 아이콘을 사라지게하고 해를 추가
        $(".contact-content .sns ul li img").attr("src", "images/talk-dark.png");
        // └다크모드일때 컨텍트 의 sns 카카오톡 아이콘이 상위링크의 이미지로 바뀜
    }else{
        $(".dark-btn i").removeClass("fa-sun").addClass("fa-moon")
        $("html").attr("data-dark", false);
        $(".header .etc ul li").eq(0).find("i").removeClass("fa-sun").addClass("fa-moon")
        $(".contact-content .sns ul li img").attr("src", "images/talk.png");
    }
    // 새로고침을 해도 다크모드 유지가됨

// 달<->해 아이콘변경
    $(".header .etc ul li").eq(0).click(function(){
        // eq(0) = etc의 첫번째 요소인 달아이콘
        $(".header .etc ul li").eq(0).find("i").toggleClass("fa-sun fa-moon")
        // find는 자식을 찾을때 사용하는 코드. li에서 i를 찾아선택.
        // toggleClass로 fa-sun fa-moon 서로 바뀌며 등장.
        $(".dark-btn").eq(0).find("i").toggleClass("fa-sun fa-moon")


        // if(조건문){참일때 코드}else{거짓일때 코드}
        // .attr()은 요소(element)의 속성(attribute)의 값을 가져오거나 속성을 추가한다.
        if($("html").attr("data-dark") == "false"){
            $("html").attr("data-dark", true);
            $(".contact-content .sns ul li img").attr("src", "images/talk-dark.png");

            //웹화면에서  f12-애플리케이션-로컬스트리지(내컴퓨터에만 저장됨. 데이터베이스가없으므로.)
            localStorage.setItem("dark", true)
        }else{
            $("html").attr("data-dark", false);
            localStorage.removeItem("dark")
            // └삭제
            $(".contact-content .sns ul li img").attr("src", "images/talk.png");
        }

        console.log($("html").attr("data-dark"))
    })

    $(".dark-btn").click(function(){
        $(".header .etc ul li").eq(0).find("i").toggleClass("fa-sun fa-moon")
        $(".dark-btn").eq(0).find("i").toggleClass("fa-sun fa-moon")

    if($("html").attr("data-dark") == "false"){
        $("html").attr("data-dark", true);
        $(".contact-content .sns ul li img").attr("src", "images/talk-dark.png");

        localStorage.setItem("dark", true)
    }else{
        $("html").attr("data-dark", false);
        localStorage.removeItem("dark")
        $(".contact-content .sns ul li img").attr("src", "images/talk.png");
    }
    })
    


})