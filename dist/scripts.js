$(function() {
   $("#controlBar_SwitchSiteButton, #controlBar_SwitchLanguageButton").remove();

    $("#query").keyup(function(e) {
        if(e.which == 13) {
            e.preventDefault();            
            search();
        }
    });
    $("#submitSearch").click(function() {
       search();
    });
    
    $("#query").click(function(e) {
        e.stopPropagation();
        $("#submitSearch").css("display","block");
    });

    $(document).click(function(elem) {
        $("#submitSearch").css("display","none");
    });

    // functions
    function search() {
        var jQs = $("#query").val();
        var resultPage = $(".app-addSearchCustomInput").data("resultpage");
        location.href = resultPage + "?addsearch=" + jQs;
    }

    // Mobile
    $(document).on('keydown','#query-mobile', function(e){
        if(e.which == 13) {           
            searchMobile();
        }
    })

    $(document).on('click','#submitSearch-mobile', function(e){
        searchMobile();
    })

    
    // functions
    function searchMobile() {
        var jQsM = $(".sidr #query-mobile").val();
        var resultPage = $(".app-addSearchCustomInputMobile").data("resultpage");
        location.href = resultPage + "?addsearch=" + jQsM;
    }

});
