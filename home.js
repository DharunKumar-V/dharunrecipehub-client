document.getElementById('search').addEventListener('click', async function(event) {
    event.preventDefault(); 
    const ingredients = document.getElementById('ingredients').value;

    try {
        const response = await fetch(`https://dharunrecipehub-server.vercel.app/fetch-recipes?ingredients=${encodeURIComponent(ingredients)}`);
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const recipes = await response.json();
        if (recipes.length > 0) {
            
            sessionStorage.setItem('recipes', JSON.stringify(recipes));
            window.location.href = 'result.html';
        } else {
            
            alert('No recipes found.');
        }
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
});
