 // get selected row
 // display selected row data in text input

const Mname = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const accountTotals = [];//other index: statatementsAccounts
const accountTotalsEOP = [];//other index: statatementsAccounts
const DebitList = [];//index transaction number
const CreditList = [];//index transaction number
const AmountList = [];//index transaction number
const DateList = [];//index transaction number
const DescriptionList = [];//index transaction number
const ClassList = [];//transaction class
const ReferenceList = [];//transaction reference
const SourceList = [];//transaction reference
var NumberOfTransactions = 0;
var PreviousRetained = 0;//when a period ends, we disregard the previous transactions also save the retainedEarnings while clearing NetProfit
var PreviousTrans=1;
for (let i=0;i<166;i++){//0-165 spaces for accounts
  accountTotals[i] = 0;
  accountTotalsEOP[i] = 0;
}
//console.log(accountTotalsEOP[10]+" "+ accountTotalsEOP[12] );
//console.log(accountTotals[10]+2);
//for (let i=0;i<250;i++){//250 spaces for transactions
//  AmountList[i] = 0;
//  CreditList[i] = " ";
//  DebitList[i] = " ";
//  DateList[i] = " "
//  DescriptionList[i] = " "
//}

var tableGJournal= document.getElementById("GeneralJournal"),rIndex,cIndex;

var indexC = document.getElementById("CurrentIndex");

var myrow = 1;
var mybackuprow = 1;
var editFlag = 0;//=1 when editing a transaction vs =0 new transation
  

 tableGJournal= document.getElementById("GeneralJournal");

    //Create the tableGJournalin js initially//////////////////////////
for (row = 0; row < 250; row++) {
    tr = document.createElement('tr');
    for (cell = 0; cell < 9; cell++) {
        td = document.createElement('td');

        tr.appendChild(td);
        if ( cell == 0){
          td.style.width = '20px';
          td.innerHTML = row;
        }
        if ( cell > 0){td.style.width = '60px';}
        if ( cell > 4){td.style.width = '200px';}
        if ( cell > 5){td.style.width = '40px';}
        //td.style.width = '80px';
        
    }
    tableGJournal.appendChild(tr);
}//Create the tableGJournalin js///end
tableGJournal.rows[0].cells[0].innerHTML = "Index";
tableGJournal.rows[0].cells[1].innerHTML = "Amount";
tableGJournal.rows[0].cells[2].innerHTML = "Debit";
tableGJournal.rows[0].cells[3].innerHTML = "Credit";
tableGJournal.rows[0].cells[4].innerHTML = "Date";
tableGJournal.rows[0].cells[5].innerHTML = "Description";
tableGJournal.rows[0].cells[6].innerHTML = "Class";
tableGJournal.rows[0].cells[7].innerHTML = "Reference";
tableGJournal.rows[0].cells[8].innerHTML = "Source";
//document.getElementById('GeneralJournal').appendChild(table);
//var firstColumn = document.getElementById('Index');
//firstColumn.style.width = '15%';

// tableGJournal.rows
            for(var i = 1; i < tableGJournal.rows.length; i++)
            {
                // row cells
                for(var j = 0; j < tableGJournal.rows[i].cells.length; j++)
                {
                    tableGJournal.rows[i].cells[j].onclick = function()
                    {
                        rIndex = this.parentElement.rowIndex;
                        cIndex = this.cellIndex+1;
                        if(cIndex == 9){
                          confirm("Here is your document! "+rIndex);
                        }else{
                          if(confirm("Click OK to edit transaction Index = " + rIndex +" or Cancel to continue with a new transaction at Index = " + myrow) == true){
        //clicked row is now the index
        mybackuprow = myrow;
        myrow = rIndex;//console.log(rIndex);
        editFlag = 1;//flag 1 is edit 0 is new
        document.getElementById("Amount").value = this.parentElement.cells[1].innerHTML;
        document.getElementById("Debit").value = this.parentElement.cells[2].innerHTML;
        document.getElementById("Credit").value = this.parentElement.cells[3].innerHTML;
        document.getElementById("Date").value = this.parentElement.cells[4].innerHTML;
        document.getElementById("Description").value = this.parentElement.cells[5].innerHTML;
      }
                        }
                    };//end of function has;
                }
            }

// edit the row in GJ
function myRow(pos){
  myrow = pos;
  indexC.innerHTML = "Index: " + myrow + " on ";
}
function editRow(load){
  //load 1 is loading from file
  if(load==1){
    document.getElementById("Debit").value = "Bank";
    document.getElementById("Credit").value = "Cash";
    document.getElementById("Amount").value = 1;
    document.getElementById("Description").value = ".";
    myrow = ij+1;
    //load = 0;
  }
  csv = document.getElementById("email").value;
  name = document.getElementById("password").value;
  let string2Hash = name+csv;
  let text22 = string2Hash.substring(0,8) + string2Hash.substring(8,11);
  console.log(text22);
    let csvMARS = hash(text22, false, 0);
    console.log(csvMARS);
  var testing = 0;
  if(document.getElementById("Debit").value == document.getElementById("Credit").value || document.getElementById("Debit").value =="" || document.getElementById("Credit").value==""){
    alert("Your debit account and credit account cannot be empty or be the same.");
    testing = 1;
  }
  if(document.getElementById("Description").value == ""){
    alert("Your description cannot be empty.");
    testing = 1;
  }
  if(document.getElementById("Amount").value <= 0){
    alert("Your amount must be positive!  1. Negative amounts in Asset accounts are entered as positive in the Credit column of the Asset account.  2. Negative amounts in the Income Statement accounts, Liabilities and Owner's Equity accounts are entered as positive in the Debit column of those accounts. ");
    testing = 1;
  }
  if(!marsDef.includes(csvMARS)){
    alert("Register your email on the form at : \n 'https://forms.gle/ezpegueioNh1e9Ly9' \n or use 'Guest' in the email field for basic access. Advanced topics are reserved for registered users.");
    testing = 1;
  }
  if(csvMARS.length < 5){
    alert("Your email is too short: ");
    csv = "No-user"
    testing = 1;
  }
  if(testing == 0){
    editRow4Real(0,myrow);
    //console.log(AmountList);
    //console.log(DebitList);
  }
}//testing conditions
function editRow4Real(load,ij)//stores the general Journal variables
{
    inputText = "Show **Debit Account Ledger(select an account in **Debit)";
    y.innerHTML = inputText;
   
  if(load==1){myrow=ij;}//loading a csv file to memory variables
  d1 = new Date();
if (typeof d1 === 'object' && d1 !== null && 'getDate' in d1) {
  var D31 = d1.getDate();
  var M12 = Mname[d1.getMonth()];
  var Y2000 = d1.getFullYear();
}//get date
//store the values flag=1 edits previous or flag=0 .push(new)
//myrow
  if(editFlag == 1 || load == 0)//1=edit 0=new transaction
  {
    AmountList[myrow] = document.getElementById("Amount").value*100;
    DebitList[myrow] = document.getElementById("Debit").value;
    CreditList[myrow] = document.getElementById("Credit").value;
    DateList[myrow] = D31+" " + M12 +" " + Y2000;
    DescriptionList[myrow] = document.getElementById("Description").value;
  }//end of add/edit transactions

    tableGJournal.rows[myrow].cells[1].innerHTML = Number(AmountList[myrow]/100).toFixed(2);
    tableGJournal.rows[myrow].cells[2].innerHTML = DebitList[myrow];
    tableGJournal.rows[myrow].cells[3].innerHTML = CreditList[myrow];
    tableGJournal.rows[myrow].cells[4].innerHTML = DateList[myrow];
    tableGJournal.rows[myrow].cells[5].innerHTML = DescriptionList[myrow];
    tableGJournal.rows[myrow].scrollIntoView({
    behavior: 'smooth',
    block: 'center'
});

  for (let i=0;i<166;i++){//reset/recalculate at every transaction change
  accountTotals[i] = 0;
  //accountTotalsEOP[i] = 0;
}//reset all totals

    
    document.getElementById("Amount").value = "";
    document.getElementById("Debit").value = "";
    document.getElementById("Credit").value = "";
    document.getElementById("Date").value = "";
    document.getElementById("Description").value = "";
    //console.log(AmountList[myrow]+ "editr4r:"+ myrow);
    myrow = parseInt(myrow) + 1;
    
    //console.log("unpdate: "+ myrow);
    //console.log(AmountList);
    updateStatements();
    updateTotals();
    
    //console.log(myrow);
    myrow2(myrow);
    
    indexC.innerHTML = "Index: " + parseInt(myrow) + " on ";
    if(editFlag == 1){
    editFlag = 0;
    myrow = mybackuprow;
  }

}//actual edit of web tableGJournal
// Update updateStatements
function updateStatements(){
  NumberOfTransactions = AmountList.length;
  if(DescriptionList.includes("End of Accounting Period")==true){
    PreviousTrans = DescriptionList.lastIndexOf("End of Accounting Period");
  }else{PreviousTrans=1;}//write the loop to recalculate everything
  //including the end of period. That way we can go to any Date
  //or index rather? and see the position at that time!!!!!!
  console.log(PreviousTrans + "End of APeriod");
  //console.log(AmountList);
  for (let t=1;t<NumberOfTransactions+1;t++){
    if(DescriptionList[t] == "End of Accounting Period"){endPeriodAccounts2();}else{
        for (let i=0;i<(B1.length);i++){ //accountTotals[B1[ig]] is used
    //B1 L1 O1 I1
    //console.log(statementsAccounts[B1[i]]);//correct
    //statementsAccounts is list of all accounts 1-165
        //console.log(accountTotalsEOP[65]+" "+ accountTotalsEOP[12] );
//console.log(accountTotals[165]+0+"twee");
    //if generaljournal(table) new debitAcc[2] == accountName
    // basically find the accountName in loop:       -^-
    //add value in BS totals(accountTotals[B1[i]]) & display in tableAssets[i]
      if(DebitList[t] == statementsAccounts[B1[i]]){//debit
      //accountTotals[B1[i]]= accountTotals[B1[i]] - accountTotalsEOP[B1[i]] + parseFloat(AmountList[t]);
      accountTotals[B1[i]]= accountTotals[B1[i]] + parseFloat(AmountList[t]);
      if(B1[i]>146){
        accountTotals[145]= accountTotals[145] + parseFloat(AmountList[t]);
        tableOE.rows[5].cells[2].innerHTML = Number((accountTotals[145])/100).toFixed(2);
      }
      updateTotals();
      updateTablesD(i,t);
      //console.log(accountTotals + " for debit");
      }
      if(CreditList[t] == statementsAccounts[B1[i]]){//credit
      //console.log(myrow);
      accountTotals[B1[i]]= accountTotals[B1[i]] - parseFloat(AmountList[t]); 
      if(B1[i]>146){
        accountTotals[145]= accountTotals[145] - parseFloat(AmountList[t]);
      }
      updateTotals();
      updateTablesC(i,t);
      //console.log(accountTotals + " for credit");
      }
      if(B1[i]>146){//Update IS totals!!!
      //place value in IS P&L ie tableIS from table
      var ii = i - O1L-1;
//'147':'Sales or Revenues','148':'Sales Returns','149':'COGS','150':'COGR','151':'Discounts Allowed', '152':'Discounts Recieved','153':'GROSS PROFIT','154':'FixedCost','154':'Other Income','155':'Other Expenses','156':'EBITDA','157':'Depreciation','158':'Amortisation','159':'EBIT','160':'Interest paid','161':'Interest received','162':'Interest Balance','163':'EBT','164':'Tax paid','165':'NET PROFIT'
        //accountTotals[153] = accountTotals[147] + accountTotals[149];
        //accountTotals[156] = accountTotals[153] + accountTotals[154];
        //accountTotals[159] = accountTotals[156] + accountTotals[157];
        //accountTotals[163] = accountTotals[159] + accountTotals[162];
        //accountTotals[165] = accountTotals[163] + accountTotals[164];
    }
  }//end of i
    }
  }//end of t (transactions)
}
function updateTablesD(i,t){
  //'128':'TOTAL LIABILITIES''137':'OWNER\'S EQUITY(inc.Retained)'
      console.log(statementsAccounts[B1[i]] + " in " + i )
      if(B1[i]>146){//1 total income i is income expense row in table!!!
      //place value in IS P&L ie tableIS from table
      var ii = i - O1L+1;
        //accountTotals[B1[i]] = accountTotals[B1[i]] + parseFloat(AmountList[t]);
        if(accountTotals[B1[i]]-accountTotalsEOP[B1[i]] > 0){
          tableIS.rows[ii].cells[1].innerHTML = Number((accountTotals[B1[i]] -accountTotalsEOP[B1[i]])/100).toFixed(2);
          tableIS.rows[ii].cells[2].innerHTML = "";
        }
        if(accountTotals[B1[i]]-accountTotalsEOP[B1[i]] < 0){
          tableIS.rows[ii].cells[1].innerHTML = "";
          tableIS.rows[ii].cells[2].innerHTML = Number((-accountTotals[B1[i]] +accountTotalsEOP[B1[i]])/100).toFixed(2);
        }
        if(accountTotals[B1[i]]-accountTotalsEOP[B1[i]] == 0){
          tableIS.rows[ii].cells[1].innerHTML = "";
          tableIS.rows[ii].cells[2].innerHTML = "";
        }
      }
      if(B1[i]<18){//1 total assests 2 current assets<17 i is asset row!!!
      //place value in assets ie tableAssets from table
        accountTotals[1] = accountTotals[1] + parseFloat(AmountList[t]);
       
        if(accountTotals[B1[i]] > 0){//has lots of empty accounts vs i
          tableAssets.rows[i].cells[1].innerHTML = Number(accountTotals[B1[i]]/100).toFixed(2);
          tableAssets.rows[i].cells[2].innerHTML = "";
        }
        if(accountTotals[B1[i]] < 0){
          tableAssets.rows[i].cells[1].innerHTML = "";
          tableAssets.rows[i].cells[2].innerHTML = Number(-accountTotals[B1[i]]/100).toFixed(2);
        }
        if(accountTotals[B1[i]] == 0){
          tableAssets.rows[i].cells[1].innerHTML = "";
          tableAssets.rows[i].cells[2].innerHTML = "";
        }
      }
      if(B1[i]>17 && B1[i]<100){//1 assets 2 noncurrent assets i is asset row in tableAssets!!!
      //place value in assets ie tableAssets from table
        accountTotals[18] = accountTotals[18] + parseFloat(AmountList[t]);
        
        if(accountTotals[B1[i]] > 0){//has lots of empty accounts vs i
          tableAssets.rows[i].cells[1].innerHTML = Number(accountTotals[B1[i]]/100).toFixed(2);
          tableAssets.rows[i].cells[2].innerHTML = "";
        }
        if(accountTotals[B1[i]] < 0){
          tableAssets.rows[i].cells[1].innerHTML = "";
          tableAssets.rows[i].cells[2].innerHTML = Number(-accountTotals[B1[i]]/100).toFixed(2);
        }
        if(accountTotals[B1[i]] == 0){
          tableAssets.rows[i].cells[1].innerHTML = "";
          tableAssets.rows[i].cells[2].innerHTML = "";
        }
      }
      if(B1[i]>99 && B1[i]<134){//128 total liabilities 129 current liabilities i is liab row in tableLiab!!!
      //place value in liab ii ie tableLiab from table
      var ii = i - B10L;
      console.log(ii+" "+B1[i]);
        accountTotals[129] = accountTotals[129] + parseFloat(AmountList[t]);
       
        if(accountTotals[B1[i]] > 0){//has lots of empty accounts vs i
          tableLiab.rows[ii].cells[1].innerHTML = Number(accountTotals[B1[i]]/100).toFixed(2);
          tableLiab.rows[ii].cells[2].innerHTML = "";
        }
        if(accountTotals[B1[i]] < 0){
          tableLiab.rows[ii].cells[1].innerHTML = "";
          tableLiab.rows[ii].cells[2].innerHTML = Number(-accountTotals[B1[i]]/100).toFixed(2);
        }
        if(accountTotals[B1[i]] == 0){
          tableLiab.rows[ii].cells[1].innerHTML = "";
          tableLiab.rows[ii].cells[2].innerHTML = "";
        }
      }
      if(B1[i]>133 && B1[i]<137){//liabilities noncurrent!!!
      //place value in assets ie tableAssets from table
      var ii = i - B10L;
        accountTotals[134] = accountTotals[134] + parseFloat(AmountList[t]);
       
        //console.log(parseFloat(tableGJournal.rows[myrow-1].cells[1].innerHTML));
        if(accountTotals[B1[i]] > 0){//has lots of empty accounts vs i
          tableLiab.rows[ii].cells[1].innerHTML = Number(accountTotals[B1[i]]/100).toFixed(2);
          tableLiab.rows[ii].cells[2].innerHTML = "";
        }
        if(accountTotals[B1[i]] < 0){
          //console.log(accountTotals[B1[i]] + " error?");
          tableLiab.rows[ii].cells[1].innerHTML = "";
          tableLiab.rows[ii].cells[2].innerHTML = Number(-accountTotals[B1[i]]/100).toFixed(2);
        }
        if(accountTotals[B1[i]] == 0){
          tableLiab.rows[ii].cells[1].innerHTML = "";
          tableLiab.rows[ii].cells[2].innerHTML = "";
        }
      }
      if(B1[i]>138 && B1[i]<144){// 138 Capital 145 RE in tableOE!!!
      //place value in assets ie tableOE from table
      var ii = i - L1L;
      accountTotals[138] = accountTotals[138] + parseFloat(AmountList[t]);
        if(accountTotals[B1[i]] > 0){//has lots of empty accounts vs i
          tableOE.rows[ii].cells[1].innerHTML = Number(accountTotals[B1[i]]/100).toFixed(2);
          tableOE.rows[ii].cells[2].innerHTML = "";
        }
        if(accountTotals[B1[i]] < 0){
          tableOE.rows[ii].cells[1].innerHTML = "";
          tableOE.rows[ii].cells[2].innerHTML = Number(-accountTotals[B1[i]]/100).toFixed(2);
        }
        if(accountTotals[B1[i]] == 0){
          tableOE.rows[ii].cells[1].innerHTML = "";
          tableOE.rows[ii].cells[2].innerHTML = "";
        }
      }
      if(B1[i]>143 && B1[i]<147){//145 retained Earnings & 146 l+OE in tableOE!!!
      //place value in assets ie tableAssets from table
      var ii = i - L1L;
        
        if(accountTotals[B1[i]] > 0){//has lots of empty accounts vs i
          tableOE.rows[ii].cells[1].innerHTML = Number(accountTotals[B1[i]]/100).toFixed(2);
          tableOE.rows[ii].cells[2].innerHTML = "";
        }
        if(accountTotals[B1[i]] < 0){
          tableOE.rows[ii].cells[1].innerHTML = "";
          tableOE.rows[ii].cells[2].innerHTML = Number(-accountTotals[B1[i]]/100).toFixed(2);
        }
        if(accountTotals[B1[i]] == 0){
          tableOE.rows[ii].cells[1].innerHTML = "";
          tableOE.rows[ii].cells[2].innerHTML = "";
        }
      }
    }//end of Debit
function updateTablesC(i,t){
      //console.log(statementsAccounts[B1[i]] + " in " + i )
      if(B1[i]>146){//1 total income i is income expense row in tableIS!!!
      //place value in IS P&L ie tableIS from table
      var ii = i - O1L+1;
        //accountTotals[B1[i]] = accountTotals[B1[i]] - parseFloat(AmountList[t]);
        if(accountTotals[B1[i]]-accountTotalsEOP[B1[i]] > 0){//has lots of empty accounts vs i
          tableIS.rows[ii].cells[1].innerHTML = Number((accountTotals[B1[i]] -accountTotalsEOP[B1[i]])/100).toFixed(2);
          tableIS.rows[ii].cells[2].innerHTML = "";
        }
        if(accountTotals[B1[i]]-accountTotalsEOP[B1[i]] < 0){
          tableIS.rows[ii].cells[1].innerHTML = "";
          tableIS.rows[ii].cells[2].innerHTML = Number((-accountTotals[B1[i]] +accountTotalsEOP[B1[i]])/100).toFixed(2);
        }
        if(accountTotals[B1[i]]-accountTotalsEOP[B1[i]] == 0){
          tableIS.rows[ii].cells[1].innerHTML = "";
          tableIS.rows[ii].cells[2].innerHTML = "";
        }
      }
      if(B1[i]<18){//1 total assests 2 current assets<17 i is asset row!!!
      //place value in assets ie tableAssets from table
        accountTotals[1] = accountTotals[1] - parseFloat(AmountList[t]);
        if(accountTotals[B1[i]] > 0){//has lots of empty accounts vs i
          tableAssets.rows[i].cells[1].innerHTML = Number(accountTotals[B1[i]]/100).toFixed(2);
          tableAssets.rows[i].cells[2].innerHTML = "";
        }
        if(accountTotals[B1[i]] < 0){
          tableAssets.rows[i].cells[1].innerHTML = "";
          tableAssets.rows[i].cells[2].innerHTML = Number(-accountTotals[B1[i]]/100).toFixed(2);
        }
        if(accountTotals[B1[i]] == 0){
          tableAssets.rows[i].cells[1].innerHTML = "";
          tableAssets.rows[i].cells[2].innerHTML = "";
        }
      }
      if(B1[i]>17 && B1[i]<100){//1 assets 2 noncurrent assets i is asset row in tableAssets!!!
      //place value in assets ie tableAssets from table
        accountTotals[18] = accountTotals[18] - parseFloat(AmountList[t]);
        
        if(accountTotals[B1[i]] > 0){//has lots of empty accounts vs i
          tableAssets.rows[i].cells[1].innerHTML = Number(accountTotals[B1[i]]/100).toFixed(2);
          tableAssets.rows[i].cells[2].innerHTML = "";
        }
        if(accountTotals[B1[i]] < 0){
          tableAssets.rows[i].cells[1].innerHTML = "";
          tableAssets.rows[i].cells[2].innerHTML = Number(-accountTotals[B1[i]]/100).toFixed(2);
        }
        if(accountTotals[B1[i]] == 0){
          tableAssets.rows[i].cells[1].innerHTML = "";
          tableAssets.rows[i].cells[2].innerHTML = "";
        }
      }
      if(B1[i]>99 && B1[i]<134){//128 total liabilities 129 current liabilities i is liab row in tableLiab!!!
      //place value in liab ii ie tableLiab from table
      var ii = i - B10L;
        accountTotals[129] = accountTotals[129] - parseFloat(AmountList[t]);
        
        if(accountTotals[B1[i]] > 0){//has lots of empty accounts vs i
          tableLiab.rows[ii].cells[1].innerHTML = Number(accountTotals[B1[i]]/100).toFixed(2);
          tableLiab.rows[ii].cells[2].innerHTML = "";
        }
        if(accountTotals[B1[i]] < 0){
          tableLiab.rows[ii].cells[1].innerHTML = "";
          tableLiab.rows[ii].cells[2].innerHTML = Number(-accountTotals[B1[i]]/100).toFixed(2);
        }
        if(accountTotals[B1[i]] == 0){
          tableLiab.rows[ii].cells[1].innerHTML = "";
          tableLiab.rows[ii].cells[2].innerHTML = "";
        }
      }
      if(B1[i]>133 && B1[i]<137){//liabilities noncurrent!!!
      //place value in assets ie tableAssets from table
      var ii = i - B10L;
        accountTotals[134] = accountTotals[134] - parseFloat(AmountList[t]);
        //console.log(parseFloat(tableGJournal.rows[myrow-1].cells[1].innerHTML));
        if(accountTotals[B1[i]] > 0){//has lots of empty accounts vs i
          tableLiab.rows[ii].cells[1].innerHTML = Number(accountTotals[B1[i]]/100).toFixed(2);
          tableLiab.rows[ii].cells[2].innerHTML = "";
        }
        if(accountTotals[B1[i]] < 0){
          //console.log(accountTotals[B1[i]] + " error?");
          tableLiab.rows[ii].cells[1].innerHTML = "";
          tableLiab.rows[ii].cells[2].innerHTML = Number(-accountTotals[B1[i]]/100).toFixed(2);
        }
        if(accountTotals[B1[i]] == 0){
          tableLiab.rows[ii].cells[1].innerHTML = "";
          tableLiab.rows[ii].cells[2].innerHTML = "";
        }
      }
      if(B1[i]>138 && B1[i]<144){//137 OE 138 Capital 146 l+OE in tableOE!!!
      //place value in assets ie tableOE from table
      var ii = i - L1L;
      accountTotals[138] = accountTotals[139] + accountTotals[140]; 
        if(accountTotals[B1[i]] > 0){//has lots of empty accounts vs i
          tableOE.rows[ii].cells[1].innerHTML = Number(accountTotals[B1[i]]/100).toFixed(2);
          tableOE.rows[ii].cells[2].innerHTML = "";
        }
        if(accountTotals[B1[i]] < 0){
          tableOE.rows[ii].cells[1].innerHTML = "";
          tableOE.rows[ii].cells[2].innerHTML = Number(-accountTotals[B1[i]]/100).toFixed(2);
        }
        if(accountTotals[B1[i]] == 0){
          tableOE.rows[ii].cells[1].innerHTML = "";
          tableOE.rows[ii].cells[2].innerHTML = "";
        }
      }
      if(B1[i]>143 && B1[i]<147){//145 retained Earnings & 146 l+OE in tableOE!!!
      //place value in assets ie tableAssets from table
      var ii = i - L1L;
        
        if(accountTotals[B1[i]] > 0){//has lots of empty accounts vs i
          tableOE.rows[ii].cells[1].innerHTML = Number(accountTotals[B1[i]]/100).toFixed(2);
          tableOE.rows[ii].cells[2].innerHTML = "";
        }
        if(accountTotals[B1[i]] < 0){
          tableOE.rows[ii].cells[1].innerHTML = "";
          tableOE.rows[ii].cells[2].innerHTML = Number(-accountTotals[B1[i]]/100).toFixed(2);
        }
        if(accountTotals[B1[i]] == 0){
          tableOE.rows[ii].cells[1].innerHTML = "";
          tableOE.rows[ii].cells[2].innerHTML = "";
        }
      }
      console.log(accountTotals[147]+" "+ accountTotals[149]);
    console.log(accountTotalsEOP[147]+" "+ accountTotalsEOP[149]);
    }//end of Credit

function updateTotals(){
      
  accountTotals[153] = accountTotals[147] + accountTotals[149];
        accountTotals[156] = accountTotals[153] + accountTotals[154];
        accountTotals[159] = accountTotals[156] + accountTotals[157];
        accountTotals[163] = accountTotals[159] + accountTotals[162];
        accountTotals[165] = accountTotals[163] + accountTotals[164];
        //accountTotals[145] = accountTotals[165]; 145 updates if IS updates
        accountTotals[138] = accountTotals[139] + accountTotals[140]; 
        accountTotals[137] = accountTotals[138]  + accountTotals[144] + accountTotals[145];
        accountTotals[128] = accountTotals[129] + accountTotals[134];
        accountTotals[146] = accountTotals[128] + accountTotals[137];
        accountTotals[0] = accountTotals[1] + accountTotals[18];
        
  
  tableIS.rows[13].cells[2].innerHTML = Number((-accountTotals[165] + accountTotalsEOP[165])/100).toFixed(2);

  tableIS.rows[6].cells[2].innerHTML = Number((-accountTotals[156] + accountTotalsEOP[156])/100).toFixed(2);
  tableIS.rows[8].cells[2].innerHTML = Number((-accountTotals[159] + accountTotalsEOP[159])/100).toFixed(2);
  tableIS.rows[3].cells[2].innerHTML = Number((-accountTotals[153] + accountTotalsEOP[153])/100).toFixed(2);
  tableIS.rows[11].cells[2].innerHTML = Number((-accountTotals[163] + accountTotalsEOP[163])/100).toFixed(2);
  tableAssets.rows[0].cells[1].innerHTML = Number(accountTotals[0]/100).toFixed(2);
    tableAssets.rows[1].cells[1].innerHTML = Number(accountTotals[1]/100).toFixed(2);
    tableAssets.rows[8].cells[1].innerHTML = Number(accountTotals[18]/100).toFixed(2);
    tableLiab.rows[0].cells[2].innerHTML = Number(-accountTotals[128]/100).toFixed(2);
    tableLiab.rows[1].cells[2].innerHTML = Number(-accountTotals[129]/100).toFixed(2);
    tableLiab.rows[6].cells[2].innerHTML = Number(-accountTotals[134]/100).toFixed(2);
    //tableLiab.rows[5].cells[2].innerHTML = -accountTotals[131]/100;
    //tableLiab.rows[4].cells[2].innerHTML = Number(-accountTotals[134]/100).toFixed(2);
    tableOE.rows[0].cells[2].innerHTML = Number(-accountTotals[137]/100).toFixed(2);
    tableOE.rows[1].cells[2].innerHTML = Number(-accountTotals[138]/100).toFixed(2);
    tableOE.rows[5].cells[2].innerHTML = Number(-accountTotals[146]/100).toFixed(2);
    tableOE.rows[4].cells[2].innerHTML = Number(-accountTotals[145]/100).toFixed(2);// + accountTotalsEOP[145];
    //var tableHeaderRowCount2 = 1;
//var led = document.getElementById('Ledger');
var rowCount5 = led.rows.length;
for (var i = 1; i < rowCount5; i++) {
    ledger.rows(i).innerHTML="";
}
}
function endPeriodAccounts(){//when user clicks the end-period-button
  //NumberOfTransactions = AmountList.length-PreviousTrans;//where used???
  PreviousTrans = myrow;
  //accountTotals[145] = accountTotals[145] - accountTotals[165];
  //accountTotals[165]= 0; 
  //tableIS.rows[13].cells[1].innerHTML = "";
  //tableIS.rows[13].cells[2].innerHTML = "";
  
  myrow = myrow + 1;
  //PreviousTrans = AmountList.length;
  
  //PreviousRetained = accountTotals[145];
 //'147':'Sales or Revenues','148':'Sales Returns','149':'COGS','150':'COGR','151':'Discounts Allowed', '152':'Discounts Recieved','153':'GROSS PROFIT','154':'FixedCost','154':'Other Income','155':'Other Expenses','156':'EBITDA','157':'Depreciation','158':'Amortisation','159':'EBIT','160':'Interest paid','161':'Interest received','162':'Interest Balance','163':'EBT','164':'Tax paid','166':'Dividends paid','165':'NET PROFIT'
  accountTotalsEOP[147] = accountTotals[147];
  //console.log(accountTotalsEOP[147]+" accountEOP147")
  accountTotalsEOP[148] = accountTotals[148];
  accountTotalsEOP[149] = accountTotals[149];
  accountTotalsEOP[150] = accountTotals[150];
  accountTotalsEOP[151] = accountTotals[151];
  accountTotalsEOP[152] = accountTotals[152];
  accountTotalsEOP[153] = accountTotals[153];//grossprofit
  accountTotalsEOP[154] = accountTotals[154];
  accountTotalsEOP[155] = accountTotals[155];
  accountTotalsEOP[156] = accountTotals[156];//'156':'EBITDA'
  accountTotalsEOP[157] = accountTotals[157];
  accountTotalsEOP[158] = accountTotals[158];
  accountTotalsEOP[159] = accountTotals[159];//'159':'EBIT'
  accountTotalsEOP[160] = accountTotals[160];
  accountTotalsEOP[161] = accountTotals[161];
  accountTotalsEOP[162] = accountTotals[162];
  accountTotalsEOP[163] = accountTotals[163];//'163':'EBT'
  accountTotalsEOP[164] = accountTotals[164];
  accountTotalsEOP[165] = accountTotals[165];
  accountTotalsEOP[166] = accountTotals[166];
  DebitList[PreviousTrans] = "---";
  
  CreditList[PreviousTrans]="---";
  AmountList[PreviousTrans]="---";//
  
  d1 = new Date();
if (typeof d1 === 'object' && d1 !== null && 'getDate' in d1) {
  var D31 = d1.getDate();
  var M12 = Mname[d1.getMonth()];
  var Y2000 = d1.getFullYear();
}//get date
    DateList[myrow] = D31+" " + M12 +" " + Y2000;
  DescriptionList[PreviousTrans] = "End of Accounting Period";
  tableGJournal.rows[PreviousTrans].cells[1].innerHTML = "---";
    tableGJournal.rows[PreviousTrans].cells[2].innerHTML = DebitList[PreviousTrans];
    tableGJournal.rows[PreviousTrans].cells[3].innerHTML = CreditList[PreviousTrans];
    tableGJournal.rows[PreviousTrans].cells[4].innerHTML = DateList[myrow];
    tableGJournal.rows[PreviousTrans].cells[5].innerHTML = DescriptionList[PreviousTrans];
  tableIS.rows[1].cells[1].innerHTML = "";
  tableIS.rows[1].cells[2].innerHTML = "";
  tableIS.rows[2].cells[1].innerHTML = "";
  tableIS.rows[2].cells[2].innerHTML = "";
  tableIS.rows[3].cells[1].innerHTML = "";
  tableIS.rows[3].cells[2].innerHTML = "";
  tableIS.rows[4].cells[1].innerHTML = "";
  tableIS.rows[4].cells[2].innerHTML = "";
  tableIS.rows[5].cells[1].innerHTML = "";
  tableIS.rows[5].cells[2].innerHTML = "";
  tableIS.rows[6].cells[1].innerHTML = "";
  tableIS.rows[6].cells[2].innerHTML = "";
  tableIS.rows[7].cells[1].innerHTML = "";
  tableIS.rows[7].cells[2].innerHTML = "";
  tableIS.rows[8].cells[1].innerHTML = "";
  tableIS.rows[8].cells[2].innerHTML = "";
  tableIS.rows[9].cells[1].innerHTML = "";
  tableIS.rows[9].cells[2].innerHTML = "";
  tableIS.rows[10].cells[1].innerHTML = "";
  tableIS.rows[10].cells[2].innerHTML = "";
  tableIS.rows[11].cells[1].innerHTML = "";
  tableIS.rows[11].cells[2].innerHTML = "";
  tableIS.rows[12].cells[1].innerHTML = "";
  tableIS.rows[12].cells[2].innerHTML = "";
  tableIS.rows[13].cells[1].innerHTML = "";
  tableIS.rows[13].cells[2].innerHTML = "";
  PreviousTrans = 1;
  console.log(accountTotals[145]+" RE "+ accountTotalsEOP[145]);
  console.log(accountTotals[147]+" "+ accountTotals[149]);
    console.log(accountTotalsEOP[147]+" "+ accountTotalsEOP[149]);
}
function endPeriodAccounts2(){//when going through the accounts.only IS accounts...
  //NumberOfTransactions = AmountList.length-PreviousTrans;//where used???
 
    accountTotalsEOP[147] = accountTotals[147];
  accountTotalsEOP[148] = accountTotals[148];
  accountTotalsEOP[149] = accountTotals[149];
  accountTotalsEOP[150] = accountTotals[150];
  accountTotalsEOP[151] = accountTotals[151];
  accountTotalsEOP[152] = accountTotals[152];
  accountTotalsEOP[153] = accountTotals[153];//grossprofit
  accountTotalsEOP[154] = accountTotals[154];
  accountTotalsEOP[155] = accountTotals[155];
  accountTotalsEOP[156] = accountTotals[156];//'156':'EBITDA'
  accountTotalsEOP[157] = accountTotals[157];
  accountTotalsEOP[158] = accountTotals[158];
  accountTotalsEOP[159] = accountTotals[159];//'159':'EBIT'
  accountTotalsEOP[160] = accountTotals[160];
  accountTotalsEOP[161] = accountTotals[161];
  accountTotalsEOP[162] = accountTotals[162];
  accountTotalsEOP[163] = accountTotals[163];//'163':'EBT'
  accountTotalsEOP[164] = accountTotals[164];
  accountTotalsEOP[165] = accountTotals[165];
  accountTotalsEOP[166] = accountTotals[166];
  tableIS.rows[1].cells[1].innerHTML = "";
  tableIS.rows[1].cells[2].innerHTML = "";
  tableIS.rows[2].cells[1].innerHTML = "";
  tableIS.rows[2].cells[2].innerHTML = "";
  tableIS.rows[3].cells[1].innerHTML = "";
  tableIS.rows[3].cells[2].innerHTML = "";
  tableIS.rows[4].cells[1].innerHTML = "";
  tableIS.rows[4].cells[2].innerHTML = "";
  tableIS.rows[5].cells[1].innerHTML = "";
  tableIS.rows[5].cells[2].innerHTML = "";
  tableIS.rows[6].cells[1].innerHTML = "";
  tableIS.rows[6].cells[2].innerHTML = "";
  tableIS.rows[7].cells[1].innerHTML = "";
  tableIS.rows[7].cells[2].innerHTML = "";
  tableIS.rows[8].cells[1].innerHTML = "";
  tableIS.rows[8].cells[2].innerHTML = "";
  tableIS.rows[9].cells[1].innerHTML = "";
  tableIS.rows[9].cells[2].innerHTML = "";
  tableIS.rows[10].cells[1].innerHTML = "";
  tableIS.rows[10].cells[2].innerHTML = "";
  tableIS.rows[11].cells[1].innerHTML = "";
  tableIS.rows[11].cells[2].innerHTML = "";
  tableIS.rows[12].cells[1].innerHTML = "";
  tableIS.rows[12].cells[2].innerHTML = "";
  tableIS.rows[13].cells[1].innerHTML = "";
  tableIS.rows[13].cells[2].innerHTML = "";
  PreviousTrans = 1;
}

//function assign(obj, props) {
//    for (var i = 0; i < props.length; i++) {
//        obj[props[i]] = 0;
//    }
//}
// Data Update tableGJournalHere
//function editTableDisplay(){
//    document.querySelector('.editTable').setAttribute('style', 'display: //block;')
//}

//Sandbox with old code
