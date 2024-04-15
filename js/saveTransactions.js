function saveTransactions(){
  var data = "Index,Amount,Debit,Credit,Date,Description,Class,Reference,Source" + "\n";
  for (rowsToSave = 1;rowsToSave<myrow;rowsToSave++ ){
    let amountText = table.rows[rowsToSave].cells[1].innerHTML;
    let amountText2 = amountText.replaceAll(" ","");
    console.log(amountText2);
    data = data + rowsToSave + "," + amountText2 + "," + table.rows[rowsToSave].cells[2].innerHTML + "," + table.rows[rowsToSave].cells[3].innerHTML + "," + table.rows[rowsToSave].cells[4].innerHTML + "," + table.rows[rowsToSave].cells[5].innerHTML + "," + table.rows[rowsToSave].cells[6].innerHTML+ "," + table.rows[rowsToSave].cells[7].innerHTML+ "," + table.rows[rowsToSave].cells[8].innerHTML+ "\n";
    console.log(data);
  }
//const dataString1 = Papa.stringify(data);
//const dataString = Papa.unparse(data);

const blob = new Blob([data], { type: 'text/csv;charset=utf-8' });
saveAs(blob, 'myfile.csv');
}