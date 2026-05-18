const items_grid = document.querySelector(".items-grid");
const post_container = document.querySelector(".post_container");




fetch("product-list.json")
    .then(response => response.json())
    .then(data => {
        allPosts = data;
        spawnPosts(allPosts);
    });


function spawnPosts(data) {
    items_grid.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        const postCard = document.createElement("a");
        postCard.classList.add("post_container");
        postCard.href = "post.html";
        postCard.innerHTML = `
        <div class="post_images">
            <div class="image-cover">
                <div class="image-product" style="background-image: url('${data[i].images[0]}');"></div>
                <div class="black_shadow"></div>
            </div>
            <div class="image-cover">
                <div class="image-product" style="background-image: url('${data[i].images[1]}');"></div>
                <div class="black_shadow"></div>
            </div>
            <div class="image-cover">
                <div class="image-product" style="background-image: url('${data[i].images[2]}');"></div>
                <div class="black_shadow"></div>
            </div>
        </div>
        <h2 class="post_heading">${data[i].item_title}</h2>
        <div class="hashtags">
            ${data[i].hashtags.map(hashtag => `<span class="${hashtag[1]}"><p class="captions">${hashtag[0]}</p></span>`).join('\n            ')}
        </div>
        <p class="post_price">${data[i].price} points</p>
        `;
        items_grid.appendChild(postCard);
    }
}