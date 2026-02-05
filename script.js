const app = document.getElementById('app');

// Non-overlapping age buckets
const ageBuckets = [
  { min: 1, max: 3, label: "1–3 years" },
  { min: 4, max: 6, label: "4–6 years" },
  { min: 7, max: 9, label: "7–9 years" }
];

// --------- LOAD BOOK DATA FROM JSON ---------
let data = {};

async function loadData() {
  try {
    const response = await fetch('books.json');
    data = await response.json();
    showMainMenu();
  } catch (err) {
    app.innerHTML = `<p style="color:red;">Failed to load book data. Please check books.json</p>`;
    console.error(err);
  }
}

// --------- MAIN MENU: 2 Buttons ---------
function showMainMenu() {
  app.innerHTML = '';

  // Shop by Age
  const ageDiv = document.createElement('div');
  ageDiv.className = 'category shop-by-age';
  ageDiv.innerHTML = `
    <div class="category-title">Shop by Age</div>
    <div class="category-sub">Browse books by age group</div>
  `;
  ageDiv.onclick = showShopByAge;
  app.appendChild(ageDiv);

  // Shop by Categories
  const catDiv = document.createElement('div');
  catDiv.className = 'category shop-by-categories';
  catDiv.innerHTML = `
    <div class="category-title">Shop by Categories</div>
    <div class="category-sub">Browse books by type</div>
  `;
  catDiv.onclick = showCategories;
  app.appendChild(catDiv);
}

// --------- SHOW ALL CATEGORIES ---------
function showCategories() {
  app.innerHTML = '';

  const back = document.createElement('div');
  back.className = 'back';
  back.textContent = '← Back';
  back.onclick = showMainMenu;
  app.appendChild(back);

  // List all categories except Shop by Age
  const menu = Object.keys(data); // all categories from JSON

  menu.forEach(category => {
    const div = document.createElement('div');
    div.className = 'category';
    div.innerHTML = `
      <div class="category-title">${category}</div>
    `;
    div.onclick = () => showBooks(category);
    app.appendChild(div);
  });
}

// --------- SHOW BOOKS BY CATEGORY ---------
function showBooks(category) {
  app.innerHTML = '';

  const back = document.createElement('div');
  back.className = 'back';
  back.textContent = '← Back to categories';
  back.onclick = showCategories;
  app.appendChild(back);

  const sortedBooks = data[category].slice().sort((a,b) => new Date(b.dateAdded) - new Date(a.dateAdded));

  sortedBooks.forEach(book => {
    const div = document.createElement('div');
    div.className = 'book';
    const isNew = (new Date() - new Date(book.dateAdded)) / (1000*60*60*24) <= 30;
    div.innerHTML = `
      ${isNew ? `<div class="badge">New!</div>` : ""}
      <div class="book-title">${book.title}</div>
      <div class="meta">Age: ${book.age} years</div>
      <div class="meta">Skill: ${book.skill}</div>
      <div class="meta">📅 Added: ${book.dateAdded}</div>
      <a href="${book.link}" target="_blank">Checkout & Buy on TikTok</a>
    `;
    app.appendChild(div);
  });
}

// --------- SHOP BY AGE ---------
function showShopByAge() {
  app.innerHTML = '';

  const back = document.createElement('div');
  back.className = 'back';
  back.textContent = '← Back';
  back.onclick = showMainMenu;
  app.appendChild(back);

  ageBuckets.forEach(bucket => {
    const booksContainer = document.createElement('div');
    booksContainer.className = 'age-books';

    const booksToShow = [];
    Object.values(data).forEach(categoryBooks => {
      categoryBooks.forEach(book => {
        const [bookMin, bookMax] = book.age.split('–').map(n => parseInt(n));
        if(!(bookMax < bucket.min || bookMin > bucket.max)){
          booksToShow.push(book);
        }
      });
    });

    booksToShow.sort((a,b) => new Date(b.dateAdded) - new Date(a.dateAdded));

    booksToShow.forEach(book => {
      const div = document.createElement('div');
      div.className = 'book';
      const isNew = (new Date() - new Date(book.dateAdded)) / (1000*60*60*24) <= 30;
      div.innerHTML = `
        ${isNew ? `<div class="badge">New!</div>` : ""}
        <div class="book-title">${book.title}</div>
        <div class="meta">Age: ${book.age} years</div>
        <div class="meta">Skill: ${book.skill}</div>
        <div class="meta">📅 Added: ${book.dateAdded}</div>
        <a href="${book.link}" target="_blank">Checkout & Buy on TikTok</a>
      `;
      booksContainer.appendChild(div);
    });

    if(booksContainer.childElementCount > 0){
      const ageSection = document.createElement('div');
      ageSection.className = 'age-section';

      const ageTitle = document.createElement('div');
      ageTitle.className = 'age-title';
      ageTitle.textContent = `${bucket.label}`;
      ageSection.appendChild(ageTitle);

      ageSection.appendChild(booksContainer);

      ageTitle.onclick = () => {
        const isVisible = booksContainer.style.display === 'block';
        booksContainer.style.display = isVisible ? 'none' : 'block';
      };

      app.appendChild(ageSection);
    }
  });
}

// --------- INIT ---------
loadData();
