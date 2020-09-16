getComments();
function getComments(){
    $.get("/comments", function(data){
        if(data){
            console.log("Nema podataka");
        }
        console.log("Primljeni podatci: ");
        for(var i = 0; i < data.length; i++){
            console.log(data[i].public_institution);
        }
        showComments(data);
    });
}

function showComments(comments){
    var commentsSection = document.getElementById ("suggestion");
    for(var i = 0; i < comments.length; i++){
        var section = document.createElement("section");
        section.className += "suggestion";
        var heading = document.createElement("h4");
        heading.innerHTML = comments[i].public_institution;
        var comment = document.createElement("p");
        comment.innerHTML = comments[i].comment;
        section.appendChild(heading);
        section.appendChild(comment);
        commentsSection.appendChild(section);
    }
}