const totalPages = 100; // Change this value to your total number of pages
let currentPage = 10; // Change this value to the current active page

// Function to generate pagination dynamically
function generatePagination() {
  const paginationElement = document.querySelector(".catalog-pagination");
  paginationElement.innerHTML = ""; // Clear previous pagination items

  // Previous arrow
  const previous = document.createElement("li");
  previous.classList.add("page-item");
  if (currentPage === 1) {
    previous.classList.add("disabled");
  }
  previous.innerHTML = `<a class="page-link"><img src="../src/img/icons/arrow_left.svg" alt="arrow_left" /></a>`;
  previous.classList.add("previous-arrow");
  paginationElement.appendChild(previous);

  // First page
  const firstPage = document.createElement("li");
  firstPage.classList.add("page-item");
  if (currentPage === 1) {
    firstPage.classList.add("active");
  }
  firstPage.innerHTML = `<a class="page-link">1</a>`;
  paginationElement.appendChild(firstPage);

  if (totalPages <= 6) {
    for (let i = 2; i <= totalPages - 1; i++) {
      const page = document.createElement("li");
      page.classList.add("page-item");
      if (i === currentPage) {
        page.classList.add("active");
      }
      page.innerHTML = `<a class="page-link">${i}</a>`;
      paginationElement.appendChild(page);
    }
  } else {
    // First ellipsis
    if (window.innerWidth < 768) {
      if (currentPage > 3) {
        const firstEllipsis = document.createElement("li");
        firstEllipsis.classList.add("page-item");
        firstEllipsis.innerHTML = `<span >...</span>`;
        paginationElement.appendChild(firstEllipsis);
      }
    } else {
      if (currentPage > 4) {
        const firstEllipsis = document.createElement("li");
        firstEllipsis.classList.add("page-item");
        firstEllipsis.innerHTML = `<span >...</span>`;
        paginationElement.appendChild(firstEllipsis);
      }
    }

    // Middle pages
    let startPage = Math.max(2, currentPage - 2);
    let endPage = Math.min(currentPage + 2, totalPages - 1);

    // Handle special cases for the number of pages to display on the left and right of the current page
    if (window.innerWidth < 768) {
      if (currentPage === 1) {
        endPage = Math.min(currentPage + 2, totalPages);
      } else if (currentPage === 2) {
        endPage = Math.min(currentPage + 1, totalPages);
      } else if (currentPage === totalPages) {
        startPage = Math.max(2, totalPages - 2);
      } else if (currentPage === totalPages - 1) {
        startPage = Math.max(2, totalPages - 2);
      } else if (currentPage === totalPages - 3) {
        startPage = currentPage - 1;
        endPage = currentPage + 1;
      } else {
        startPage = currentPage - 1;
        endPage = currentPage + 1;
      }
    } else {
      if (currentPage === 1) {
        endPage = Math.min(currentPage + 4, totalPages);
      } else if (currentPage === 2) {
        endPage = Math.min(currentPage + 3, totalPages);
      } else if (currentPage === totalPages) {
        startPage = Math.max(2, totalPages - 4);
      } else if (currentPage === totalPages - 1) {
        startPage = Math.max(2, totalPages - 4);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      const page = document.createElement("li");
      page.classList.add("page-item");
      if (i === currentPage) {
        page.classList.add("active");
      }
      page.innerHTML = `<a class="page-link">${i}</a>`;
      paginationElement.appendChild(page);
    }

    // Last ellipsis
    if (window.innerWidth < 768) {
      if (currentPage < totalPages - 2) {
        const lastEllipsis = document.createElement("li");
        lastEllipsis.classList.add("page-item");
        lastEllipsis.innerHTML = `<span >...</span>`;
        paginationElement.appendChild(lastEllipsis);
      }
    } else {
      if (currentPage < totalPages - 3) {
        const lastEllipsis = document.createElement("li");
        lastEllipsis.classList.add("page-item");
        lastEllipsis.innerHTML = `<span >...</span>`;
        paginationElement.appendChild(lastEllipsis);
      }
    }
  }

  // Last page
  const lastPage = document.createElement("li");
  lastPage.classList.add("page-item");
  if (currentPage === totalPages) {
    lastPage.classList.add("active");
  }
  lastPage.innerHTML = `<a class="page-link">${totalPages}</a>`;
  paginationElement.appendChild(lastPage);

  // Next arrow
  const next = document.createElement("li");
  next.classList.add("page-item");
  if (currentPage === totalPages) {
    next.classList.add("disabled");
  }
  next.innerHTML = `<a class="page-link"><img src="../src/img/icons/arrow_right.svg" alt="arrow_right" /></a>`;
  next.classList.add("next-arrow");
  paginationElement.appendChild(next);
}

// Call the function to generate pagination
generatePagination();

window.addEventListener("resize", generatePagination);
