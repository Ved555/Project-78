var i = 0;
var images = ["Father.jpg" , "mother.jpg" , "sister.jpg" , "me.jpg"];
var names = ["Father(Oswald)" , "Mother(Bindiya)" , "Sister(Diya)" ,"me(Ved)"];
function nextslide() {
    document.getElementById("photo").src=images[i];
    document.getElementById("family_member_name").innerHTML=names[i];
    i++;
}
