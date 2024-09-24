// Movie Database with 100 random movie titles
const movies = [
    { title: "Superman", category: "trending-now", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Superman", description: "Description for Superman" },
    { title: "Interstellar", category: "trending-now", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Interstellar", description: "Description for Interstellar" },
    { title: "Inception", category: "trending-now", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Inception", description: "Description for Inception" },
    { title: "The Matrix", category: "trending-now", image: "https://via.placeholder.com/200x300/000000/ffffff?text=The+Matrix", description: "Description for The Matrix" },
    { title: "The Dark Knight", category: "new-releases", image: "https://via.placeholder.com/200x300/000000/ffffff?text=The+Dark+Knight", description: "Description for The Dark Knight" },
    { title: "Avengers: Endgame", category: "new-releases", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Avengers+Endgame", description: "Description for Avengers: Endgame" },
    { title: "Titanic", category: "new-releases", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Titanic", description: "Description for Titanic" },
    { title: "Jurassic Park", category: "new-releases", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Jurassic+Park", description: "Description for Jurassic Park" },
    { title: "Forrest Gump", category: "popular", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Forrest+Gump", description: "Description for Forrest Gump" },
    { title: "Pulp Fiction", category: "popular", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Pulp+Fiction", description: "Description for Pulp Fiction" },
    { title: "Fight Club", category: "popular", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Fight+Club", description: "Description for Fight Club" },
    { title: "Gladiator", category: "popular", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Gladiator", description: "Description for Gladiator" },
    { title: "The Godfather", category: "trending-now", image: "https://via.placeholder.com/200x300/000000/ffffff?text=The+Godfather", description: "Description for The Godfather" },
    { title: "Schindler's List", category: "trending-now", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Schindlers+List", description: "Description for Schindler's List" },
    { title: "The Shawshank Redemption", category: "trending-now", image: "https://via.placeholder.com/200x300/000000/ffffff?text=The+Shawshank+Redemption", description: "Description for The Shawshank Redemption" },
    { title: "Star Wars", category: "trending-now", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Star+Wars", description: "Description for Star Wars" },
    { title: "The Lion King", category: "new-releases", image: "https://via.placeholder.com/200x300/000000/ffffff?text=The+Lion+King", description: "Description for The Lion King" },
    { title: "Harry Potter", category: "new-releases", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Harry+Potter", description: "Description for Harry Potter" },
    { title: "Back to the Future", category: "new-releases", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Back+to+the+Future", description: "Description for Back to the Future" },
    { title: "Spider-Man", category: "new-releases", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Spider-Man", description: "Description for Spider-Man" },
    { title: "Rocky", category: "popular", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Rocky", description: "Description for Rocky" },
    { title: "The Avengers", category: "popular", image: "https://via.placeholder.com/200x300/000000/ffffff?text=The+Avengers", description: "Description for The Avengers" },
    { title: "The Wolf of Wall Street", category: "popular", image: "https://via.placeholder.com/200x300/000000/ffffff?text=The+Wolf+of+Wall+Street", description: "Description for The Wolf of Wall Street" },
    { title: "Braveheart", category: "popular", image: "https://via.placeholder.com/200x300/000000/ffffff?text=Braveheart", description: "Description for Braveheart" },
    // Add more movies following the same structure up to 100
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
