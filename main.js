var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg",
              "https://i.postimg.cc/qqyYvVbq/grandpa.jpg",
              "https://i.postimg.cc/wjMnFtMX/father.jpg",
              "https://i.postimg.cc/5ymDKL83/bro.jpg",
              "https://i.postimg.cc/JnL6wtrd/sister.jpg",
              "https://i.postimg.cc/bw5W5zSK/mother.jpg"];

var names = ["Family Book","Ranbhir Singh","Diljeet Singh","Rocky Singh","Alia Singh","Soni Singh"];

var i=0;
function nextslide(){
    document.getElementById("album").src= images[i];
    
    document.getElementById("family_member_name").innerHTML= names[i];
    i++;

    if(i>5){
        i=0;
    }
}