/**
 * Untuk membuat link bisa dicopy
 */
const actionLink = document.querySelectorAll(".link-card .link-action");

actionLink.forEach((action) => {
  action.addEventListener("click", (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(action.parentElement.getAttribute("href"));

    /**
     * Untuk memunculkan toast notification
     */
    document.getElementById("toast").innerHTML = `
        <div class="toast-container">
            <p>✅ Link <strong> ${action.parentElement.innerText} </strong> berhasil disalin!</p>
        </div>
    `;

    /**
     * Untuk menghilangkan toast notification
     */

    setTimeout(() => {
      document
        .querySelector("#toast .toast-container")
        .classList.add("toast-gone");
    }, 300);

    setTimeout(() => {
      document.querySelector("#toast .toast-container").remove();
    }, 2000);
  });
});

/**
 * Untuk ganti icon sosmed saat hover
 */

document.querySelectorAll(".sosmed i").forEach((sosmed) => {
  sosmed.addEventListener("mouseenter", () => {
    sosmed.classList.remove("ph");
    sosmed.classList.add("ph-fill");
  });

  sosmed.addEventListener("mouseleave", () => {
    sosmed.classList.remove("ph-fill");
    sosmed.classList.add("ph");
  });
});

/**
 * Animasi Text bergerak saat scroll
 */

document.addEventListener("scroll", (e) => {
  document.querySelector(".bg-text-animation").style.transform = `translateX(${
    window.scrollY / 5
  }px)`;
});

function copyToClipboard() {
  // Get the textarea element
  var textArea = document.getElementById('textToCopy');

  // Select the text inside the textarea
  textArea.select();
  textArea.setSelectionRange(0, 99999); // For mobile devices

  // Copy the selected text to the clipboard
  try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
  } catch (err) {
      console.error('Oops, unable to copy', err);
  }
}

const activePage = window.location.pathname;
const navLinks = document.querySelectorAll('nav a').forEach(link => {
  if(link.href.includes(`${activePage}`)){
    link.classList.add('index');
    console.log(link);
  }
})
function myFunction() {
  var copyText = document.getElementById("myInput");

  copyText.select();
  copyText.setSelectionRange(0, 99999); 

  navigator.clipboard.writeText(copyText.value);

  alert("Copied the text: " + copyText.value);
}