function rc4(key, text) {
  const s = [];
  let j = 0;

  // Key Scheduling Algorithm (KSA)
  for (let i = 0; i < 256; i++) {
    s[i] = i;
  }

  for (let i = 0; i < 256; i++) {
    j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
    [s[i], s[j]] = [s[j], s[i]]; // swap
  }

  let i = 0;
  j = 0;
  const result = [];

  // Pseudo-Random Generation Algorithm (PRGA)
  for (let k = 0; k < text.length; k++) {
    i = (i + 1) % 256;
    j = (j + s[i]) % 256;
    [s[i], s[j]] = [s[j], s[i]]; // swap

    const rnd = s[(s[i] + s[j]) % 256];
    const encryptedChar = String.fromCharCode(text.charCodeAt(k) ^ rnd);

    result.push(encryptedChar);
  }

  return result.join("");
}

function encrypt() {
  const text = document.getElementById("text").value;
  const key = document.getElementById("key").value;

  const encryptedText = rc4(key, text);
  document.getElementById("encrypted").innerText = encryptedText;
}

function decrypt() {
  const encryptedText = document.getElementById("encrypted").innerText;
  const key = document.getElementById("key").value;

  const decryptedText = rc4(key, encryptedText);
  document.getElementById("decrypted").innerText = decryptedText;
}
