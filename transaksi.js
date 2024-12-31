document.getElementById("transactionForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Mengambil data form
    const transactionName = document.getElementById("transactionName").value;
    const amount = document.getElementById("amount").value;
    const category = document.getElementById("category").value;
  
    // Membuat elemen baru dalam tabel
    const table = document.getElementById("transactionTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();
  
    // Menambahkan data ke dalam row
    newRow.innerHTML = `
      <td>${transactionName}</td>
      <td>${amount}</td>
      <td>${category}</td>
    `;
  
    // Reset form
    document.getElementById("transactionForm").reset();
  });