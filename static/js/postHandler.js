$(function(){
    $('#fileForm').submit(function(e) {
        e.preventDefault(); 
        var formData = new FormData($(this)[0]); // file data extraction
 
        $.ajax({ //ajax post req to flask server
            url: "/",
            data: formData,
            type: 'POST',
            async: false,   
            contentType: false,
            processData: false,
            success: function(response) { //updating the webpage with result
                $('#display').text(response.rawText);  
                $('#message').text(response.modText);  
            },
            error: function(err) {
                console.log(err);
            }
        });
    });
});