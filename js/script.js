/*let favArray 
if(localStorage.favorites){
favArray=JSON.parse(localStorage.favorites);

}else{
    favArray=[]
}
let totalPoints = 0;

const saveButton=document.querySelector(".save-button");
for (let i=0; i< saveButton.length;i++){
    saveButton[i].addEventListener("click",addFavorite);
}

function addFavorite(event){
    const icon=event.target;
    const post= icon.closest(".post-container");
    const image= post.querySelector(".image-cover").src;
    const profile=post.querySelector(".captions");
    const heading=post.closest(".post-heading");
    const points=parseInt(document.querySelector(".post-price"));

    let favoritePost={
        icon: icon,
        post: post,
        image: image,
        profile: profile,
        heading:heading,
        points: points
    }

    for (let i=0; i<favArray.length; i++){
        if (post===favArray[i].post){
            favArray.splice(i,1)
        }
    }

    favArray.push(favoritePost);
    localStorage.favorites=JSON.stringify(favArray)
}*/
