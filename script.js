const form = document.getElementById('studentForm');
const tableBody = document.getElementById('studentTableBody');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const grade = document.getElementById('grade').value;
    // Age restriction condition
    if (age < 6 || age > 30) {
        alert("Age must be between 6 and 30 years to add a student.");
        return; // Stops the form submission
    }

    // Add new row to the table
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${grade}</td>
        <td>
            <button onclick="deleteRow(this)">Delete</button>
            <button onclick="editRow(this)">Edit</button>
        </td>
    `;
    tableBody.appendChild(row);
    form.reset();
});

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.remove();
}

function editRow(button) {
    const row = button.parentNode.parentNode;
    const cells = row.querySelectorAll('td');
    document.getElementById('name').value = cells[0].innerText;
    document.getElementById('age').value = cells[1].innerText;
    document.getElementById('grade').value = cells[2].innerText;
    row.remove();
}
