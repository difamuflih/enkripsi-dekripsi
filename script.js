function encryptText() {
  const plaintext = document.getElementById("plaintext").value;
  const key = document.getElementById("key").value;

  if (!plaintext || !key) {
    alert("Please enter text and a key.");
    return;
  }

  // Enkripsi dengan AES
  const encrypted = CryptoJS.AES.encrypt(plaintext, key).toString();

  // Setel hasil enkripsi ke input ciphertext
  document.getElementById("ciphertext").value = encrypted;
}

function decryptText() {
  const ciphertext = document.getElementById("ciphertext").value;
  const key = document.getElementById("key").value;

  if (!ciphertext || !key) {
    alert("Please enter encrypted text and a key.");
    return;
  }

  try {
    // Dekripsi dengan AES
    const decrypted = CryptoJS.AES.decrypt(ciphertext, key);
    const plaintext = decrypted.toString(CryptoJS.enc.Utf8);

    // Setel hasil dekripsi ke input decryptedtext
    document.getElementById("decryptedtext").value = plaintext;
  } catch (e) {
    alert("Decryption failed. Make sure the key is correct.");
  }
}
