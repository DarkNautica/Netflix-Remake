// Movie Database
const movies = [
    { title: "Movie 1", category: "trending-now", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Movie+1" },
    { title: "Movie 2", category: "trending-now", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Movie+2" },
    { title: "Movie 3", category: "trending-now", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Movie+3" },
    { title: "Movie 4", category: "trending-now", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Movie+4" },
    { title: "Movie 5", category: "new-releases", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Movie+5" },
    { title: "Movie 6", category: "new-releases", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Movie+6" },
    { title: "Movie 7", category: "new-releases", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Movie+7" },
    { title: "Movie 8", category: "new-releases", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Movie+8" }
];

// Function to load movies into the correct category
function loadMovies() {
    movies.forEach(movie => {
        const movieElement = `<img src="${movie.image}" alt="${movie.title}">`;
        const categoryElement = document.getElementById(movie.category);
        
        // Make sure the category exists before adding
        if (categoryElement) {
            categoryElement.innerHTML += movieElement;
        }
    });
}

// Initialize the page when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    loadMovies();  // Load movies dynamically
});
