var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","DAD.jpg","MOM.jpg","SISTER.jpg","ME.jpg"];
var names = ["Fmaily Book","B.V.Ramesh","Prapa","B.R.Krishma","B.R.Pavan Vishwa"];
var i = 0;

function nextslide()
{
    
    var numbers_of_family_member_in_array = 4;
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName  = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
    i++;
}

