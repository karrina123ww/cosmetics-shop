document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  let currentSlide = 0;
    
  function showSlide(index) {
    // Скрываем все слайды
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
      
    // Показываем текущий слайд
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
  }
    
  function nextSlide() {
    let newIndex = currentSlide + 1;
    if (newIndex >= slides.length) {
      newIndex = 0;
    }
    showSlide(newIndex);
  }
   
  function prevSlide() {
    let newIndex = currentSlide - 1;
    if (newIndex < 0) {
      newIndex = slides.length - 1;
    }
    showSlide(newIndex);
  }
    
  // Обработчики для кнопок
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);
   
  // Обработчики для точек
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showSlide(index));
  });

  //Анимация при прокрутке
  const infoBlocks = document.querySelectorAll('.info-block');
  
  function checkBlocks() {
    infoBlocks.forEach(block => {
      const blockPosition = block.getBoundingClientRect().top;
      const screenPosition = window.innerHeight * 0.8;
      
      if(blockPosition < screenPosition) {
        block.classList.add('show');
      }
    });
  }
  
  window.addEventListener('scroll', checkBlocks);
  checkBlocks();
});

document.addEventListener('DOMContentLoaded', function() {
  // Данные продуктов
  const products = [
    {
      id: 1,
      title: "Очищающий гель для лица",
      category: "Уход за лицом",
      price: 1200,
      rating: 4.5,
      image: "https://pcdn.goldapple.ru/p/p/89270300016/web/696d674d61696e8dc83b9df9ee67efullhd.webp"
    },
    {
      id: 2,
      title: "Увлажняющий лосьон",
      category: "Уход за телом",
      price: 950,
      rating: 4.2,
      image: "https://img.freepik.com/free-photo/flat-lay-hydro-alcoholic-gel-with-bottle_23-2148775394.jpg"
    },
    {
      id: 3,
      title: "Натуральная помада",
      category: "Макияж",
      price: 1500,
      rating: 4.8,
      image: "https://img.freepik.com/free-photo/cosmetic-product-with-color-year-tones-3d-packaging_23-2151510148.jpg"
    },
    {
      id: 4,
      title: "Шампунь для объема",
      category: "Уход за волосами",
      price: 1800,
      rating: 4.7,
      image: "https://img.freepik.com/free-photo/flat-lay-hydro-alcoholic-gel-with-copy-space-bottle_23-2148775360.jpg"
    },
    {
      id: 5,
      title: "Тоник для лица",
      category: "Уход за лицом",
      price: 1350,
      rating: 4.3,
      image: "https://img.freepik.com/free-photo/beauty-cosmetics-product-with-soft-pink-tones_23-2151005559.jpg"
    },
    {
      id: 6,
      title: "Тушь для ресниц",
      category: "Макияж",
      price: 1100,
      rating: 4.0,
      image: "https://img.freepik.com/free-photo/makeup-cosmetics-presentation_23-2151928823.jpg"
    },
    {
      id: 7,
      title: "Масло для тела",
      category: "Уход за телом",
      price: 1600,
      rating: 4.6,
      image: "https://img.freepik.com/free-photo/organic-cosmetic-product-with-dreamy-aesthetic-fresh-background_23-2151382805.jpg"
    },
    {
      id: 8,
      title: "Ночной крем",
      category: "Уход за лицом",
      price: 2200,
      rating: 4.9,
      image: "https://img.freepik.com/free-photo/beauty-cosmetics-product-with-soft-pink-tones_23-2151005598.jpg"
    },
    {
      id: 9,
      title: "Дневной крем с SPF",
      category: "Уход за лицом",
      price: 1900,
      rating: 4.4,
      image: "https://img.freepik.com/free-photo/beauty-cosmetic-product-with-pink-tones_23-2151005565.jpg"
    },
    {
      id: 10,
      title: "Скраб для лица",
      category: "Уход за лицом",
      price: 1400,
      rating: 4.1,
      image: "https://img.freepik.com/free-photo/beauty-cosmetic-product-with-pink-tones_23-2151005568.jpg"
    },
    {
      id: 11,
      title: "Бальзам для губ",
      category: "Уход за лицом",
      price: 800,
      rating: 4.7,
      image: "https://img.freepik.com/free-photo/beauty-cosmetic-product-with-pink-tones_23-2151005571.jpg"
    },
    {
      id: 12,
      title: "Маска для волос",
      category: "Уход за волосами",
      price: 1700,
      rating: 4.5,
      image: "https://img.freepik.com/free-photo/beauty-cosmetic-product-with-pink-tones_23-2151005574.jpg"
    },
    {
      id: 13,
      title: "Гель для душа",
      category: "Уход за телом",
      price: 850,
      rating: 4.6,
      image: "https://img.freepik.com/free-photo/close-up-floating-water_23-2150963080.jpg?ga=GA1.1.1185304707.1750260383&semt=ais_hybrid&w=740"
    },
    {
      id: 14,
      title: "BB-крем",
      category: "Макияж",
      price: 1450,
      rating: 4.4,
      image: "https://img.freepik.com/free-photo/foundation-product-branding-still-life_23-2149665155.jpg?ga=GA1.1.1185304707.1750260383&semt=ais_hybrid&w=740"
    },
    {
      id: 15,
      title: "Сыворотка для роста ресниц",
      category: "Уход за лицом",
      price: 2100,
      rating: 4.8,
      image: "https://img.freepik.com/free-photo/elegant-red-serum-bottle-white-background_187299-47541.jpg?ga=GA1.1.1185304707.1750260383&semt=ais_hybrid&w=740"
    },
    {
      id: 16,
      title: "Сухой шампунь",
      category: "Уход за волосами",
      price: 1250,
      rating: 4.3,
      image: "https://img.freepik.com/free-photo/close-up-hand-holding-spray-bottle_23-2149380040.jpg?ga=GA1.1.1185304707.1750260383&semt=ais_hybrid&w=740"
    }
  ];

  // Элементы DOM
  const productsContainer = document.getElementById('products-container');
  const paginationContainer = document.getElementById('pagination');
  const searchInput = document.getElementById('search-input');
  const sortSelect = document.getElementById('sort-select');
  
  // Настройки пагинации
  const itemsPerPage = 8;
  let currentPage = 1;
  let filteredProducts = [...products];

  // Инициализация
  filterProducts();
  sortProducts();
  renderProducts();
  renderPagination();

  // Поиск продуктов
  searchInput.addEventListener('input', function() {
    currentPage = 1;
    filterProducts();
    sortProducts();
    renderProducts();
    renderPagination();
  });

  // Сортировка продуктов
  sortSelect.addEventListener('change', function() {
    currentPage = 1;
    sortProducts();
    renderProducts();
    renderPagination();
  });

  // Функция фильтрации
  function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
      filteredProducts = [...products];
    } else {
      filteredProducts = products.filter(product => 
        product.title.toLowerCase().includes(searchTerm)
      );
    }
  }

  // Функция сортировки
  function sortProducts() {
    const sortValue = sortSelect.value;
    
    filteredProducts.sort((a, b) => {
      switch(sortValue) {
        case 'price-asc': return a.price - b.price;
        case 'price-desc': return b.price - a.price;
        case 'rating': return b.rating - a.rating;
        default: return a.id - b.id;
      }
    });
  }

  // Рендер продуктов
  function renderProducts() {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const productsToShow = filteredProducts.slice(start, end);
    
    productsContainer.innerHTML = filteredProducts
      .slice(start, end)
      .map(product => `
        <div class="product-card" onclick="window.location.href='product-${product.id}.html'">
        <div class="product-image">
          <img src="${product.image}" alt="${product.title}">
        </div>
        <div class="product-info">
          <h3 class="product-title">${product.title}</h3>
          <span class="product-category">${product.category}</span>
          <div class="product-price">${formatPrice(product.price)} ₽</div>
          <div class="product-rating">${renderRating(product.rating)}</div>
          <button class="btn" onclick="event.stopPropagation()">В корзину</button>
        </div>
      </div>
    `).join('');
  }

  // Рендер пагинации
  function renderPagination() {
    const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);
    paginationContainer.innerHTML = '';
    
    if (pageCount <= 1) return;
    
    // Кнопка "Назад"
    if (currentPage > 1) {
      const prevBtn = document.createElement('button');
      prevBtn.className = 'page-btn';
      prevBtn.innerHTML = '&lt;';
      prevBtn.addEventListener('click', () => {
        currentPage--;
        renderProducts();
        renderPagination();
      });
      paginationContainer.appendChild(prevBtn);
    }
    
    // Нумерация страниц
    for (let i = 1; i <= pageCount; i++) {
      if (i === 1 || i === pageCount || Math.abs(currentPage - i) <= 2) {
        const btn = document.createElement('button');
        btn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
        btn.textContent = i;
        btn.addEventListener('click', () => {
          currentPage = i;
          renderProducts();
          renderPagination();
        });
        paginationContainer.appendChild(btn);
      } else if (paginationContainer.lastChild.textContent !== '...') {
        const ellipsis = document.createElement('span');
        ellipsis.textContent = '...';
        ellipsis.style.padding = '0 10px';
        paginationContainer.appendChild(ellipsis);
      }
    }
    
    // Кнопка "Вперед"
    if (currentPage < pageCount) {
      const nextBtn = document.createElement('button');
      nextBtn.className = 'page-btn';
      nextBtn.innerHTML = '&gt;';
      nextBtn.addEventListener('click', () => {
        currentPage++;
        renderProducts();
        renderPagination();
      });
      paginationContainer.appendChild(nextBtn);
    }
  }

  // Вспомогательные функции
  function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  function renderRating(rating) {
    const fullStars = Math.round(rating);
    const emptyStars = 5 - fullStars;
    
    return '★'.repeat(fullStars) + 
           '☆'.repeat(emptyStars) + 
           ` ${rating.toFixed(1)}`;
  }
});

// Простой скрипт для галереи изображений
document.addEventListener('DOMContentLoaded', function() {
  const mainImage = document.querySelector('.product-page-main-image');
  const thumbnails = document.querySelectorAll('.product-page-thumbnail');
  
  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function() {
      thumbnails.forEach(t => t.classList.remove('active'));
      this.classList.add('active');
      mainImage.src = this.src.replace('-thumb', '-main');
    });
  });
});

// Загружаем отзывы при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
  loadReviews();

  document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('userName').value;
    const text = document.getElementById('userReview').value;
    const rating = document.querySelector('input[name="rating"]:checked')?.value;
    
    if (!name || !text || !rating) {
      alert('Пожалуйста, заполните все поля и поставьте оценку!');
      return;
    }
    
    const review = {
      name: name,
      text: text,
      rating: rating,
      date: new Date().toLocaleDateString('ru-RU')
    };

    addReview(review);

    this.reset();

    document.querySelectorAll('input[name="rating"]').forEach(radio => {
      radio.checked = false;
    });
  });
});

// Функция добавления отзыва
function addReview(review) {
  let reviews = JSON.parse(localStorage.getItem('productReviews')) || [];

  reviews.push(review);

  localStorage.setItem('productReviews', JSON.stringify(reviews));

  loadReviews();

  updateAverageRating();
}

// Функция загрузки отзывов
function loadReviews() {
  const reviewsList = document.getElementById('reviews-list');
  reviewsList.innerHTML = '';
  
  const reviews = JSON.parse(localStorage.getItem('productReviews')) || [];
  
  if (reviews.length === 0) {
    reviewsList.innerHTML = '<p>Пока нет отзывов. Будьте первым!</p>';
  } else {
    reviews.forEach(function(review) {
      const reviewElement = document.createElement('div');
      reviewElement.className = 'review';
      reviewElement.innerHTML = `
        <p><strong>${review.name}</strong> (${review.date})</p>
        <div class="review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5-review.rating)}</div>
        <p>${review.text}</p>
      `;
      reviewsList.appendChild(reviewElement);
    });
  }
  updateAverageRating();
}

// Функция обновления среднего рейтинга
function updateAverageRating() {
  const reviews = JSON.parse(localStorage.getItem('productReviews')) || [];
  
  if (reviews.length > 0) {
    const total = reviews.reduce((sum, review) => sum + parseInt(review.rating), 0);
    const average = (total / reviews.length).toFixed(1);
    
    if (document.getElementById('average-rating')) {
      document.getElementById('average-rating').textContent = 
        `${'★'.repeat(Math.round(average))}${'☆'.repeat(5-Math.round(average))} ${average} (${reviews.length} отзывов)`;
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('feedbackForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const successMessage = document.getElementById('successMessage');

  // Валидация имени
  function validateName() {
    const nameValue = nameInput.value.trim();
    const nameRegex = /^[a-zA-Zа-яА-ЯёЁ\s]+$/;
    
    if (nameValue === '') {
      nameError.textContent = 'Пожалуйста, введите ваше имя';
      nameError.style.display = 'block';
      nameInput.classList.add('error-input');
      return false;
    } else if (!nameRegex.test(nameValue)) {
      nameError.textContent = 'Имя может содержать только буквы и пробелы';
      nameError.style.display = 'block';
      nameInput.classList.add('error-input');
      return false;
    } else {
      nameError.style.display = 'none';
      nameInput.classList.remove('error-input');
      return true;
    }
  }

  // Валидация email
  function validateEmail() {
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailValue === '') {
      emailError.textContent = 'Пожалуйста, введите ваш email';
      emailError.style.display = 'block';
      emailInput.classList.add('error-input');
      return false;
    } else if (!emailRegex.test(emailValue)) {
      emailError.textContent = 'Пожалуйста, введите корректный email';
      emailError.style.display = 'block';
      emailInput.classList.add('error-input');
      return false;
    } else {
      emailError.style.display = 'none';
      emailInput.classList.remove('error-input');
      return true;
    }
  }

  // Валидация сообщения
  function validateMessage() {
    const messageValue = messageInput.value.trim();
    
    if (messageValue === '') {
      messageError.textContent = 'Пожалуйста, введите ваше сообщение';
      messageError.style.display = 'block';
      messageInput.classList.add('error-input');
      return false;
    } else if (messageValue.length < 10) {
      messageError.textContent = 'Сообщение должно содержать не менее 10 символов';
      messageError.style.display = 'block';
      messageInput.classList.add('error-input');
      return false;
    } else {
      messageError.style.display = 'none';
      messageInput.classList.remove('error-input');
      return true;
    }
  }

  nameInput.addEventListener('input', validateName);
  emailInput.addEventListener('input', validateEmail);
  messageInput.addEventListener('input', validateMessage);

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();
    
    if (isNameValid && isEmailValid && isMessageValid) {

      successMessage.style.display = 'block';

      form.reset();

      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 5000);
    }
  });
});