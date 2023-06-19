// a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. 
// Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 
// NB: Use KRA, NHIF, and NSSF values provided in the link below.
// https://www.aren.co.ke/payroll/taxrates.htmLinks to an external site.  
// https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/payeLinks to an external site.

function calculateNetSalary(basicSalary, benefits) {
  // Define the KRA parameters for tax calculation
  const kraParameters = {
    monthlyTaxablePay: {
      threshold1: 24000,
      threshold2: 32333
    },
    taxRates: {
      rate1: 0.1,
      rate2: 0.25,
      rate3: 0.3
    },
    personalRelief: 2400,
    insuranceRelief: 5000
  };

  // Define the NHIF rates for deductions
  const nhifRates = {
    rates: [
      // Define the lower and upper limits for each deduction rate
      { lowerLimit: 0, upperLimit: 5999, deduction: 150 },
      { lowerLimit: 6000, upperLimit: 7999, deduction: 300 },
      { lowerLimit: 8000, upperLimit: 11999, deduction: 400 },
      { lowerLimit: 12000, upperLimit: 14999, deduction: 500 },
      { lowerLimit: 15000, upperLimit: 19999, deduction: 600 },
      { lowerLimit: 20000, upperLimit: 24999, deduction: 750 },
      { lowerLimit: 25000, upperLimit: 29999, deduction: 850 },
      { lowerLimit: 30000, upperLimit: 34999, deduction: 900 },
      { lowerLimit: 35000, upperLimit: 39999, deduction: 950 },
      { lowerLimit: 40000, upperLimit: Infinity, deduction: 1000 }
    ]
  };

  // Define the NSSF rates for deductions
  const nssfRates = {
    tier1: { lowerLimit: 0, upperLimit: 6000, rate: 0.06 },
    tier2: { lowerLimit: 6001, upperLimit: 18000, rate: 0.06 }
  };

  // Calculate Gross Salary
  const grossSalary = basicSalary + benefits;

  // Calculate PAYE (Tax)
  let tax = 0;
  let annualTaxablePay = grossSalary * 12; // Assuming monthly salary
  if (annualTaxablePay <= kraParameters.monthlyTaxablePay.threshold1 * 12) {
    // Apply tax rate 1 to the entire annual taxable pay
    tax = annualTaxablePay * kraParameters.taxRates.rate1;
  } else if (annualTaxablePay <= kraParameters.monthlyTaxablePay.threshold2 * 12) {
    // Apply tax rate 1 to the first threshold and tax rate 2 to the remaining taxable pay
    tax =
      kraParameters.monthlyTaxablePay.threshold1 * 12 * kraParameters.taxRates.rate1 +
      (annualTaxablePay - kraParameters.monthlyTaxablePay.threshold1 * 12) * kraParameters.taxRates.rate2;
  } else {
    // Apply tax rate 1 to the first threshold, tax rate 2 to the second threshold, and tax rate 3 to the remaining taxable pay
    tax =
      kraParameters.monthlyTaxablePay.threshold1 * 12 * kraParameters.taxRates.rate1 +
      (kraParameters.monthlyTaxablePay.threshold2 - kraParameters.monthlyTaxablePay.threshold1) * 12 *
        kraParameters.taxRates.rate2 +
      (annualTaxablePay - kraParameters.monthlyTaxablePay.threshold2 * 12) * kraParameters.taxRates.rate3;
  }

  // Apply Personal Relief
  tax -= kraParameters.personalRelief;

  // Apply Insurance Relief
  tax -= kraParameters.insuranceRelief;

  // Calculate NHIF Deductions
  let nhifDeductions = 0;
  for (const rate of nhifRates.rates) {
    // Find the correct deduction rate based on the gross salary
    if (grossSalary >= rate.lowerLimit && grossSalary <= rate.upperLimit) {
      nhifDeductions = rate.deduction;
      break;
    }
  }

  // Calculate NSSF Deductions
  let nssfDeductions = 0;
  if (grossSalary <= nssfRates.tier1.upperLimit) {
    // Apply the tier 1 rate to the gross salary
    nssfDeductions = grossSalary * nssfRates.tier1.rate;
  } else if (grossSalary <= nssfRates.tier2.upperLimit) {
    // Apply the tier 2 rate to the gross salary
    nssfDeductions = grossSalary * nssfRates.tier2.rate;
  } else {
    // Apply the combined rate of tier 1 and tier 2 to the gross salary
    nssfDeductions = grossSalary * (nssfRates.tier1.rate + nssfRates.tier2.rate);
  }

  // Calculate Net Salary
  const netSalary = grossSalary - tax - nhifDeductions - nssfDeductions;

  // Output the results
  console.log(`Gross Salary: ${grossSalary}`);
  console.log(`PAYE (Tax): ${tax}`);
  console.log(`NHIF Deductions: ${nhifDeductions}`);
  console.log(`NSSF Deductions: ${nssfDeductions}`);
  console.log(`Net Salary: ${netSalary}`);
}

// Example usage
calculateNetSalary(50000, 10000);
