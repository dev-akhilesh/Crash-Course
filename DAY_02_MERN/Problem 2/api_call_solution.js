// Function to fetch data from JSONPlaceholder API
async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    } catch (error) {
        throw error;
    }
}



// Function to create HTML elements for posts
function createPostElement(post) {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    const titleElement = document.createElement('h2');
    titleElement.textContent = post.title;

    const bodyElement = document.createElement('p');
    bodyElement.textContent = post.body;

    postDiv.appendChild(titleElement);
    postDiv.appendChild(bodyElement);

    return postDiv;
}

// Function to display fetched data in HTML
function displayData(data) {
    const postsContainer = document.getElementById('posts');
    data.forEach(post => {
        const postElement = createPostElement(post);
        postsContainer.appendChild(postElement);
    });
}

// Main function to fetch and display data
async function main() {
    try {
        const data = await fetchData();
        displayData(data);
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

// Call main function
main();
