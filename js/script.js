
const correctHash = "2bcb43cbc8f6b7ef66331532881143fcbae60a879db3a8fb853f645bb24c2b3c";

async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
  return hashHex;
}

async function checkPassword() {
  const inputPassword = document.getElementById('password').value;
  const inputHash = await hashPassword(inputPassword);

  if (inputHash === correctHash) {
    document.getElementById('password-prompt').style.display = 'none';
    document.getElementById('protected-content').style.display = 'block';
  } else {
    document.getElementById('error-message').style.display = 'block';
  }
  return false;
}
