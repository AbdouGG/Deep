function loadScripts() {
    fetch('scripts.json')
        .then(response => response.json())
        .then(scriptsData => {
            const scriptsContainer = document.getElementById('scripts-container');

            scriptsData.forEach(script => {
                const scriptDiv = document.createElement('div');
                scriptDiv.classList.add('script');

                scriptDiv.innerHTML = `
                    <img src="${script.image}" alt="${script.title}">
                    <h3>${script.title}</h3>
                    <p>${script.description}</p>
                    <a href="${script.link}" target="_blank" class="btn">Go to Script</a>
                `;

                scriptsContainer.appendChild(scriptDiv);
            });
        })
        .catch(error => console.error('Error loading scripts:', error));
}

document.addEventListener('DOMContentLoaded', loadScripts);
