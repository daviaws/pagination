const gifsPerPage = 6;
let currentPage = 1;
const gifs = [
    "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif",
    "https://media.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif",
    "https://media.giphy.com/media/l0HlE0RYx6xnzB2x6/giphy.gif",
    "https://media.giphy.com/media/26BRuo6sLetdllPAQ/giphy.gif",
    "https://media.giphy.com/media/xT9IgIc0lryrxvqVGM/giphy.gif",
    "https://media.giphy.com/media/l3vRj4cMg8zggQ8xy/giphy.gif",
    "https://media.giphy.com/media/3oKIPa2TdahY8zvF7e/giphy.gif",
    "https://media.giphy.com/media/1BdIPzOKTkbodxkfcy/giphy.gif",
    "https://media.giphy.com/media/2wYHlKYAAFc2/giphy.gif",
    "https://media.giphy.com/media/l0HlHFRbmaZtBRhXG/giphy.gif"
];

const memo = {};

function showPage(page) {
    if (!memo[page]) {
        const start = (page - 1) * gifsPerPage;
        const end = start + gifsPerPage;
        const gifsToShow = gifs.slice(start, end);
        memo[page] = gifsToShow;
    }

    const gifContainer = document.getElementById('gif-container');
    gifContainer.innerHTML = '';
    memo[page].forEach(gif => {
        const img = document.createElement('img');
        img.src = gif;
        gifContainer.appendChild(img);
    });

    document.getElementById('page-info').innerText = `Page ${page}`;
    document.getElementById('prev').disabled = page === 1;
    document.getElementById('next').disabled = page * gifsPerPage >= gifs.length;
}

document.getElementById('prev').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (currentPage * gifsPerPage < gifs.length) {
        currentPage++;
        showPage(currentPage);
    }
});

showPage(currentPage);
