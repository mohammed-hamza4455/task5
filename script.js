const API_BASE = 'https://dummyjson.com';

// Fetch and display all sections
document.addEventListener("DOMContentLoaded", () => {
  loadUsers();
  loadTodos();
  loadProducts();
  loadQuotes();
});

async function loadUsers() {
  try {
    const res = await fetch(`${API_BASE}/users`);
    const data = await res.json();
    const users = data.users;
    const usersContainer = document.getElementById('users');

    users.forEach(user => {
      usersContainer.innerHTML += `
        <div class="col">
          <div class="card h-100">
            <img src="${user.image}" class="card-img-top" alt="${user.firstName}">
            <div class="card-body">
              <h5 class="card-title">${user.firstName} ${user.lastName}</h5>
              <p class="card-text">${user.email}</p>
              <p class="card-text"><small class="text-muted">${user.phone}</small></p>
            </div>
          </div>
        </div>
      `;
    });
  } catch (err) {
    console.error("Error loading users", err);
  }
}

async function loadTodos() {
  try {
    const res = await fetch(`${API_BASE}/todos`);
    const data = await res.json();
    const todosList = document.getElementById('todos');

    data.todos.slice(0, 10).forEach(todo => {
      todosList.innerHTML += `
        <li class="list-group-item d-flex justify-content-between align-items-center">
          ${todo.todo}
          <span class="badge bg-${todo.completed ? 'success' : 'warning'}">${todo.completed ? 'Done' : 'Pending'}</span>
        </li>
      `;
    });
  } catch (err) {
    console.error("Error loading todos", err);
  }
}

async function loadProducts() {
  try {
    const res = await fetch(`${API_BASE}/products`);
    const data = await res.json();
    const products = data.products;
    const productsContainer = document.getElementById('products');

    products.slice(0, 8).forEach(product => {
      productsContainer.innerHTML += `
        <div class="col">
          <div class="card h-100">
            <img src="${product.thumbnail}" class="card-img-top" alt="${product.title}">
            <div class="card-body">
              <h5 class="card-title">${product.title}</h5>
              <p class="card-text">$${product.price}</p>
              <p class="card-text">${product.brand}</p>
            </div>
          </div>
        </div>
      `;
    });
  } catch (err) {
    console.error("Error loading products", err);
  }
}

async function loadQuotes() {
  try {
    const res = await fetch(`${API_BASE}/quotes`);
    const data = await res.json();
    const quotesList = document.getElementById('quotes');

    data.quotes.slice(0, 10).forEach(quote => {
      quotesList.innerHTML += `
        <li class="list-group-item">
          <blockquote class="blockquote mb-0">
            <p>${quote.quote}</p>
            <footer class="blockquote-footer">${quote.author}</footer>
          </blockquote>
        </li>
      `;
    });
  } catch (err) {
    console.error("Error loading quotes", err);
  }
}
