// --------- DATA ---------
const data = {
  "Story Books": [
    { id: "story1", title: "Bedtime Animal Stories", age: "3–5", skill: "Listening & Imagination", tiktok: true, link: "https://tiktok.com/your-link-1" },
    { id: "story2", title: "Values & Moral Stories", age: "5–7", skill: "Character Building", tiktok: false, link: "https://tiktok.com/your-link-2" },
    { id: "story3", title: "Short Stories for Early Readers", age: "6–8", skill: "Reading Confidence", tiktok: true, link: "https://tiktok.com/your-link-3" }
  ],

  "Activity & Practice": [
    { id: "act1", title: "Tracing & Coloring Book", age: "3–5", skill: "Handwriting & Creativity", tiktok: true, link: "https://tiktok.com/your-link-4" },
    { id: "act2", title: "Sticker Activity Book", age: "4–6", skill: "Focus & Coordination", tiktok: false, link: "https://tiktok.com/your-link-5" },
    { id: "act3", title: "Puzzle & Brain Games", age: "5–7", skill: "Problem Solving", tiktok: true, link: "https://tiktok.com/your-link-6" }
  ],

  "Alphabet & Phonics": [
    { id: "alpha1", title: "ABC Tracing Book", age: "3–5", skill: "Letter Recognition", tiktok: true, link: "https://tiktok.com/your-link-7" },
    { id: "alpha2", title: "Phonics Reading Practice", age: "4–6", skill: "Early Reading", tiktok: true, link: "https://tiktok.com/your-link-8" },
    { id: "alpha3", title: "Sight Words Workbook", age: "5–7", skill: "Reading Fluency", tiktok: false, link: "https://tiktok.com/your-link-9" }
  ],

  "Numbers & Math": [
    { id: "math1", title: "Counting 1–20", age: "3–5", skill: "Counting & Number Sense", tiktok: true, link: "https://tiktok.com/your-link-10" },
    { id: "math2", title: "Basic Math Workbook", age: "5–7", skill: "Addition & Subtraction", tiktok: false, link: "https://tiktok.com/your-link-11" },
    { id: "math3", title: "Math Logic Puzzles", age: "7–9", skill: "Logical Thinking", tiktok: true, link: "https://tiktok.com/your-link-12" }
  ],

  "Language Books": [
    { id: "lang1", title: "BM–English Picture Dictionary", age: "3–6", skill: "Vocabulary Building", tiktok: true, link: "https://tiktok.com/your-link-13" },
    { id: "lang2", title: "English Reading Practice", age: "5–7", skill: "Reading Skills", tiktok: false, link: "https://tiktok.com/your-link-14" },
    { id: "lang3", title: "Bilingual Story Book", age: "6–8", skill: "Language Exposure", tiktok: true, link: "https://tiktok.com/your-link-15" }
  ],

  "TikTok Favorites": [
    { id: "fav1", title: "Viral Preschool Learning Set", age: "3–6", skill: "All-in-One Learning", tiktok: true, link: "https://tiktok.com/your-link-16" },
    { id: "fav2", title: "Trending ABC Activity Book", age: "4–6", skill: "Alphabet Mastery", tiktok: true, link: "https://tiktok.com/your-link-17" }
  ],

  "Book Sets": [
    { id: "set1", title: "Preschool Starter Pack (5 Books)", age: "3–5", skill: "Reading, Writing, Math", tiktok: false, link: "https://tiktok.com/your-link-18" },
    { id: "set2", title: "Early Reader Bundle (6 Books)", age: "5–7", skill: "Reading Confidence", tiktok: true, link: "https://tiktok.com/your-link-19" },
    { id: "set3", title: "Complete Learning Set", age: "4–7", skill: "Core Academic Skills", tiktok: false, link: "https://tiktok.com/your-link-20" }
  ]
};

// --------- APP ---------
const app = document.getElementById('app');

function showCategories() {
  app.innerHTML = '';
  const menu = ["Shop by Age","Story Books","Activity & Practice","Alphabet & Phonics","Numbers & Math","Language Books","TikTok Favorites","Book Sets"];

  menu.forEach(category => {
    const div = document.createElement('div');
    div.className = 'category';
    const desc = category === "Shop by Age" ? "Browse books for each age group" : "Explore our books";
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

// --------- SHOW BOOKS BY CATEGORY ---------
function showBooks(category) {
  app.innerHTML = '';

  const back = document.createElement('div');
  back.className = 'back';
  back.textContent = '← Back to categories';
  back.onclick = showCategories;
  app.appendChild(back);

  data[category].forEach(book => {
    const div = document.createElement('div');
    div.className = 'book';
    // ${book.tiktok ? `<div class="badge">As seen on TikTok</div>` : ""}
    div.innerHTML = `
      <div class="book-title">${book.title}</div>
      <div class="meta">👶 Age: ${book.age} years</div>
      <div class="meta">🧠 Skill: ${book.skill}</div>
      <a href="${book.link}" target="_blank">Buy on TikTok</a>
    `;
    app.appendChild(div);
  });
}

// --------- SHOP BY AGE WITH ACCORDION ---------
function showShopByAge() {
  app.innerHTML = '';

  const back = document.createElement('div');
  back.className = 'back';
  back.textContent = '← Back to categories';
  back.onclick = showCategories;
  app.appendChild(back);

  const ageMap = {};

  // Collect all books from all categories
  Object.values(data).forEach(categoryBooks => {
    categoryBooks.forEach(book => {
      if(!ageMap[book.age]){
        ageMap[book.age] = [];
      }
      ageMap[book.age].push(book);
    });
  });

  // Sort ages numerically
  const sortedAges = Object.keys(ageMap).sort((a,b)=>{
    const minA = parseInt(a.split('–')[0]);
    const minB = parseInt(b.split('–')[0]);
    return minA - minB;
  });

  sortedAges.forEach(age => {
    const ageSection = document.createElement('div');
    ageSection.className = 'age-section';

    const ageTitle = document.createElement('div');
    ageTitle.className = 'age-title';
    ageTitle.textContent = `👶 ${age} years`;
    ageSection.appendChild(ageTitle);

    const booksContainer = document.createElement('div');
    booksContainer.className = 'age-books';
    ageSection.appendChild(booksContainer);

    ageMap[age].forEach(book => {
      const div = document.createElement('div');
      div.className = 'book';
      div.innerHTML = `
        ${book.tiktok ? `<div class="badge">As seen on TikTok</div>` : ""}
        <div class="book-title">${book.title}</div>
        <div class="meta">🧠 Skill: ${book.skill}</div>
        <a href="${book.link}" target="_blank">Buy on TikTok</a>
      `;
      booksContainer.appendChild(div);
    });

    // Accordion toggle
    ageTitle.onclick = () => {
      const isVisible = booksContainer.style.display === 'block';
      booksContainer.style.display = isVisible ? 'none' : 'block';
    };

    app.appendChild(ageSection);
  });
}

// --------- INIT ---------
showCategories();
