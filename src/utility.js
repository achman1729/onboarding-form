var calculateSuper = (annualSalary) => {
  return annualSalary * 0.1;
};

var calculateTax = (annualSalary) => {
  switch (true) {
    case annualSalary <= 18200:
      return "0";
    case annualSalary >= 18201 && annualSalary <= 37000: {
      const taxableSalary = annualSalary - 18200;
      const tax = taxableSalary * 0.19;
      return `${tax}`;
    }
    case annualSalary >= 37001 && annualSalary <= 90000: {
      const taxableSalary = annualSalary - 37000;
      const tax = taxableSalary * 0.325 + 3572;
      return `${tax}`;
    }
    case annualSalary >= 90001 && annualSalary <= 180000: {
      const taxableSalary = annualSalary - 90000;
      const tax = taxableSalary * 0.37 + 20797;
      return `${tax}`;
    }
    case annualSalary >= 180001: {
      const taxableSalary = annualSalary - 180000;
      const tax = taxableSalary * 0.45 + 54097;
      return `${tax}`;
    }
  }
};

// module.exports = { calculateSuper, calculateTax };

export { calculateSuper, calculateTax }