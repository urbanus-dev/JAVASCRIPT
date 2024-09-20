function fetchDataAndDisplay(sortOption) {
    fetch('http://localhost:3000/cartData')
        .then(response => response.json())
        .then(data => {
            if (sortOption === 'price-asc') {
                data.sort((a, b) => a.price - b.price);
            } else if (sortOption === 'price-desc') {
                data.sort((a, b) => b.price - a.price);
            } else if (sortOption === 'date-asc') {
                data.sort((a, b) => new Date(a.date) - new Date(b.date));
            } else if (sortOption === 'date-desc') {
                data.sort((a, b) => new Date(b.date) - new Date(a.date));
            }

            let contents_display = document.getElementById('contents');
            contents_display.innerHTML = '';

            data.forEach(data_elements => {
                let contentDiv = document.createElement('div');
                contentDiv.classList.add('data_elements');
                contentDiv.innerHTML = `
                    <img src="${data_elements.imageUrl}" alt="${data_elements.id}">
                    <h4>${data_elements.title}</h4> 
                    <h4>ksh.${data_elements.price}</h4>        
                    <p>${data_elements.date}</p>
                    <p>${data_elements.location}</p>
                    <h4>${data_elements.company}</h4>
                    <button onclick="addToFavorites(${data_elements.id})">Add to Favorites</button>
                `;
                contents_display.appendChild(contentDiv);
            });
        })
        .catch(error => {
            console.log(`Error while fetching content: ${error}`);
        });
}
function addToFavorites(id) {
    fetch(`http://localhost:3000/cartData/${id}`)
        .then(response => response.json())
        .then(item => {
            let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            let itemExists = favorites.some(favoriteItem => favoriteItem.id === id);
            if (!itemExists) {
                favorites.push(item);
                localStorage.setItem('favorites', JSON.stringify(favorites));
                alert('Item added to favorites!');
            } else {
                alert('Item is already in favorites!');
            }
        })
        .catch(error => {
            console.log(`Error fetching item for favorites: ${error}`);
        });
}
function displayFavorites() {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    let contents_display = document.getElementById('contents');
    contents_display.innerHTML = '';

    favorites.forEach(favoriteItem => {
        let contentDiv = document.createElement('div');
        contentDiv.classList.add('data_elements');
        contentDiv.innerHTML = `
            <img src="${favoriteItem.imageUrl}" alt="${favoriteItem.id}">
            <h4>${favoriteItem.title}</h4> 
            <h4>ksh.${favoriteItem.price}</h4>        
            <p>${favoriteItem.date}</p>
            <p>${favoriteItem.location}</p>
            <h4>${favoriteItem.company}</h4>
            <button onclick="removeFromFavorites(${favoriteItem.id})">Remove from Favorites</button>
        `;
        contents_display.appendChild(contentDiv);
    });
}
function removeFromFavorites(id) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    console.log('Favorites before removal:', favorites);

    id = Number(id);

    favorites = favorites.filter(favoriteItem => Number(favoriteItem.id) !== id);

    localStorage.setItem('favorites', JSON.stringify(favorites));
    console.log('Favorites after removal:', favorites);
    displayFavorites();
}
const ButtonAscPrice = document.getElementById('Asc');
const ButtonDescPrice = document.getElementById('Des');
const ButtonAscDate = document.getElementById('AscDate');
const ButtonDescDate = document.getElementById('DateDes');
const ButtonViewFavorites = document.getElementById('viewFavorites');

ButtonAscPrice?.addEventListener('click', () => {
    fetchDataAndDisplay('price-asc');
});
ButtonDescPrice?.addEventListener('click', () => {
    fetchDataAndDisplay('price-desc');
});
ButtonAscDate?.addEventListener('click', () => {
    fetchDataAndDisplay('date-asc');
});
ButtonDescDate?.addEventListener('click', () => {
    fetchDataAndDisplay('date-desc');
});
ButtonViewFavorites?.addEventListener('click', () => {
    displayFavorites();
});
fetchDataAndDisplay();
