/* eslint-disable */

$(function(){
    /* gnb 메뉴 시작 */
    $("li.mainLi").mouseover(function(){
       $("ul.subMenu").stop().fadeIn(500);
    });
        $("li.mainLi").mouseout(function(){
       $("ul.subMenu").stop().fadeOut(500);
    });
    /* gnb 메뉴 끝 */

    /* slide 시작 */
    setInterval(fnSlide,4000);
    function fnSlide(){
        $("div#slideFrame").animate(
            {"margin-top": "-300px"},
            3000,
            function() {
                $("div#slideFrame>a:nth-child(1)")
                    .insertAfter("#slideFrame>a:last-child");
                $("div#slideFrame").css({"margin-top": "0"});
            }
        );
    };
    /* slide 끝 */

    /* 멀티탭 구현 시작 */
    $("button.tabBtn").click(function() {
        $("button.tabBtn").css({
            "border-bottom-color" : "#aaa",
            "background-color" : "#eee"
        });
        $(this).css({
            "border-bottom-color" : "#fff",
            "background-color" : "#fff"
        });/* 버튼 구현 */

        $("div.tabContents").css({"display" : "none"});
        var data = $(this).attr("data-link");
        $("#" + data).css({"display": "block"});
    });
    /* 멀티탭 구현 끝 */

    /* 레이어팝업 */
    $("#notice>table>tbody>tr:first-child").click(function(){
        $("#layerPop").css({"display" : "block"});
    });
    $("#layerContents>#popBtn").click(function(){
        $("#layerPop").css({"display" : "none"});
    });

}); /* document */
