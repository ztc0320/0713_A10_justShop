/* eslint-disable */

$(function(){

    $("li.mainLi").mouseover(function(){
        $("ul.subMenu").stop().slideDown(500);
    });
    $("li.mainLi").mouseout(function(){
        $("ul.subMenu").stop().slideUp(300);
    });

    // slide start
    setInterval(fnSlide, 3000);
    function fnSlide(){
        $("#shuttleFrame").animate(
            {"margin-top": "-300px"},
            2000,
            function(){
                $("#slide a:first-child").insertAfter("#slide a:last-child");
                $("#shuttleFrame").css({"margin-top" : "0"});
            }
        );
    };

    // multiTab
    $("#bbs button").click(function(){
        $("#bbs button").removeClass("selected");
        $(this).addClass("selected");

        var dataLink = $(this).attr("data-link");
        $("#bbs .tabContents").css({"display": "none"});
        $("#" + dataLink).css({"display": "block"});
    });

    // 레이어 팝업
    $("tr#popupPoint").click(function(){
        $("div#layerBG").css({"display": "block"});
    });

    $("#closeBtnArea>button").click(function(){
        $("div#layerBG").css({"display": "none"});
    });
});
