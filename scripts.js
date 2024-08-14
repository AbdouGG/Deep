document.addEventListener('DOMContentLoaded', function() {
    // Remove the hidden class after the page has fully loaded to trigger the fade-in animation
    document.body.classList.remove('preload');

    const projectsContainer = document.getElementById('projects-container');
    const updatesContainer = document.getElementById('updates-container');

    // Load Projects
    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            projectsContainer.innerHTML = ''; // Clear previous content
            data.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.classList.add('project');
                projectElement.style.backgroundImage = `url(${project.backgroundImage})`;

                const titleElement = document.createElement('h3');
                titleElement.textContent = project.title;

                const descriptionElement = document.createElement('p');
                descriptionElement.textContent = project.description;

                const linkElement = document.createElement('a');
                linkElement.textContent = project.linkText;
                linkElement.href = project.link;
                linkElement.classList.add('btn', 'project-btn');
                linkElement.setAttribute('aria-label', `View details for ${project.title}`);

                projectElement.appendChild(titleElement);
                projectElement.appendChild(descriptionElement);
                projectElement.appendChild(linkElement);

                projectsContainer.appendChild(projectElement);
            });
        })
        .catch(error => {
            projectsContainer.innerHTML = '<p>Failed to load projects. Please try again later.</p>';
            console.error('Error loading projects:', error);
        });

    // Load Updates
    fetch('updates.json')
        .then(response => response.json())
        .then(data => {
            updatesContainer.innerHTML = ''; // Clear previous content
            data.forEach(update => {
                const updateElement = document.createElement('div');
                updateElement.classList.add('update');

                const titleElement = document.createElement('h3');
                titleElement.textContent = update.title;

                const descriptionElement = document.createElement('p');
                descriptionElement.textContent = update.description;

                const imageElement = document.createElement('img');
                imageElement.src = update.image;
                imageElement.alt = update.title;
                imageElement.classList.add('medium-image');

                updateElement.appendChild(titleElement);
                updateElement.appendChild(descriptionElement);
                updateElement.appendChild(imageElement);

                updatesContainer.appendChild(updateElement);
            });

            // Optional: Add lightbox functionality to images
            const mediumImages = document.querySelectorAll('.medium-image');
            mediumImages.forEach(image => {
                image.addEventListener('click', () => {
                    const lightbox = createLightbox(image.src);
                    document.body.appendChild(lightbox);
                });
            });
        })
        .catch(error => {
            updatesContainer.innerHTML = '<p>Failed to load updates. Please try again later.</p>';
            console.error('Error loading updates:', error);
        });
        // Portfolio
        fetch('portfolio.json')
            .then(response => response.json())
            .then(data => {
                const portfolioContainer = document.getElementById('portfolio-container');
                
                data.forEach(item => {
                    const portfolioItem = document.createElement('div');
                    portfolioItem.classList.add('portfolio-item');

                    portfolioItem.innerHTML = `
                        <img src="${item.image}" alt="${item.title} Screenshot">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                        <a href="${item.link}" class="btn" target="_blank" aria-label="View ${item.title}">View Project</a>
                    `;

                    portfolioContainer.appendChild(portfolioItem);
                });
            })
            .catch(error => console.error('Error loading portfolio data:', error));

});

function createLightbox(src) {
    const lightbox = document.createElement('div');
    lightbox.style.position = 'fixed';
    lightbox.style.top = '0';
    lightbox.style.left = '0';
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    lightbox.style.display = 'flex';
    lightbox.style.alignItems = 'center';
    lightbox.style.justifyContent = 'center';
    lightbox.style.zIndex = '1000';

    const img = document.createElement('img');
    img.src = src;
    img.style.maxWidth = '90%';
    img.style.maxHeight = '90%';
    img.style.border = '5px solid #fff';
    img.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
    img.alt = 'Enlarged view';

    lightbox.appendChild(img);

    lightbox.addEventListener('click', () => {
        document.body.removeChild(lightbox);
    });

    return lightbox;
}

// Back on Top
document.addEventListener("DOMContentLoaded", function() {
    // Remove preload class after page has loaded
    document.body.classList.remove("preload");

    // Back to Top Button Functionality
    var backToTopBtn = document.getElementById("back-to-top");

    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    };

    backToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const blogContainer = document.getElementById('blog-container');

    fetch('blog.json')
        .then(response => response.json())
        .then(data => {
            blogContainer.innerHTML = ''; // Clear previous content
            data.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('blog-post');

                const imageElement = document.createElement('img');
                imageElement.src = post.image;
                imageElement.alt = post.title;

                const titleElement = document.createElement('h3');
                titleElement.textContent = post.title;

                const descriptionElement = document.createElement('p');
                descriptionElement.textContent = post.description;

                const linkElement = document.createElement('a');
                linkElement.textContent = 'Read More';
                linkElement.href = post.link;
                linkElement.classList.add('btn');
                linkElement.setAttribute('aria-label', `Read more about ${post.title}`);

                postElement.appendChild(imageElement);
                postElement.appendChild(titleElement);
                postElement.appendChild(descriptionElement);
                postElement.appendChild(linkElement);

                blogContainer.appendChild(postElement);
            });
        })
        .catch(error => {
            blogContainer.innerHTML = '<p>Failed to load blog posts. Please try again later.</p>';
            console.error('Error loading blog posts:', error);
        });
});
