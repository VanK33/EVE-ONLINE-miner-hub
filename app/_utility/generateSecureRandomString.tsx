// function generateSecureRandomString(length: number): string {
//   // generated a TypedArray of random numbers between 0 and 255
//   const array = new Uint8Array(length);
//   // pass the TypedArray to the getRandomValues method of the crypto object. This provides a cryptographically secure random number generator
//   window.crypto.getRandomValues(array);
//   const characters =
//     "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   let randomString = "";
//   for (let i = 0; i < array.length; i++) {
//     // use the modulo operator to get a random index between 0 and the length of the characters string
//     const randomIndex = array[i] % characters.length;
//     randomString += characters[randomIndex];
//   }
//   return randomString;
// }

// export default generateSecureRandomString;

// state generation is moved to server end
