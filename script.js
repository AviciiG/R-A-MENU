// Данные категорий и меню (эмуляция данных с сервера)
const categories = [
    { id: 1, name: "Appetizers" },
    { id: 2, name: "Main Dishes" },
    { id: 3, name: "Desserts" },
    { id: 4, name: "Beverages" }
];

const menuItems = {
    1: [
        { name: "Bruschetta", description: "Grilled bread with tomato, garlic, and basil." },
        { name: "Stuffed Mushrooms", description: "Mushrooms stuffed with cheese and herbs." }
    ],
    2: [
        { name: "Grilled Salmon", description: "Fresh salmon grilled to perfection." },
        { name: "Steak Frites", description: "Steak served with French fries." }
    ],
    3: [
        { name: "Chocolate Cake", description: "Rich chocolate cake with ganache." },
        { name: "Cheesecake", description: "Classic cheesecake with a graham cracker crust." }
    ],
    4: [
        { name: "Coffee", description: "Freshly brewed coffee." },
        { name: "Green Tea", description: "Organic green tea." }
    ]
};

// Функция для отображения категорий
function loadCategories() {
    const categoriesContainer = document.getElementById('categories');
    categories.forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'col-md-3 category';
        categoryDiv.innerText = category.name;
        categoryDiv.onclick = () => loadMenuItems(category.id);
        categoriesContainer.appendChild(categoryDiv);
    });
}

// Функция для отображения элементов меню по выбранной категории
function loadMenuItems(categoryId) {
    const menuItemsContainer = document.getElementById('menu-items');
    menuItemsContainer.innerHTML = ''; // Очистить предыдущее меню
    const items = menuItems[categoryId] || [];
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'col-md-6 menu-item';
        itemDiv.innerHTML = `<h4>${item.name}</h4><p>${item.description}</p>`;
        menuItemsContainer.appendChild(itemDiv);
    });
}

// Загрузка категорий при загрузке страницы
document.addEventListener('DOMContentLoaded', loadCategories);
