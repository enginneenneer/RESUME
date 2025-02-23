
const correctHash = "2bcb43cbc8f6b7ef66331532881143fcbae60a879db3a8fb853f645bb24c2b3c";

async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
  return hashHex;
}

async function checkPassword(event) {
  event.preventDefault(); // Prevent form submission
  console.log("🔹 Password function triggered");

  const inputPassword = document.getElementById("password").value.trim();
  console.log("🔹 User Input:", inputPassword);

  const inputHash = await hashPassword(inputPassword);
  console.log("🔹 Computed Hash:", inputHash);
  console.log("🔹 Correct Hash:", correctHash);

  if (inputHash === correctHash) {
      console.log("✅ Password Matched!");
      document.getElementById("password-prompt").style.display = "none";
      document.getElementById("protected-content").style.display = "block";

      // ✅ Debugging the Image
      let image = document.getElementById("resume-image");
      if (image) {
          console.log("✅ Image Element Found:", image);
          image.style.display = "block";
      } else {
          console.error("❌ Image Element Not Found!");
      }
  } else {
      console.log("❌ Incorrect Password!");
      document.getElementById("error-message").style.display = "block";
  }
}

