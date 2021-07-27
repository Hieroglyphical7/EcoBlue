var num = 0;

$(document).ready(function(){
    $("#next").click(function(){
        num++;
        if(num == 5) {
            $("#completion").animate({bottom: "-27%"});
            $("#next").animate({bottom: "-12%"});

            $("#completion").animate({bottom: "-500%"});
            $("#next").animate({bottom: "-500%"});

            //setTimeout(function() { document.getElementById("quizForm").submit(); }, 3000);
            //setTimeout(function() { window.location.href = "product.html"; }, 3000);
        }
        for(let i = 0; i < 6; i++){
            $("#Q" + (i+1)).animate({left: (i*100 - 100 * num) + "%"});
        }
        document.getElementById("q" + num + "c").src = "./res/complete.png";
    });
});
