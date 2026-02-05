const data = {
  "Shop by Age": {
    desc: "Choose books by your child’s age",
    books: [
      {
        title: "My First Words Book",
        age: "1–3 years",
        skill: "Vocabulary, Observation",
        tiktok: true,
        link: "https://tiktok.com/your-link-1"
      }
    ]
  },

  "Story Books": {
    desc: "Fun & meaningful stories for kids",
    books: [
      {
        title: "Bedtime Animal Stories",
        age: "4–6 years",
        skill: "Reading, Imagination",
        tiktok: false,
        link: "https://tiktok.com/your-link-2"
      }
    ]
  },

  "Activity & Practice": {
    desc: "Hands-on learning through activities",
    books: [
      {
        title: "Tracing & Coloring Book",
        age: "3–5 years",
        skill: "Handwriting, Focus",
        tiktok: true,
        link: "https://tiktok.com/your-link-3"
      }
    ]
  },

  "Alphabet & Phonics": {
    desc: "Learn ABC and reading sounds",
    books: [
      {
        title: "ABC Phonics Workbook",
        age: "4–6 years",
        skill: "Phonics, Early Reading",
        tiktok: true,
        link: "https://tiktok.com/your-link-4"
      }
    ]
  },

  "Numbers & Math": {
    desc: "Build early math confidence",
    books: [
      {
        title: "Fun Numbers Workbook",
        age: "5–7 years",
        skill: "Counting, Logic",
        tiktok: false,
        link: "https://tiktok.com/your-link-5"
      }
    ]
  },

  "Language Books": {
    desc: "English, BM & bilingual books",
    books: [
      {
        title: "BM–English Picture Dictionary",
        age: "4–7 years",
        skill: "Language, Vocabulary",
        tiktok: true,
        link: "https://tiktok.com/your-link-6"
      }
    ]
  },

  "TikTok Favorites": {
    desc: "Popular books seen on TikTok",
    books: [
      {
        title: "Viral Preschool Learning Set",
        age: "3–6 years",
        skill: "All-in-one Learning",
        tiktok: true,
        link: "https://tiktok.com/your-link-7"
      }
    ]
  },

  "Book Sets": {
    desc: "Value bundles & learning packs",
    books: [
      {
        title: "Preschool Starter Pack (5 Books)",
        age: "3–5 years",
        skill: "Reading, Writing, Math",
        tiktok: false,
        link: "https://tiktok.com/your-link-8"
      }
    ]
  }
};

const app = document.getElementById("app");

function showCategories() {
  app.innerHTML = "";
  Object.keys(data).forEach(category => {
    const div = document.createElement("div");
    div.className = "category";
    div.innerHTML = `
      <div class="category-title">${category}</div>
      <div class="category-sub">${data[category].desc}</div>
    `;
    div.onclick = () => showBooks(category);
    app.appendChild(div);
  });
}

function showBooks(category) {
  app.innerHTML = "";

  const back = document.createElement("div");
  back.className = "back";
  back.textContent = "← Back to categories";
  back.onclick = showCategories;
  app.appendChild(back);

  data[category].books.forEach(book => {
    const div = document.createElement("div");
    div.className = "book";
    div.innerHTML = `
      ${book.tiktok ? `<div class="badge">As seen on TikTok</div>` : ""}
      <div class="book-title">${book.title}</div>
      <div class="meta">👶 Age: ${book.age}</div>
      <div class="meta">🧠 Skill: ${book.skill}</div>
      <a href="${book.link}" target="_blank">Buy on TikTok</a>
    `;
    app.appendChild(div);
  });
}

showCategories();
