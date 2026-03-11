let orders = [];
let orderId = 1;

function createOrder() {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const service = document.getElementById("service").value;
  const items = document.getElementById("items").value.trim();
  const price = document.getElementById("price").value.trim();

  if (!name || !phone || !address || !items || !price) {
    alert("Please fill all fields before creating an order.");
    return;
  }

  const order = {
    id: orderId++,
    customer: name,
    phone,
    address,
    service,
    items,
    price,
    rider: "Unassigned"
  };

  orders.push(order);
  renderOrders();

  // Clear form
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("address").value = "";
  document.getElementById("items").value = "";
  document.getElementById("price").value = "";
  document.getElementById("service").selectedIndex = 0;
}

function renderOrders() {
  const tableBody = document.querySelector("#ordersTable tbody");
  tableBody.innerHTML = "";

  orders.forEach(order => {
    const row = document.createElement("tr");
    row.classList.add("border-b");

    row.innerHTML = `
      <td class="p-2">${order.id}</td>
      <td class="p-2">${order.customer}</td>
      <td class="p-2">${order.service}</td>
      <td class="p-2">${order.rider}</td>
      <td class="p-2">₹${order.price}</td>
    `;

    tableBody.appendChild(row);
  });
}