const testEmail = (value) => {
  const emailPattern = /^[A-Za-z0-9.]+@[a-z]+\.[a-z]{2,3}$/g;
  return emailPattern.test(value);
};
const testPhoneNumber = (value) => {
  //code
  const phoneNumberPattern = /^[09]{2}[0-9]{9}$/g;
  return phoneNumberPattern.test(value);
};
const testNationalCode = (value) => {
  //code
  const nationalCodePattern = /^[0-9]{10}$/g;
  return nationalCodePattern.test(value);
};
export default {
  testEmail,
  testPhoneNumber,
  testNationalCode,
};
