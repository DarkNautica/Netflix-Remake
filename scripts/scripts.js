console.log("JavaScript file loaded!");  // This should print when the file is loaded

// Movie Database
const movies = [
    { title: "Movie 1", category: "trending-now", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Movie+1", description: "Description for Movie 1" },
    { title: "Movie 2", category: "trending-now", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Movie+2", description: "Description for Movie 2" },
    { title: "Movie 3", category: "trending-now", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Movie+3", description: "Description for Movie 3" },
    { title: "Movie 4", category: "trending-now", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Movie+4", description: "Description for Movie 4" },
    { title: "Movie 5", category: "new-releases", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Movie+5", description: "Description for Movie 5" },
    { title: "Movie 6", category: "new-releases", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Movie+6", description: "Description for Movie 6" },
    { title: "Movie 7", category: "new-releases", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Movie+7", description: "Description for Movie 7" },
    { title: "Movie 8", category: "new-releases", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Movie+8", description: "Description for Movie 8" }
];

// Function to load movies into the correct category
// Function to load movies into the correct category
function loadMovies() {
    movies.forEach(movie => {
        // Use proper HTML string concatenation inside backticks
        const movieElement = `<img src="${movie.image}" alt="${movie.title}" onclick="openModal('${movie.title}')">`;
        const categoryElement = document.getElementById(movie.category);
        
        // Make sure the category exists before adding
        if (categoryElement) {
            categoryElement.innerHTML += movieElement; // Correctly append the HTML
        } else {
            console.error(`Category ${movie.category} not found.`);
        }
    });
}


// Function to open the modal with movie information
function openModal(movieTitle) {
    console.log("Opening modal for:", movieTitle);  // Add a debug log
    const movie = movies.find(m => m.title === movieTitle);
    if (movie) {
        document.getElementById('modal-image').src = movie.image;
        document.getElementById('modal-title').textContent = movie.title;
        document.getElementById('modal-description').textContent = movie.description;
        document.getElementById('movie-modal').style.display = 'block';
    } else {
        console.error(`Movie ${movieTitle} not found.`);
    }
}

// Function to close the modal
function closeModal() {
    console.log("Closing modal");  // Add a debug log
    document.getElementById('movie-modal').style.display = 'none';
}

// Initialize the page when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded");  // Debugging log
    loadMovies();  // Load movies dynamically
});
