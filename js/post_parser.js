const main = document.querySelector("main");
const post_id = localStorage.getItem("clicked_post_id");

fetch("product-list.json")
    .then(response => response.json())
    .then(data => {
        const allPosts = data;
        spawnPosts(allPosts);
    });

function spawnPosts(data) {
    const post = data.find(item => item.id == post_id);
    if (!post) {
        main.innerHTML = "<p>Post not found.</p>";
        return;
    }

    main.innerHTML = `
        <header class="post_destination">
            <p>Category <span style="font-weight: 600;">${post.post_category}</span></p>
            <a href="index.html" class="back-button">
                <img src="images/navicons/back icon.svg" alt="Back">
            </a>
        </header>
        <div class="post_container">
            <a class="post_images">
                <div class="image-cover">
                    <div class="image-product" style="background-image: url('${post.images[0] || ''}');"></div>
                    <div class="black_shadow"></div>
                </div>
                <div class="image-cover">
                    <div class="image-product" style="background-image: url('${post.images[1] || ''}');"></div>
                    <div class="black_shadow"></div>
                </div>
                <div class="image-cover">
                    <div class="image-product" style="background-image: url('${post.images[2] || ''}');"></div>
                    <div class="black_shadow"></div>
                </div>
            </a>
            <div class="post_desc">
                <div class="post_profile">
                    <div class="student_profile_pic" style="background-image: url('${post.student_profile_pic || ''}');"></div>
                    <p class="captions">@${post.post_username}</p>
                </div>
                <h2 class="post_heading">${post.item_title}</h2>
                <div class="hashtags">
                    ${post.hashtags ? post.hashtags.map(hashtag => `<span class="${hashtag[1]}"><p class="captions">${hashtag[0]}</p></span>`).join('\n            ') : ''}
                </div>
                <p class="post_price">${post.price} points</p>
                <div class="post_actions">
                    <button class="buy-button buy-btn" aria-label="buy"></button>
                    <div class="post-buttons">
                        <button class="post-button save-button" aria-label="save"></button>
                        <button class="post-button share-button" aria-label="share"></button>
                    </div>
                </div>
            </div>
        </div>
        <h2>Description</h2>
        <p>${post.post_description}</p>

        <h2 style="margin-top: 40px; margin-bottom: 20px;">Other Posts</h2>
        <div class="items-grid"></div>
    `;

    const items_grid = main.querySelector(".items-grid");
    
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == post_id) continue;
        
        const postCard = document.createElement("div");
        postCard.classList.add("posts_container");
        postCard.style.cursor = "pointer";
        postCard.id = data[i].id;
        postCard.innerHTML = `
        <a class="post_images">
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
            ${data[i].hashtags ? data[i].hashtags.map(hashtag => `<span class="${hashtag[1]}"><p class="captions">${hashtag[0]}</p></span>`).join('\n            ') : ''}
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
        
        postCard.addEventListener("click", () => {
            localStorage.setItem("clicked_post_id", data[i].id);
            window.location.href = "post.html";
        });

        items_grid.appendChild(postCard);
    }
}
