const accessKey = "PxGpttrnct-YWNrgl0YvWlnuD_JLl-C081Yc0oKljQc";
const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");
let keyword = "";
let page = 1;

async function searchImage() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    // Process and display the data
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchImage();
});

showMoreBtn.addEventListener("click", () => {
  page++;
  searchImage();
});
