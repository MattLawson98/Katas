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
  let result = {};
  let totalSales = 0;
  let totalTax = 0;
  for (let company of salesData) {
    // console.log(company);
    // console.log( Object.values(company.sales));
    for (let i = 0; i < Object.keys(taxRates).length; i++) {
      if (company.province === Object.keys(taxRates)[i]) {
        let tax = Object.values(taxRates)[i]
        val = Object.values(company.sales).reduce((a,b) => a+b, 0)
        totalSales = val;
        totalTax = val * tax;
        if(result[company.name] === undefined) {
          result[company.name] = {};
        }
        if(result[company.name].totalSales === undefined) {
          result[company.name].totalSales = 0;
          result[company.name].totalTaxes = 0;
        }
        result[company.name].totalSales += totalSales;
        result[company.name].totalTaxes += totalTax;
        // console.log(result[company.name]);
        }
      }
    }
    console.log(result);
    return result;
  }



const results = calculateSalesTax(companySalesData, salesTaxRates);

