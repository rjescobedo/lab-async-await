// Write your code here!
// display Posts takes in the posts array as a parameter and displays what's fetched from the API
function displayPosts(posts) {
    //Loop through these array
    posts.forEach((post) => {
        //console.log(post)
        //Grabbing the id post-list Ul
        const postList = document.getElementById('post-list');
        //Creating an li, h1, and p element
        const postLiElement = document.createElement('li');
        const postTitle = document.createElement('h1');
        const postDescription = document.createElement('p');

        //Adding content to the h1 and p elements
        postTitle.textContent = post.title;
        postDescription.textContent = post.body;

        //Append the h1 and p elements to the li
        postLiElement.append(postTitle);
        postLiElement.append(postDescription);

        //Append the li to the ul #post-list
        postList.append(postLiElement);

    });
}

//fetchPosts handles fetching from the typicode API and incorporating async/await
async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json()
        console.log(posts)
        displayPosts(posts)
    } catch (error) {
        console.error('Error fetching data:', error);
    }

}
fetchPosts();