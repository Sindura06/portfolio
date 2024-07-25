'use strict';

// Sidebar Toggle for Mobile
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

// Social Image Hover Effect
document.querySelectorAll('.social-image').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.src = item.getAttribute('data-hover');
    });

    item.addEventListener('mouseout', () => {
        item.src = item.getAttribute('src').replace('-white', '');
    });
});

// Modal Functionality for Testimonials
const modalContainer = document.querySelector("[data-modal-container]");
const overlay = document.querySelector("[data-overlay]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");
const testimonialsItems = document.querySelectorAll("[data-testimonials-item]");

function toggleModal() {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
}

modalCloseBtn.addEventListener("click", toggleModal);
overlay.addEventListener("click", toggleModal);

testimonialsItems.forEach(item => {
    item.addEventListener("click", () => {
        const avatar = item.querySelector("[data-testimonials-avatar]");
        modalImg.src = avatar.src;
        modalImg.alt = avatar.alt;
        modalTitle.innerHTML = item.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = item.querySelector("[data-testimonials-text]").innerHTML;
        toggleModal();
    });
});

// Custom Select Dropdown for Portfolio Filter
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterItems = document.querySelectorAll("[data-filter-item]");
const filterBtns = document.querySelectorAll("[data-filter-btn]");
let lastClickedBtn = filterBtns[0];

select.addEventListener("click", () => {
    select.classList.toggle("active");
});

selectItems.forEach(item => {
    item.addEventListener("click", () => {
        const selectedValue = item.innerText.toLowerCase();
        selectValue.innerText = item.innerText;
        select.classList.remove("active");
        filterFunc(selectedValue);
    });
});

function filterFunc(selectedValue) {
    filterItems.forEach(item => {
        const categories = item.dataset.category.split(',').map(cat => cat.trim().toLowerCase());
        item.classList.toggle("active", selectedValue === "all" || categories.includes(selectedValue));
    });
}

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const selectedValue = btn.innerText.toLowerCase();
        selectValue.innerText = btn.innerText;
        filterFunc(selectedValue);
        lastClickedBtn.classList.remove("active");
        btn.classList.add("active");
        lastClickedBtn = btn;
    });
});

// Contact Form Validation
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

formInputs.forEach(input => {
    input.addEventListener("input", () => {
        formBtn.disabled = !form.checkValidity();
    });
});

// Page Navigation
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navigationLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
        pages.forEach((page, pageIndex) => {
            page.classList.toggle("active", pageIndex === index);
            navigationLinks[pageIndex].classList.toggle("active", pageIndex === index);
        });
        window.scrollTo(0, 0);
    });
});
