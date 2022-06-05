import { calculateSuper, calculateTax } from "./utility.js";

$("#inputAnnualSalary").change((e) => {
  const annualSalary = $("#inputAnnualSalary").val();

  // $("#inputSuperannuation").val(getSuper(annualSalary));
  $("#inputSuperannuation").val(calculateSuper(annualSalary));

  // const tax = parseFloat(getTax(annualSalary));
  const tax = parseFloat(calculateTax(annualSalary));

  $("#inputAnnualTax").val(tax);

  e.preventDefault();
});

$("#onboarding-form").submit((e) => {
  $("#onboarding-form").hide();
  $("#form-success-submit").show();
  e.preventDefault();
});
