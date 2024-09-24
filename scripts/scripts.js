// Movie Database
const movies = [
    { title: "Movie 1", description: "This is Movie 1", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Movie+1", category: "trending" },
    { title: "Movie 2", description: "This is Movie 2", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Movie+2", category: "trending" },
    { title: "Movie 3", description: "This is Movie 3", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Movie+3", category: "trending" },
    { title: "Movie 4", description: "This is Movie 4", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Movie+4", category: "trending" },
    { title: "Movie 5", description: "This is Movie 5", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Movie+5", category: "trending" },
    { title: "Movie 6", description: "This is Movie 6", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Movie+6", category: "new-releases" },
    { title: "Movie 7", description: "This is Movie 7", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Movie+7", category: "new-releases" },
    { title: "Movie 8", description: "This is Movie 8", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Movie+8", category: "new-releases" },
    { title: "Movie 9", description: "This is Movie 9", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Movie+9", category: "popular" },
    { title: "Movie 10", description: "This is Movie 10", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Movie+10", category: "popular" }
];

// Load Movies to Each Category
function loadMovies() {
    movies.forEach(movie => {
        const movieElement = `<img src="${movie.image}" alt="${movie.title}" onclick="openModal('${movie.title}')">`;
        document.getElementById(movie.category).innerHTML += movieElement;
    });
}

// Filter Movies by Search
function filterMovies() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    const allMovies = document.querySelectorAll('.movie-row img');
    allMovies.forEach(movie => {
        const movieTitle = movie.alt.toLowerCase();
        movie.style.display = movieTitle.includes(searchTerm) ? 'block' : 'none';
    });
}

// Open Modal with Movie Info
function openModal(movieTitle) {
    const movie = movies.find(m => m.title === movieTitle);
    document.getElementById('modal-image').src = movie.image;
    document.getElementById('modal-title').textContent = movie.title;
    document.getElementById('modal-description').textContent = movie.description;
    document.getElementById('movie-modal').style.display = 'block';
}

// Close Modal
function closeModal() {
    document.getElementById('movie-modal').style.display = 'none';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadMovies();
});
