$(document).ready(()=>{
    getPage('https://swapi.co/api/starships/');

    function getPage(url){
        $.get(url,(res)=>{
            console.log(res);
            $('#prev').attr('href', res.previous);
            $('#next').attr('href', res.next);
            
            $('#shipTable').html("");
            for (let ship of res.results){
                $('#shipTable').append(
                    `<tr>
                        <td>${ship.name}</td>
                        <td>${ship.crew}</td>
                        <td>${ship.length}</td>
                    </tr>
                    `
                )
            }
        });
    }

    $("#next").click(function(){
        console.log("next clicked");
        console.log($(this));
        if ($(this).attr('href')){
            console.log("in if check");
            getPage($(this).attr('href'));
        }
    });
    $("#prev").click(function(){
        console.log("prev clicked");
        if ($(this).attr('href')){
            getPage($(this).attr('href'));
        }
    });
})