try {
    fetch('http://localhost:3000/event')
        .then(response => response.json())
        .then(data => {
            let contents_display = document.getElementById('contents')
            data.forEach(data_elements => {
                let contentDiv = document.createElement('div')
                contentDiv.classList.add('data_elements')
                contentDiv.innerHTML = `
                    <img src="${data_elements.imageUrl}" 
                    alt="${data_elements.id}">
                    <h4>${data_elements.title}</h4>         
                    <p>${data_elements.date}</p>
                    <p>${data_elements.location}</p>
                    <h4>ksh.${data_elements.price}</h4>
                    <button>Buy Now</button>
            `
                contents_display.appendChild(contentDiv)

            });
        })
} catch (error) {
    console.log(`Error while fetching content ${error}`)
}