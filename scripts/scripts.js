// Movie Database
const movies = [
    { title: "Movie 1", description: "This is Movie 1", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Movie+1", category: "trending-now" },
    { title: "Movie 2", description: "This is Movie 2", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Movie+2", category: "trending-now" },
    { title: "Movie 3", description: "This is Movie 3", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Movie+3", category: "trending-now" },
    { title: "Movie 4", description: "This is Movie 4", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Movie+4", category: "new-releases" },
    { title: "Movie 5", description: "This is Movie 5", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Movie+5", category: "new-releases" },
    { title: "Movie 6", description: "This is Movie 6", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Movie+6", category: "popular" },
    { title: "Movie 7", description: "This is Movie 7", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Movie+7", category: "popular" },
];

// Function to load movies into the correct category
function loadMovies() {
    movies.forEach(movie => {
        const movieElement = `<img src="${movie.image}" alt="${movie.title}" onclick="openModal('${movie.title}')">`;
        const categoryElement = document.getElementById(movie.category);
        
        if (categoryElement) {
            console.log(`Adding ${movie.title} to ${movie.category}`);
            categoryElement.innerHTML += movieElement;
        } else {
            console.error(`Category '${movie.category}' not found in the HTML`);
        }
    });
}

// Modal functionality
function openModal(movieTitle) {
    const movie = movies.find(m => m.title === movieTitle);
    document.getElementById('modal-image').src = movie.image;
    document.getElementById('modal-title').textContent = movie.title;
    document.getElementById('modal-description').textContent = movie.description;
    document.getElementById('movie-modal').style.display = 'block';
}

// Close modal functionality
function closeModal() {
    document.getElementById('movie-modal').style.display = 'none';
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    loadMovies();  // Ensure this runs after the DOM is fully loaded
});
