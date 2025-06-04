// API endpoint for Ice and Fire book data
const url = "https://anapioficeandfire.com/api/books/";

// Target the output container and loader image
const app = document.querySelector("#books");
const loading = document.querySelector("#loading");

// Center books using JS in case styles fail or aren't enforced by Bootstrap
app.style.display = "flex";
app.style.flexDirection = "column";
app.style.alignItems = "center";

// Helper function to create and display book data
const addBookToDOM = (book) => {
  const card = document.createElement("div");
  card.classList.add("my-4");
  card.style.display = "flex";
  card.style.flexDirection = "column";
  card.style.alignItems = "center";

  const title = document.createElement("h4");
  title.textContent = book.name;

  const author = document.createElement("p");
  author.textContent = `by ${book.authors[0]}`;

  const year = document.createElement("p");
  year.textContent = book.released.slice(0, 4);

  const pages = document.createElement("p");
  pages.textContent = `${book.numberOfPages} pages`;

  card.append(title, author, year, pages);
  app.append(card);
};

// Fetch books and display after a minimum 1-second delay
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const books = await response.json();

    // Force spinner to stay for at least 1 second
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Remove the loading spinner
    if (loading) loading.remove();

    // Add each book to the DOM
    books.forEach(addBookToDOM);
  } catch (err) {
    console.error("Fetch failed:", err);
    const errorMsg = document.createElement("div");
    errorMsg.textContent = "Something went wrong while fetching books.";
    app.append(errorMsg);
  }
};

// Trigger the fetch on load
fetchData(url);
