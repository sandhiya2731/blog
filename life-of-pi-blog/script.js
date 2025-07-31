function showDetails(id) {
    const blogDetails = [
        {
            title: "Survival at Sea",
            date: "2025-07-29",
            author: "Yann Martel",
            description: "The Life of Pi tells the story of Pi Patel’s survival on a lifeboat with a Bengal tiger, Richard Parker, after a shipwreck. This journey is a spiritual and emotional transformation, deeply reflecting on faith and perseverance."
        },
        {
            title: "Friendship with Richard Parker",
            date: "2025-07-29",
            author: "Yann Martel",
            description: "The bond that grows between Pi and Richard Parker during their journey highlights a deep connection between man and beast. Their relationship evolves from fear to mutual respect and companionship."
        },
        {
            title: "Spiritual Journey",
            date: "2025-07-29",
            author: "Yann Martel",
            description: "Pi’s spiritual journey is depicted beautifully through his reflections on religion, survival, and inner strength. He merges the teachings of Christianity, Islam, and Hinduism in his quest for truth."
        }
    ];

    const data = blogDetails[id - 1];
    document.getElementById('details').innerHTML = `
        <h2>${data.title}</h2>
        <p><strong>Date:</strong> ${data.date}</p>
        <p><strong>Author:</strong> ${data.author}</p>
        <p>${data.description}</p>
        <button onclick="likePost(this)">❤️ Like</button>
    `;
}

function likePost(btn) {
    btn.innerText = "❤️ Liked";
    btn.disabled = true;
}