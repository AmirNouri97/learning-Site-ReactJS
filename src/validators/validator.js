import rules from "./rules";
const validator = (value, validations) => {
  const validationsResults = [];
  //validations came from input in login or ...
  // console.log("validator =>", value.length, validations);
  for (const validator of validations) {
    //value=name
    if (validator.value === rules.requiredValue) {
      //has condition required in input
      value.trim().length === 0 && validationsResults.push("ورودی الزامی است");
    }
    if (validator.value === rules.minValue) {
      value.trim().length < validator.min &&
        validationsResults.push("بیشتر از 8 کاراکتر لازم است");
    }
    if (validator.value === rules.maxValue) {
      value.trim().length > validator.max && validationsResults.push(false);
    }
    if (validator.value === rules.emailValue) {
      !value.trim().includes("@") && validationsResults.push(false);
    }
  }
  console.log(validationsResults);

  //if inside the array (just false) is anything
  if (validationsResults.length) {
    return false;
  }
  return true;
};
export default validator;
