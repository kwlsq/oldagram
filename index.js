const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

// Element init
const sectionEL = document.getElementById("section")

// Render posts objects
renderPosts()

function renderPosts() {
    let postsToBeRendered = ""
    for (let i = 0; i < posts.length; i++) {
        const {
            name,
            username,
            location,
            avatar,
            post,
            comment,
            likes
        } = posts[i]

        postsToBeRendered += `
        <div class="container">
            <div class="post-header p-10">
                <img src="${avatar}" class="user-avatar" alt="post owner avatar">
                <div>
                    <p id="name" class="bold txt-medium">${name}</p>
                    <p>${location}</p>
                </div>
            </div>
            <img ondblclick=likePost(${i}) class="post" src="${post}">
            <div class="post-footer p-10">
                <div>
                    <button onclick="likePost(${i})" class="btn-like">
                        <img alt="icon like" src="images/icon-heart.png">
                    </button>
                    <img alt="icon comment" src="images/icon-comment.png">
                    <img alt="icon dm" src="images/icon-dm.png">
                </div>
                <p id="likes-${i}" class="bold">${likes} likes</p>
            </div>
            <div class="comment-section">
                <p><span class="bold">${username}</span>${comment}</p>
            </div>
        </div>
        `
    }

    sectionEL.innerHTML = postsToBeRendered
}

// Like function
function likePost(index) {
    const likesEL = document.getElementById(`likes-${index}`)
    posts[index].likes++
    likesEL.textContent = `${posts[index].likes} likes`
}


