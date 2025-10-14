const email = "ntsakomaluleke474@gmail.com";

function maskEmail(email) {
  const atIndex = email.indexOf('@');
  const localPart = email.substring(0, atIndex);
  const domain = email.substring(atIndex);

  const firstChar = localPart.charAt(0);
  const lastChar = localPart.charAt(localPart.length - 1);
  const maskedMiddle = '*'.repeat(localPart.length - 2);

  return firstChar + maskedMiddle + lastChar + domain; 
}

console.log(maskEmail(email));
