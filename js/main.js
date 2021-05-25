window.onload = function () {
  document.getElementById('encryptForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Values
    var key = document.getElementById('key').value;
    var toEncrypt = document.getElementById('encrypt').value;
    var toDecrypt = document.getElementById('decrypt').value;

    if (key.length < 16) {
      return document.getElementById('error-message-password').classList.remove('hide');
    } else {
      document.getElementById('error-message-password').classList.add('hide');
    }

    // Create an encryptor
    var encryptor = require('simple-encryptor')(key);

    // To Encrypt
    var encrypted = encryptor.encrypt(toEncrypt);
    document.getElementById('encrypted').value=encrypted;

    // To Decrypt
    var decrypted = encryptor.decrypt(toDecrypt);
    document.getElementById('decrypted').value=decrypted;
  });
}
