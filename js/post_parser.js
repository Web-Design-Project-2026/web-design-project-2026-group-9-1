const post_container = document.querySelector(".post_container");
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
        post_container.innerHTML = "<p>Post not found.</p>";
        return;
    }

    post_container.innerHTML = `
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
    `;
}
