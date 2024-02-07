function addRow() {
    var newRow = document.getElementById("myTable").insertRow();
    for (var i = 0; i < 3; i++) {
        newRow.insertCell().textContent = "New Row";
    }
}

function addColumn() {
    var table = document.getElementById("myTable");
    for (var i = 0; i < table.rows.length; i++) {
        table.rows[i].insertCell().textContent = "New Column";
    }
}

function deleteRow() {
    var table = document.getElementById("myTable");
    if (table.rows.length > 1) {
        table.deleteRow(-1);
    }
}

function deleteColumn() {
    var table = document.getElementById("myTable");
    var rowCount = table.rows.length;
    var columnCount = table.rows[0].cells.length;
    if (columnCount > 1) {
        for (var i = 0; i < rowCount; i++) {
            table.rows[i].deleteCell(-1);
        }
    }
}