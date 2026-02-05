const data = {
  "Shop by Age": {
    desc: "Find books suitable for your child’s age",
    books: [
      {
        title: "Baby First Words",
        age: "1–2 years",
        skill: "Vocabulary, Visual Recognition",
        tiktok: true,
        link: "https://tiktok.com/your-link-1"
      },
      {
        title: "My First Tracing Lines",
        age: "2–3 years",
        skill: "Hand Control, Focus",
        tiktok: false,
        link: "https://tiktok.com/your-link-2"
      },
      {
        title: "Preschool Learning Workbook",
        age: "4–6 years",
        skill: "Reading, Writing, Math",
        tiktok: true,
        link: "https://tiktok.com/your-link-3"
      }
    ]
  },

  "Story Books": {
    desc: "Fun, colourful and meaningful stories",
    books: [
      {
        title: "Bedtime Animal Stories",
        age: "3–5 years",
        skill: "Listening, Imagination",
        tiktok: true,
        link: "https://tiktok.com/your-link-4"
      },
      {
        title: "Values & Moral Stories",
        age: "5–7 years",
        skill: "Character Building",
        tiktok: false,
        link: "https://tiktok.com/your-link-5"
      },
      {
        title: "Short Stories for Early Readers",
        age: "6–8 years",
        skill: "Reading Confidence",
        tiktok: true,
        link: "https://tiktok.com/your-link-6"
      }
    ]
  },

  "Activity & Practice": {
    desc: "Hands-on learning through fun activities",
    books: [
      {
        title: "Tracing & Coloring Book",
        age: "3–5 years",
        skill: "Handwriting, Creativity",
        tiktok: true,
        link: "https://tiktok.com/your-link-7"
      },
      {
        title: "Sticker Activity Book",
        age: "4–6 years",
        skill: "Focus, Coordination",
        tiktok: false,
        link: "https://tiktok.com/your-link-8"
      },
      {
        title: "Puzzle & Brain Games",
        age: "5–7 years",
        skill: "Problem Solving",
        tiktok: true,
        link: "https://tiktok.com/your-link-9"
      }
    ]
  },

  "Alphabet & Phonics": {
    desc: "Learn ABCs and phonics sounds",
    books: [
      {
        title: "ABC Tracing Book",
        age: "3–5 years",
        skill: "Letter Recognition",
        tiktok: true,
        link: "https://tiktok.com/your-link-10"
      },
      {
        title: "Phonics Reading Practice",
        age: "4–6 years",
        skill: "Early Reading",
        tiktok: true,
        link: "https://tiktok.com/your-link-11"
      },
      {
        title: "Sight Words Workbook",
        age: "5–7 years",
        skill: "Reading Fluency",
        tiktok: false,
        link: "https://tiktok.com/your-link-12"
      }
    ]
  },

  "Numbers & Math": {
    desc: "Build early numeracy skills",
    books: [
      {
        title: "Counting 1–20",
        age: "3–5 years",
        skill: "Counting, Number Sense",
        tiktok: true,
        link: "https://tiktok.com/your-link-13"
      },
      {
        title: "Basic Math Workbook",
        age: "5–7 years",
        skill: "Addition & Subtraction",
        tiktok: false,
        link: "https://tiktok.com/your-link-14"
      },
      {
        title: "Math Logic Puzzles",
        age: "7–9 years",
        skill: "Logical Thinking",
        tiktok: true,
        link: "https://tiktok.com/your-link-15"
      }
    ]
  },

  "Language Books": {
    desc: "English, BM & bilingual learning",
    books: [
      {
        title: "BM–English Picture Dictionary",
        age: "3–6 years",
        skill: "Vocabulary Building",
        tiktok: true,
        link: "https://tiktok.com/your-link-16"
      },
      {
        title: "English Reading Practice",
        age: "5–7 years",
        skill: "Reading Skills",
        tiktok: false,
        link: "https://tiktok.com/your-link-17"
      },
      {
        title: "Bilingual Story Book",
        age: "6–8 years",
        skill: "Language Exposure",
        tiktok: true,
        link: "https://tiktok.com/your-link-18"
      }
    ]
  },

  "TikTok Favorites": {
    desc: "Popular books featured on TikTok",
    books: [
      {
        title: "Viral Preschool Learning Set",
        age: "3–6 years",
        skill: "All-in-One Learning",
        tiktok: true,
        link: "https://tiktok.com/your-link-19"
      },
      {
        title: "Trending ABC Activity Book",
        age: "4–6 years",
        skill: "Alphabet Mastery",
        tiktok: true,
        link: "https://tiktok.com/your-link-20"
      }
    ]
  },

  "Book Sets": {
    desc: "Value packs & learning bundles",
    books: [
      {
        title: "Preschool Starter Pack (5 Books)",
        age: "3–5 years",
        skill: "Reading, Writing, Math",
        tiktok: false,
        link: "https://tiktok.com/your-link-21"
      },
      {
        title: "Early Reader Bundle (6 Books)",
        age: "5–7 years",
        skill: "Reading Confidence",
        tiktok: true,
        link: "https://tiktok.com/your-link-22"
      },
      {
        title: "Complete Learning Set",
        age: "4–7 years",
        skill: "Core Academic Skills",
        tiktok: false,
        link: "https://tiktok.com/your-link-23"
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
