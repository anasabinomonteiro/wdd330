async function getProphets() {
    try {
        const response = await fetch('data/prophets.json');
        const data = await response.json();
        displayProphets(data.prophets);
    } catch (error) {
        console.error('Occure one error when find data', error);
    }
}

function displayProphets(prophets) {
    const container = document.body;
    const template = document.getElementById('prophet-card');

    prophets.forEach(prophet => {
        const clone = template.content.cloneNode(true); // Cloning the template
        clone.querySelector('h2').textContent = `${prophet.name} ${prophet.lastname}`;
        clone.querySelectorAll('p')[0].textContent = `Birth Date: ${prophet.birthdate}`;
        clone.querySelectorAll('p')[1].textContent = `Birth Place: ${prophet.birthplace}`;

        const img = clone.querySelector('img');
        img.src = prophet.imageurl;
        img.alt = `Portrait of ${prophet.name} ${prophet.lastname}`;

        container.appendChild(clone); // Add to HTML
    });
}

getProphets() // Call the function