// Dữ liệu mẫu với URL hình ảnh và mô tả
const photoData = {
    "Kiwis": {
        "images": ["kiwi1.png", "kiwi1.png", "kiwi1.png"],
        "description": "Collection of high resolution fruit photoshoots",
        "date": "May 8",
        "thumbnail": "kiwi1.png"
    },
    "Lemons": {
        "images": ["lemon1.png", "lemon1.png", "lemon1.png"],
        "description": "Collection of high resolution fruit photoshoots",
        "date": "May 8",
        "thumbnail": "lemon1.png"
    },
    "Strawberries": {
        "images": ["strawberries1.png", "strawberries1.png", "strawberries1.png"],
        "description": "Collection of high resolution fruit photoshoots",
        "date": "May 8",
        "thumbnail": "strawberries1.png"
    },
    "Figs": {
        "images": ["fig1.png", "fig1.png", "fig1.png"],
        "description": "Second photoshoots of figs moved here. Use this folder.",
        "date": "May 8",
        "thumbnail": "fig1.png"
    },
    "Nectarines": {
        "images": ["nectarines1.png", "nectarines1.png", "nectarines1.png"],
        "description": "Collection of high resolution fruit photoshoots",
        "date": "May 7",
        "thumbnail": "nectarines1.png"
    },
    "Watermelons": {
        "images": ["watermelon1.png", "watermelon1.png", "watermelon1.png"],
        "description": "Collection of high resolution fruit photoshoots",
        "date": "May 7",
        "thumbnail": "watermelon1.png"
    }
};

// Lưu dữ liệu vào Local Storage
localStorage.setItem('photoData', JSON.stringify(photoData));

// Lấy dữ liệu từ Local Storage
const storedPhotoData = JSON.parse(localStorage.getItem('photoData'));

// Tạo danh sách bên trái
const photoList = document.getElementById('photo-list');
for (const category in storedPhotoData) {
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.onclick = () => displayPhotos(category);

    const img = document.createElement('img');
    img.src = `img/${storedPhotoData[category].thumbnail}`;
    listItem.appendChild(img);

    const textContainer = document.createElement('div');
    textContainer.className = 'text-container';

    const title = document.createElement('div');
    title.className = 'title';
    title.textContent = category;
    textContainer.appendChild(title);

    const description = document.createElement('div');
    description.className = 'description';
    description.textContent = storedPhotoData[category].description;
    textContainer.appendChild(description);

    listItem.appendChild(textContainer);

    const date = document.createElement('div');
    date.className = 'date';
    date.textContent = storedPhotoData[category].date;
    listItem.appendChild(date);

    photoList.appendChild(listItem);
}

// Hiển thị hình ảnh bên phải
function displayPhotos(category) {
    const photoDisplay = document.getElementById('photo-display');
    photoDisplay.innerHTML = '';
    const photos = storedPhotoData[category].images;
    photos.forEach(photo => {
        const img = document.createElement('img');
        img.src = `img/${photo}`;
        img.className = 'col-md-4';
        photoDisplay.appendChild(img);
    });
}

// Thêm sự kiện click để mở/đóng danh sách
document.getElementById('toggle-list').addEventListener('click', function() {
    const photoListContainer = document.getElementById('photo-list-container');
    photoListContainer.classList.toggle('show');
});