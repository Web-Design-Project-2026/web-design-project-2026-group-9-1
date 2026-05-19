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
        <a class="post_images" href="post.html">
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
        </a>
        <div class="post_profile">
            <div class="student_profile_pic" style="background-image: url('${data[i].student_profile_pic}');"></div>
            <p class="captions">@${data[i].post_username}</p>
        </div>
        <h2 class="post_heading">${data[i].item_title}</h2>
        <div class="hashtags">
            ${data[i].hashtags.map(hashtag => `<span class="${hashtag[1]}"><p class="captions">${hashtag[0]}</p></span>`).join('\n            ')}
        </div>
        <p class="post_price">${data[i].price} points</p>
        <div class="post_actions">
            <button class="buy-button buy-btn"></button>
            <div class="post_buttons">
                <button class="post-button save-button"></button>
                <button class="post-button share-button"></button>
            </div>
        </div>
        `;
        items_grid.appendChild(postCard);
    }
}