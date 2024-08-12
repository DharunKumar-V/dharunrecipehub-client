document.getElementById('search').addEventListener('click', async function(event) {
    event.preventDefault(); // Prevent form submission from reloading the page
    const ingredients = document.getElementById('ingredients').value;

    try {
        const response = await fetch(`https://dharunrecipehub-server.vercel.app/fetch-recipes?ingredients=${encodeURIComponent(ingredients)}`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const recipes = await response.json();
        if (recipes.length > 0) {
            // Store recipes in sessionStorage and redirect to another page
            sessionStorage.setItem('recipes', JSON.stringify(recipes));
            window.location.href = 'result.html';
        } else {
            // Handle no recipes found case
            alert('No recipes found.');
        }
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
});
