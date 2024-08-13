document.addEventListener('DOMContentLoaded', function() {
    const projectsContainer = document.getElementById('projects-container');

    // Clear the container before appending new content
    projectsContainer.innerHTML = '';

    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            data.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.classList.add('project');

                // Set the background image dynamically
                projectElement.style.backgroundImage = `url(${project.backgroundImage})`;

                const titleElement = document.createElement('h3');
                titleElement.textContent = project.title;

                const descriptionElement = document.createElement('p');
                descriptionElement.textContent = project.description;

                const linkElement = document.createElement('a');
                linkElement.href = project.link;
                linkElement.textContent = project.linkText;
                linkElement.classList.add('project-btn');

                projectElement.appendChild(titleElement);
                projectElement.appendChild(descriptionElement);
                projectElement.appendChild(linkElement);

                projectsContainer.appendChild(projectElement);
            });
        })
        .catch(error => console.error('Error loading projects:', error));
});
