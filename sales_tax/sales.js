const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400]
  }, {
    name: "Bombardier",
    province: "AB",
    sales: [
      80,
      20,
      10,
      100,
      90,
      500
    ]
  }, {
    name: "Telus",
    province: "SK",
    sales: [500, 100]
  }
];

const calculateSalesTax = function (salesData, taxRates) {
  let results = {};
  let totalSales;
  let totalTax;
  for (let company of salesData) {
    console.log(company);
    console.log(Object.keys(taxRates).length);
    for (let i = 0; i < Object.keys(taxRates).length; i++) {
      if (company.province === Object.keys(taxRates)[i]) {
          
      }
    }
  }

}


const results = calculateSalesTax(companySalesData, salesTaxRates);
