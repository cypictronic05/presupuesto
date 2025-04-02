let total = 0;
let remaining = 0;

function setTotal() {
  const input = document.getElementById('totalInput');
  total = parseFloat(input.value) || 0;
  remaining = total;
  updateRemaining();
  document.getElementById('itemList').innerHTML = ''; // Reset list
}

function addItem() {
  const input = document.getElementById('itemInput');
  const amount = parseFloat(input.value);

  if (isNaN(amount) || amount <= 0) {
    alert("Ingresa un monto válido");
    return;
  }

  if (amount > remaining) {
    alert("No tienes suficiente presupuesto");
    return;
  }

  remaining -= amount;
  updateRemaining();

  const li = document.createElement('li');
  li.textContent = `Artículo: S/ ${amount.toFixed(2)}`;
  document.getElementById('itemList').appendChild(li);

  input.value = '';
}

function updateRemaining() {
  document.getElementById('remaining').textContent = `S/ ${remaining.toFixed(2)}`;
}
