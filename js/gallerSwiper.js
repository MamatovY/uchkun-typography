// Define all the variables
const thumbnails = document.querySelectorAll('.thumbnails img');
const mainImage = document.querySelector('.main-content img');
const mainImageContainer = document.querySelector('.main-content');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const pagination = document.querySelector('.pagination');
const closeGallery = document.querySelector('.closeGallery');
let currentIndex = 0;

// Add event listener to the entire document to handle keyboard events
document.addEventListener('keyup', function (event) {

    if (event.key === 'Escape') {
        mainImageContainer.classList.add('hidden');
    } else if (event.key === 'ArrowLeft' && currentIndex > 0) {

        currentIndex--;
        updateMainImage();
        updatePagination();

    } else if (event.key === 'ArrowRight' && currentIndex < thumbnails.length - 1) {

        currentIndex++;
        updateMainImage();
        updatePagination();
    }
});

// Add event listener to each thumbnail
thumbnails.forEach((thumbnail, index) => {

    thumbnail.addEventListener('click', () => {
        currentIndex = index;
        updateMainImage();
        mainImageContainer.classList.remove('hidden');
        updatePagination();
    });
});

// Add event listener to close button
closeGallery.addEventListener('click', () => {
    mainImageContainer.classList.add('hidden');
});

// Add event listener to previous button
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateMainImage();
        updatePagination();
    }
});

// Add event listener to next button
nextBtn.addEventListener('click', () => {
    if (currentIndex < thumbnails.length - 1) {
        currentIndex++;
        updateMainImage();
        updatePagination();
    }
});

// Update main image function
function updateMainImage() {
    const selectedThumbnail = thumbnails[currentIndex];
    const imageUrl = selectedThumbnail.getAttribute('src');
    mainImage.setAttribute('src', imageUrl);
}

// Update pagination function
function updatePagination() {
    pagination.innerHTML = '';

    thumbnails.forEach((thumbnail, index) => {
        const paginationItem = document.createElement('img');
        paginationItem.setAttribute('src', thumbnail.getAttribute('src'));
        paginationItem.setAttribute('alt', `Image ${index + 1}`);

        // Add event listener to each pagination item
        paginationItem.addEventListener('click', () => {
            currentIndex = index;
            updateMainImage();
            updatePagination();
        });

        if (index === currentIndex) {
            paginationItem.classList.add('active');
        }

        pagination.appendChild(paginationItem);
    });
}