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
function loadMovies(filteredMovies = movies) {
    // Clear all movie categories before loading
    document.getElementById('trending-now').innerHTML = '';
    document.getElementById('new-releases').innerHTML = '';

    // Loop through the movies to add them to the respective categories
    filteredMovies.forEach(movie => {
        const movieElement = document.createElement('img');
        movieElement.src = movie.image;
        movieElement.alt = movie.title;
        movieElement.onclick = function() { openModal(movie.title); };
        
        const categoryElement = document.getElementById(movie.category);

        if (categoryElement) {
            categoryElement.appendChild(movieElement);
        }
    });
}

// Function to filter movies by search term
function filterMovies() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();
    console.log("Search term:", searchTerm);  // Debugging log to check if search is triggered
    
    // Filter movies based on the search term
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));

    console.log("Filtered Movies:", filteredMovies);  // Debugging log to check the filtered results

    // Reload the movies based on the filtered list
    loadMovies(filteredMovies);
}


// Function to open the modal with movie information
function openModal(movieTitle) {
    const movie = movies.find(m => m.title === movieTitle);
    if (movie) {
        document.getElementById('modal-image').src = movie.image;
        document.getElementById('modal-title').textContent = movie.title;
        document.getElementById('modal-description').textContent = movie.description;
        document.getElementById('movie-modal').style.display = 'block';
    }
}

// Function to close the modal
function closeModal() {
    document.getElementById('movie-modal').style.display = 'none';
}

// Initialize the page when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    loadMovies();  // Load movies dynamically on page load
});
