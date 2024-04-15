// smaller than 100 debit+Credit- and larger than 100 
//debit-Credit+
let statementsAccounts={'1':'TOTAL ASSETS','2':'CURRENT ASSETS','3':'Cash','4':'Bank','5':'Prepaid Expenses','6':'Input VAT','7':'Payroll fund','8':'Dividend fund','9':'Tax fund','11':'Raw Material','12':'Raw Material 2','13':'WIP Inventory','14':'Trade Inventory','15':'Trade Inventory-2','16':'Accounts Receivable','17':'Allowance for doubtful accounts','18':'NON-CURRENT ASSETS','19':'Plant, Property and Equipment','20':'Land and Buildings','21':'Building','22':'Machinery, Vehicles and Equipment','23':'Vehicles','24':'Office Equipment','25':'Furniture and fixtures','26':'Accumulated depreciation','27':'Long-term loan to:','128':'TOTAL LIABILITIES','129':'CURRENT LIABILITIES','130':'Accounts Payable','131':'Vat & Tax Payable','132':'Dividends Payable','133':'Unearned Revenue(pre-paid revenue)','134':'NON-CURRENT LIABILITIES','135':'Long term loans','136':'Hire-Purchase','137':'OWNER\'S EQUITY(inc.Retained)','138':'CAPITAL','139':'Jamey','140':'Susan','141':'Jay','142':'Jack','143':'Jill','144':'Dividend to be paid','145':'Retained Earnings','146':'TOTAL LIABILITIES & OWNER\'S EQUITY','147':'Sales or Revenues','148':'Sales Returns','149':'COGS','150':'COGR','151':'Discounts Allowed', '152':'Discounts Recieved','153':'GROSS PROFIT','154':'Other Income','155':'Other Expenses','156':'EBITDA','157':'Depreciation','158':'Amortisation','159':'EBIT','160':'Interest paid','161':'Interest received','162':'Interest Balance','163':'EBT','164':'Tax','165':'NET PROFIT','166':'Dividends paid'};
//On the initial date when a dividend to shareholders is formally declared, the company's retained earnings account is debited for the dividend amount while the dividends payable account is credited by the same amount. Retained Earnings → Debited [Dt.] Dividends Payable → Credited [Cr.]
var B10 = [1,2, 4, 6,11, 13,14, 16, 18, 20, 22, 26];//assets
var B10L = B10.length;
//console.log(B10L + " length of array B10");
const L1 = [128,129,130,131,132,133,134,135];//liabilities
var L1L = L1.length +B10L;
const O1 = [137,138,139,140,145,146];//owner's equity
var O1L = O1.length +L1L;
const I1 = [147, 149, 153, 154, 155, 156, 157, 159, 160,161, 163, 164,165];
var I1L = I1.length +O1L;
const A1 = [4, 6,11,13, 14, 16, 18, 20, 22,  26,130,131,132,133,135,139,140,145,147,149,151,154,155,157, 160, 161, 164]
const B1 = B10.concat(L1,O1,I1);
var marsDef = [653780055,3919622272,2275244202,2181280205,3883342231,4174971681,2100962609,3006406551,2338962553,2652176669,1804770121,3599042374,594518482,1195357284,1972876559,1453995218,2284391679,3083403559,1037268347,3227005424,2251800290,852816760,2517081190,3693532678,1493036293,1546497954,2075524763,1568477585,1570370219,3367732162,2885293241,1174356450,278559851,1848666294,3129943595,390475637,1182723580,504707405,4100398363,2919208746,294424166,236719378,1029390794,4244336336,2840191943,1751062229,3341134586,2448973952,4041887493,3535821354,1817611071,990711211,140720052,2879725801,989736741,3563191832,2473353545,1133054795,521353531,2773286459,3652540095,4154106960,10288536,773956937,594927357,1672024802,8110737,804771199,1710588841,3273599785,4287340122,3881232242,508253726,461039156,3045153875,363707387,1393962951,1417618641,98411763,3993393089,1707977944,1780143894,894198841,232051883,1780031848,4165173187,3851507666,16543193,296412035];

//Incentives used to motivate sales are called discounts while those used to motivate payments are called allowances (which apply only to purchases made on credit).
//Cash or stock dividends distributed to shareholders are not recorded as an expense on a company's income statement. Stock and cash dividends do not affect a company's net income or profit. Instead, dividends impact the shareholders' equity section of the balance sheet. Dividends, whether cash or stock, represent a reward to investors for their investment in the company.

//While cash dividends reduce the overall shareholders' equity balance, stock dividends represent a reallocation of part of a company's retained earnings to the common stock and additional paid-in capital accounts.
//Your VAT asset is normally what you have paid in VAT to suppliers or on imports. They are an asset because you can convert it into cash by claiming it back from the government.

//Your VAT liability is normally what your customers have paid to you as VAT that you added to your sales invoices. They are a liability because although you get paid it by your customers you also owe the tax to the government because it is a tax you have collected on the governments behalf. As a result you must pay the tax over to the government.

//Most systems of VAT allow you to set your tax asset against the tax liability and you either pay or reclaim the difference.
//Do the figures on your profit and loss account include VAT? If your business is registered for VAT and not using the VAT Flat Rate Scheme, then all the figures on your profit and loss account will be exclusive of VAT

//When recording an accrual like tax, the debit of the journal entry is posted to an expense account ie Tax, and the credit is posted to an accrued expense liability account Tax Payable, which appears on the balance sheet. When the University pays for the tax, an entry to reduce the accrued expense liability and to reduce cash is recorded by posting a debit to the accrued expense liability account and a credit to the cash account.