// --------- DATA ---------
const data = {
  "Story Books": [
    { id: "story1", title: "Bedtime Animal Stories", age: "3–5", skill: "Listening & Imagination", tiktok: true, dateAdded: "2026-02-01", link: "https://tiktok.com/your-link-1" },
    { id: "story2", title: "Values & Moral Stories", age: "5–7", skill: "Character Building", tiktok: false, dateAdded: "2026-01-15", link: "https://tiktok.com/your-link-2" },
    { id: "story3", title: "Short Stories for Early Readers", age: "6–8", skill: "Reading Confidence", tiktok: true, dateAdded: "2026-01-28", link: "https://tiktok.com/your-link-3" }
  ],

  "Activity & Practice": [
    { id: "act1", title: "Tracing & Coloring Book", age: "3–5", skill: "Handwriting & Creativity", tiktok: true, dateAdded: "2026-02-02", link: "https://tiktok.com/your-link-4" },
    { id: "act2", title: "Sticker Activity Book", age: "4–6", skill: "Focus & Coordination", tiktok: false, dateAdded: "2026-01-18", link: "https://tiktok.com/your-link-5" },
    { id: "act3", title: "Puzzle & Brain Games", age: "5–7", skill: "Problem Solving", tiktok: true, dateAdded: "2026-01-22", link: "https://tiktok.com/your-link-6" }
  ],

  "Alphabet & Phonics": [
    { id: "alpha1", title: "ABC Tracing Book", age: "3–5", skill: "Letter Recognition", tiktok: true, dateAdded: "2026-02-03", link: "https://tiktok.com/your-link-7" },
    { id: "alpha2", title: "Phonics Reading Practice", age: "4–6", skill: "Early Reading", tiktok: true, dateAdded: "2026-01-20", link: "https://tiktok.com/your-link-8" },
    { id: "alpha3", title: "Sight Words Workbook", age: "5–7", skill: "Reading Fluency", tiktok: false, dateAdded: "2026-01-12", link: "https://tiktok.com/your-link-9" }
  ],

  "Numbers & Math": [
    { id: "math1", title: "Counting 1–20", age: "3–5", skill: "Counting & Number Sense", tiktok: true, dateAdded: "2026-02-04", link: "https://tiktok.com/your-link-10" },
    { id: "math2", title: "Basic Math Workbook", age: "5–7", skill: "Addition & Subtraction", tiktok: false, dateAdded: "2026-01-14", link: "https://tiktok.com/your-link-11" },
    { id: "math3", title: "Math Logic Puzzles", age: "7–9", skill: "Logical Thinking", tiktok: true, dateAdded: "2026-01-25", link: "https://tiktok.com/your-link-12" }
  ],

  "Language Books": [
    { id: "lang1", title: "BM–English Picture Dictionary", age: "3–6", skill: "Vocabulary Building", tiktok: true, dateAdded: "2026-02-01", link: "https://tiktok.com/your-link-13" },
    { id: "lang2", title: "English Reading Practice", age: "5–7", skill: "Reading Skills", tiktok: false, dateAdded: "2026-01-19", link: "https://tiktok.com/your-link-14" },
    { id: "lang3", title: "Bilingual Story Book", age: "6–8", skill: "Language Exposure", tiktok: true, dateAdded: "2026-01-26", link: "https://tiktok.com/your-link-15" }
  ],

  "TikTok Favorites": [
    { id: "fav1", title: "Viral Preschool Learning Set", age: "3–6", skill: "All-in-One Learning", tiktok: true, dateAdded: "2026-02-05", link: "https://tiktok.com/your-link-16" },
    { id: "fav2", title: "Trending ABC Activity Book", age: "4–6", skill: "Alphabet Mastery", tiktok: true, dateAdded: "2026-01-21", link: "https://tiktok.com/your-link-17" }
  ],

  "Book Sets": [
    { id: "set1", title: "Preschool Starter Pack (5 Books)", age: "3–5", skill: "Reading, Writing, Math", tiktok: false, dateAdded: "2026-01-17", link: "https://tiktok.com/your-link-18" },
    { id: "set2", title: "Early Reader Bundle (6 Books)", age: "5–7", skill: "Reading Confidence", tiktok: true, dateAdded: "2026-01-23", link: "https://tiktok.com/your-link-19" },
    { id: "set3", title: "Complete Learning Set", age: "4–7", skill: "Core Academic Skills", tiktok: false, dateAdded: "2026-01-13", link: "https://tiktok.com/your-link-20" }
  ]
};

// --------- APP ---------
const app = document.getElementById('app');

// --------- MAIN MENU ---------
function showCategories() {
  app.innerHTML = '';
  const menu = ["Shop by Age","Story Books","Activity & Practice","Alphabet & Phonics","Numbers & Math","Language Books","TikTok Favorites","Book Sets"];

  menu.forEach(category => {
    const div = document.createElement('div');
    div.className = 'category';
    const desc = category === "Shop by Age" ? "Browse books by age group" : "Explore our books";
    div.innerHTML = `
      <div class="category-title">${category}</div>
      <div class="category-sub">${desc}</div>
    `;

    if(category === "Shop by Age"){
      div.onclick = showShopByAge;
    } else {
      div.onclick = () => showBooks(category);
    }

    app.appendChild(div);
  });
}

// --------- SHOW BOOKS BY CATEGORY (sorted by dateAdded DESC) ---------
function showBooks(category) {
  app.innerHTML = '';

  const back = document.createElement('div');
  back.className = 'back';
  back.textContent = '← Back to categories';
  back.onclick = showCategories;
  app.appendChild(back);

  // Sort books newest first
  const sortedBooks = data[category].slice().sort((a,b) => new Date(b.dateAdded) - new Date(a.dateAdded));

  sortedBooks.forEach(book => {
    const div = document.createElement('div');
    div.className = 'book';
    const isNew = (new Date() - new Date(book.dateAdded)) / (1000*60*60*24) <= 30; // last 30 days
    div.innerHTML = `
      ${isNew ? `<div class="badge">New!</div>` : ""}
      <div class="book-title">${book.title}</div>
      <div class="meta">Age: ${book.age} years</div>
      <div class="meta">Skill: ${book.skill}</div>
      <div class="meta">📅 Added: ${book.dateAdded}</div>
      <a href="${book.link}" target="_blank">Buy on TikTok</a>
    `;
    app.appendChild(div);
  });
}

// --------- SHOP BY AGE WITH FIXED BUCKETS, SORTED BY DATE DESC ---------
const ageBuckets = [
  { min: 1, max: 3, label: "1–3 years" },
  { min: 4, max: 6, label: "4–6 years" },
  { min: 7, max: 9, label: "7–9 years" }
];

function showShopByAge() {
  app.innerHTML = '';

  const back = document.createElement('div');
  back.className = 'back';
  back.textContent = '← Back to categories';
  back.onclick = showCategories;
  app.appendChild(back);

  ageBuckets.forEach(bucket => {
    const booksContainer = document.createElement('div');
    booksContainer.className = 'age-books';

    // Collect books overlapping this bucket
    const booksToShow = [];
    Object.values(data).forEach(categoryBooks => {
      categoryBooks.forEach(book => {
        const [bookMin, bookMax] = book.age.split('–').map(n => parseInt(n));
        if(!(bookMax < bucket.min || bookMin > bucket.max)){
          booksToShow.push(book);
        }
      });
    });

    // Sort by dateAdded DESC
    booksToShow.sort((a,b) => new Date(b.dateAdded) - new Date(a.dateAdded));

    booksToShow.forEach(book => {
      const div = document.createElement('div');
      div.className = 'book';
      const isNew = (new Date() - new Date(book.dateAdded)) / (1000*60*60*24) <= 30;
      div.innerHTML = `
        ${isNew ? `<div class="badge">New!</div>` : ""}
        <div class="book-title">${book.title}</div>
        <div class="meta">Skill: ${book.skill}</div>
        <div class="meta">📅 Added: ${book.dateAdded}</div>
        <a href="${book.link}" target="_blank">Buy on TikTok</a>
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

      // Accordion toggle
      ageTitle.onclick = () => {
        const isVisible = booksContainer.style.display === 'block';
        booksContainer.style.display = isVisible ? 'none' : 'block';
      };

      app.appendChild(ageSection);
    }
  });
}

// --------- INIT ---------
showCategories();
