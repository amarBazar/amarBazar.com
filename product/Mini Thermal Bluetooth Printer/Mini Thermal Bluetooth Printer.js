// Select all collection-image-box elements
const collectionBoxes = document.querySelectorAll('.collection-image-box');

// Select the main image and zoom popover
const mainImage = document.querySelector('.main-image img');
const zoomPopover = document.querySelector('.zoom-popover');
const zoomImage = zoomPopover.querySelector('img');

// Function to handle image click and update main image
collectionBoxes.forEach(box => {
  box.addEventListener('click', function () {
    // Get the src of the clicked image
    const newImageSrc = this.querySelector('img').src;

    // Update the main image and zoom popover
    mainImage.src = newImageSrc;
    zoomImage.src = newImageSrc;

    // Ensure the zoom functionality works dynamically
    setupZoom(mainImage, zoomPopover, zoomImage);
  });
});

// Function to setup zoom functionality
function setupZoom(mainImg, popover, zoomImg) {
  mainImg.addEventListener('mouseenter', () => {
    // Show the zoom popover and sync images
    popover.style.display = 'block';
    zoomImg.src = mainImg.src;
  });

  mainImg.addEventListener('mousemove', (e) => {
    const rect = mainImg.getBoundingClientRect();
    const xPercent = ((e.clientX - rect.left) / rect.width) * 50;
    const yPercent = ((e.clientY - rect.top) / rect.height) * 50;

    // Adjust the zoomed image position
    zoomImg.style.transform = `translate(-${xPercent}%, -${yPercent}%)`;
  });

  mainImg.addEventListener('mouseleave', () => {
    popover.style.display = 'none';
  });
}

// Initialize zoom functionality for the first time
setupZoom(mainImage, zoomPopover, zoomImage);

// quantity cunting
document.addEventListener("DOMContentLoaded", function () {
  const minusBtn = document.getElementById("minus");
  const plusBtn = document.getElementById("plus");
  const quantitySpan = document.querySelector(".quantati span");

  let quantity = 1;

  plusBtn.addEventListener("click", () => {
      quantity += 1;
      quantitySpan.textContent = quantity;
  });

  minusBtn.addEventListener("click", () => {
      if (quantity > 1) {
          quantity -= 1;
          quantitySpan.textContent = quantity;
      }
  });
});




document.querySelector('.btn.buy-now').addEventListener('click', function () {
  // Get values from test.html
  const image = document.querySelector('.collection-image-box img').src;
  const title = document.querySelector('.details-title').textContent;
  const price = document.querySelector('.price').textContent;
  const selectedColor = document.querySelector('.main-color-box input:checked').value;
  const quantity = document.querySelector('.quantati span').textContent;

  // Create content for cashOut.html
  const newPageContent = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="shortcut icon" href="../../resources/img/logo.jpg" type="image/x-icon">
      <title>cash out</title>
      <!--css -->
      <link rel="stylesheet" href="../../resources/css/style.css">
      <link rel="stylesheet" href="../../resources/css/responsive.css">
      <!-- google fonts -->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Noto+Sans+Bengali:wght@100..900&display=swap" rel="stylesheet">
      <!-- icons -->
      <link rel="stylesheet" href="https://site-assets.fontawesome.com/releases/v6.6.0/css/all.css">
  </head>
  <body>
      <nav class="top-nav">
          <div class="row">
              <div class="top-nav-frame"></div>
              <div class="top-nav-frame">
                  <p class="Ag-title title">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                  <a href="#">Shop Now</a>
              </div>
              <div class="top-nav-frame">
                  <select name="lang" id="lang">
                      <option value="english">english</option>
                      <option value="bangla">bangla</option>
                  </select>
              </div>
          </div>
      </nav>
      <nav class="main-nav">
          <div class="row main-nav-box">
              <div class="nav-menu-frame">
                  <div class="logo"><a href="../../index.html">AmarBazar.com</a></div>
              </div>
              <div class="nav-menu-frame">
                  <div class="nav-menu">
                      <ul>
                          <li><a href="../../index.html">Home</a></li>
                          <li><a href="#">Contact</a></li>
                          <li><a href="#">About</a></li>
                          <li><a href="#">Log In</a></li>
                      </ul>
                  </div>
                  <div class="search-box small-devide-search-box">
                      <input type="text" placeholder="What are you looking for?">
                      <button><i class="fa-duotone fa-solid fa-magnifying-glass"></i></button>
                  </div>
              </div>
              <div class="nav-menu-frame">
                  <div class="search-box all-device-search-box">
                      <input type="text" placeholder="What are you looking for?">
                      <button><i class="fa-duotone fa-solid fa-magnifying-glass"></i></button>
                  </div>
                  <div class="side-menu">
                      <button class="side-menu-btn" popovertarget="sideMenu"><i class="fa-regular fa-bars-sort"></i></button>
                      <div popover id="sideMenu">
                          <button class="side-menu-btn menu-close" popovertarget="sideMenu" popovertargetactive="hide"><i class="fa-regular fa-xmark"></i></button>
                          <ul>
                              <li><a href="../../index.html">Home</a></li>
                              <li><a href="#">Contact</a></li>
                              <li><a href="#">About</a></li>
                              <li><a href="#">Log In</a></li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </nav>
      <!-- check out section -->
      <form name="submit-to-google-sheet" method="POST">
      <section class="check-out-section">
          <div class="row">
              <div class="section-titles-box">
                  <div class="section-title">
                      <div class="main-title">
                          <h3>Billing Details</h3>
                      </div>
                  </div>
              </div>
          </div>
          <div class="row billing-row">
              <div class="form-side">
                  <label for="name">name<sup>*</sup></label>
                  <input type="text" id="name" name="Name" required>
                  <label for="number">phone number<sup>*</sup></label>
                  <input type="number" id="number" name="Number" required>
                  <label for="email">email address<sup>*</sup></label>
                  <input type="email" id="email" name="Email" required>
                  <label for="district">district<sup>*</sup></label>
                  <select id="district" name="District" required>
                      <option value="" disabled selected hidden></option>
                      <option value="Bagerhat">Bagerhat</option>
                      <option value="Bandarban">Bandarban</option>
                      <option value="Barguna">Barguna</option>
                      <option value="Barishal">Barishal</option>
                      <option value="Bhola">Bhola</option>
                      <option value="Bogura">Bogura</option>
                      <option value="Brahmanbaria">Brahmanbaria</option>
                      <option value="Chandpur">Chandpur</option>
                      <option value="Chapainawabganj">Chapainawabganj</option>
                      <option value="Chattogram">Chattogram</option>
                      <option value="Chuadanga">Chuadanga</option>
                      <option value="CoxsBazar">Cox's Bazar</option>
                      <option value="Cumilla">Cumilla</option>
                      <option value="Dhaka">Dhaka</option>
                      <option value="Dinajpur">Dinajpur</option>
                      <option value="Faridpur">Faridpur</option>
                      <option value="Feni">Feni</option>
                      <option value="Gaibandha">Gaibandha</option>
                      <option value="Gazipur">Gazipur</option>
                      <option value="Gopalganj">Gopalganj</option>
                      <option value="Habiganj">Habiganj</option>
                      <option value="Jamalpur">Jamalpur</option>
                      <option value="Jashore">Jashore</option>
                      <option value="Jhalakathi">Jhalakathi</option>
                      <option value="Jhenaidah">Jhenaidah</option>
                      <option value="Joypurhat">Joypurhat</option>
                      <option value="Khagrachari">Khagrachari</option>
                      <option value="Khulna">Khulna</option>
                      <option value="Kishoreganj">Kishoreganj</option>
                      <option value="Kurigram">Kurigram</option>
                      <option value="Kushtia">Kushtia</option>
                      <option value="Lakshmipur">Lakshmipur</option>
                      <option value="Lalmonirhat">Lalmonirhat</option>
                      <option value="Madaripur">Madaripur</option>
                      <option value="Magura">Magura</option>
                      <option value="Manikganj">Manikganj</option>
                      <option value="Meherpur">Meherpur</option>
                      <option value="Moulvibazar">Moulvibazar</option>
                      <option value="Munshiganj">Munshiganj</option>
                      <option value="Mymensingh">Mymensingh</option>
                      <option value="Naogaon">Naogaon</option>
                      <option value="Narail">Narail</option>
                      <option value="Narayanganj">Narayanganj</option>
                      <option value="Narsingdi">Narsingdi</option>
                      <option value="Natore">Natore</option>
                      <option value="Netrokona">Netrokona</option>
                      <option value="Nilphamari">Nilphamari</option>
                      <option value="Noakhali">Noakhali</option>
                      <option value="Pabna">Pabna</option>
                      <option value="Panchagarh">Panchagarh</option>
                      <option value="Patuakhali">Patuakhali</option>
                      <option value="Pirojpur">Pirojpur</option>
                      <option value="Rajbari">Rajbari</option>
                      <option value="Rajshahi">Rajshahi</option>
                      <option value="Rangamati">Rangamati</option>
                      <option value="Rangpur">Rangpur</option>
                      <option value="Satkhira">Satkhira</option>
                      <option value="Shariatpur">Shariatpur</option>
                      <option value="Sherpur">Sherpur</option>
                      <option value="Sirajganj">Sirajganj</option>
                      <option value="Sunamganj">Sunamganj</option>
                      <option value="Sylhet">Sylhet</option>
                      <option value="Tangail">Tangail</option>
                      <option value="Thakurgaon">Thakurgaon</option>
                  </select>
                  <label for="police-station">police station<sup>*</sup></label>
                  <select id="police-station" name="Thana" required>
                      <option value="" disabled selected hidden></option>
                      <option class="thana-option bagerhat-thana" value="bagerhat sadar">BAGERHAT SADAR</option>
                      <option class="thana-option bagerhat-thana" value="chitalmari">CHITALMARI</option>
                      <option class="thana-option bagerhat-thana" value="fakirhat">FAKIRHAT</option>
                      <option class="thana-option bagerhat-thana" value="kachua">KACHUA</option>
                      <option class="thana-option bagerhat-thana" value="mollahat">MOLLAHAT</option>
                      <option class="thana-option bagerhat-thana" value="mongla">MONGLA</option>
                      <option class="thana-option bagerhat-thana" value="morrelganj">MORRELGANJ</option>
                      <option class="thana-option bagerhat-thana" value="sarankhola">SARANKHOLA</option>
                      <!-- -------Bandarban---------- -->
                      <option class="thana-option bandarban-thana" value="alikadam">ALIKADAM</option>
                      <option class="thana-option bandarban-thana" value="bandarban sadar">BANDARBAN SADAR</option>
                      <option class="thana-option bandarban-thana" value="lama">LAMA</option>
                      <option class="thana-option bandarban-thana" value="naikhongchhari">NAIKHONGCHHARI</option>
                      <option class="thana-option bandarban-thana" value="rowangchhari">ROWANGCHHARI</option>
                      <option class="thana-option bandarban-thana" value="ruma">RUMA</option>
                      <option class="thana-option bandarban-thana" value="thanchi">THANCHI</option>
                      <!-- -------Barguna---------- -->
                      <option class="thana-option barguna-thana" value="amtoli">Amtoli</option>
                      <option class="thana-option barguna-thana" value="bamna">Bamna</option>
                      <option class="thana-option barguna-thana" value="barguna">Barguna</option>
                      <option class="thana-option barguna-thana" value="betagi">Betagi</option>
                      <option class="thana-option barguna-thana" value="patharghata">Patharghata</option>
                      <option class="thana-option barguna-thana" value="taltoli">Taltoli</option>
                      <!-- -------Barishal---------- -->
                      <option class="thana-option barishal-thana" value="Agailjhara">Agailjhara</option>
                      <option class="thana-option barishal-thana" value="Airport">Airport</option>
                      <option class="thana-option barishal-thana" value="Babuganj">Babuganj</option>
                      <option class="thana-option barishal-thana" value="Bakerganj">Bakerganj</option>
                      <option class="thana-option barishal-thana" value="Banaripara">Banaripara</option>
                      <option class="thana-option barishal-thana" value="Bandar">Bandar</option>
                      <option class="thana-option barishal-thana" value="Gournadi">Gournadi</option>
                      <option class="thana-option barishal-thana" value="Hizla">Hizla</option>
                      <option class="thana-option barishal-thana" value="Kawnia">Kawnia</option>
                      <option class="thana-option barishal-thana" value="Kazirhat">Kazirhat</option>
                      <option class="thana-option barishal-thana" value="Kotwali Model">Kotwali Model</option>
                      <option class="thana-option barishal-thana" value="Mehendiganj">Mehendiganj</option>
                      <option class="thana-option barishal-thana" value="Muladi">Muladi</option>
                      <option class="thana-option barishal-thana" value="Wazirpur">Wazirpur</option>
                      <!-- -------Bhola---------- -->
                      <option class="thana-option bhola-thana" value="Bhola Sadar Model">Bhola Sadar Model</option>
                      <option class="thana-option bhola-thana" value="Burhanuddin">Burhanuddin</option>
                      <option class="thana-option bhola-thana" value="Charfesson">Charfesson</option>
                      <option class="thana-option bhola-thana" value="Dakshin Aicha">Dakshin Aicha</option>
                      <option class="thana-option bhola-thana" value="Doulatkhan">Doulatkhan</option>
                      <option class="thana-option bhola-thana" value="Dularhat">Dularhat</option>
                      <option class="thana-option bhola-thana" value="Lalmohan">Lalmohan</option>
                      <option class="thana-option bhola-thana" value="Manpura">Manpura</option>
                      <option class="thana-option bhola-thana" value="Soshivusion">Soshivusion</option>
                      <option class="thana-option bhola-thana" value="Tazumuddin">Tazumuddin</option>
                      <!-- -------Bogura---------- -->
                      <option class="thana-option bogura-thana" value="Adamdighi">Adamdighi</option>
                      <option class="thana-option bogura-thana" value="Bogura Sadar">Bogura Sadar</option>
                      <option class="thana-option bogura-thana" value="Dhunat">Dhunat</option>
                      <option class="thana-option bogura-thana" value="Dhupchanchia">Dhupchanchia</option>
                      <option class="thana-option bogura-thana" value="Gabtali">Gabtali</option>
                      <option class="thana-option bogura-thana" value="Kahaloo">Kahaloo</option>
                      <option class="thana-option bogura-thana" value="Nandigram">Nandigram</option>
                      <option class="thana-option bogura-thana" value="Sariakandi">Sariakandi</option>
                      <option class="thana-option bogura-thana" value="Shajahanpur">Shajahanpur</option>
                      <option class="thana-option bogura-thana" value="Sherpur">Sherpur</option>
                      <option class="thana-option bogura-thana" value="Shibganj">Shibganj</option>
                      <option class="thana-option bogura-thana" value="Sonatola">Sonatola</option>
                      <!-- -------Brahmanbaria---------- -->
                      <option class="thana-option brahmanbaria-thana" value="Akhaura">Akhaura</option>
                      <option class="thana-option brahmanbaria-thana" value="Ashuganj">Ashuganj</option>
                      <option class="thana-option brahmanbaria-thana" value="Banchampur">Banchampur</option>
                      <option class="thana-option brahmanbaria-thana" value="Bijoynagar">Bijoynagar</option>
                      <option class="thana-option brahmanbaria-thana" value="Brahmanbaria Sadar">Brahmanbaria Sadar</option>
                      <option class="thana-option brahmanbaria-thana" value="Kasba">Kasba</option>
                      <option class="thana-option brahmanbaria-thana" value="Nabinagar">Nabinagar</option>
                      <option class="thana-option brahmanbaria-thana" value="Nasirnagar">Nasirnagar</option>
                      <option class="thana-option brahmanbaria-thana" value="Sarail">Sarail</option>
                      <!-- -------Chandpur---------- -->
                      <option class="thana-option chandpur-thana" value="Chandpur Sadar Model">Chandpur Sadar Model</option>
                      <option class="thana-option chandpur-thana" value="Faridganj">Faridganj</option>
                      <option class="thana-option chandpur-thana" value="Haimchar">Haimchar</option>
                      <option class="thana-option chandpur-thana" value="Haziganj">Haziganj</option>
                      <option class="thana-option chandpur-thana" value="Kachua">Kachua</option>
                      <option class="thana-option chandpur-thana" value="Matlab Dakshin">Matlab Dakshin</option>
                      <option class="thana-option chandpur-thana" value="Matlab Uttar">Matlab Uttar</option>
                      <option class="thana-option chandpur-thana" value="Shahrasti">Shahrasti</option>
                      <!-- -------Chapainawabganj---------- -->
                      <option class="thana-option chapainawabganj-thana" value="Bholahat">Bholahat</option>
                      <option class="thana-option chapainawabganj-thana" value="Gomostapur">Gomostapur</option>
                      <option class="thana-option chapainawabganj-thana" value="Nachol">Nachol</option>
                      <option class="thana-option chapainawabganj-thana" value="Sadar Model">Sadar Model</option>
                      <option class="thana-option chapainawabganj-thana" value="Shibganj">Shibganj</option>
                      <!-- -------Chattogram---------- -->
                      <option class="thana-option chattogram-thana" value="Akbarshah">Akbarshah</option>
                      <option class="thana-option chattogram-thana" value="Anwara">Anwara</option>
                      <option class="thana-option chattogram-thana" value="Bakalia">Bakalia</option>
                      <option class="thana-option chattogram-thana" value="Bandar">Bandar</option>
                      <option class="thana-option chattogram-thana" value="Banshkhali">Banshkhali</option>
                      <option class="thana-option chattogram-thana" value="Bayezid Bostami">Bayezid Bostami</option>
                      <option class="thana-option chattogram-thana" value="Bhujpur">Bhujpur</option>
                      <option class="thana-option chattogram-thana" value="Boalkhali">Boalkhali</option>
                      <option class="thana-option chattogram-thana" value="Chandanaish">Chandanaish</option>
                      <option class="thana-option chattogram-thana" value="Chandgaon">Chandgaon</option>
                      <option class="thana-option chattogram-thana" value="Chawkbazar">Chawkbazar</option>
                      <option class="thana-option chattogram-thana" value="Double Mooring">Double Mooring</option>
                      <option class="thana-option chattogram-thana" value="EPZ">EPZ</option>
                      <option class="thana-option chattogram-thana" value="Fatikchhari">Fatikchhari</option>
                      <option class="thana-option chattogram-thana" value="Halishahar">Halishahar</option>
                      <option class="thana-option chattogram-thana" value="Hathazari">Hathazari</option>
                      <option class="thana-option chattogram-thana" value="Jorarganj">Jorarganj</option>
                      <option class="thana-option chattogram-thana" value="Karnaphuli">Karnaphuli</option>
                      <option class="thana-option chattogram-thana" value="Khulshi">Khulshi</option>
                      <option class="thana-option chattogram-thana" value="Kotowali">Kotowali</option>
                      <option class="thana-option chattogram-thana" value="Lohagara">Lohagara</option>
                      <option class="thana-option chattogram-thana" value="Mirsharai">Mirsharai</option>
                      <option class="thana-option chattogram-thana" value="Pahartoli">Pahartoli</option>
                      <option class="thana-option chattogram-thana" value="Panchlaish">Panchlaish</option>
                      <option class="thana-option chattogram-thana" value="Patenga">Patenga</option>
                      <option class="thana-option chattogram-thana" value="Patiya">Patiya</option>
                      <option class="thana-option chattogram-thana" value="Rangunia">Rangunia</option>
                      <option class="thana-option chattogram-thana" value="Raozan">Raozan</option>
                      <option class="thana-option chattogram-thana" value="Sadarghat">Sadarghat</option>
                      <option class="thana-option chattogram-thana" value="Sandwip">Sandwip</option>
                      <option class="thana-option chattogram-thana" value="Satkania">Satkania</option>
                      <option class="thana-option chattogram-thana" value="Sitakunda">Sitakunda</option>
                      <!-- -------Chuadanga---------- -->
                      <option class="thana-option chuadanga-thana" value="Alamdanga">Alamdanga</option>
                      <option class="thana-option chuadanga-thana" value="Chuadanga Sadar">Chuadanga Sadar</option>
                      <option class="thana-option chuadanga-thana" value="Damurhuda">Damurhuda</option>
                      <option class="thana-option chuadanga-thana" value="Darshana">Darshana</option>
                      <option class="thana-option chuadanga-thana" value="Jibannagar">Jibannagar</option>
                      <!-- -------CoxsBazar---------- -->
                      <option class="thana-option coxsbazar-thana" value="Chakaria">Chakaria</option>
                      <option class="thana-option coxsbazar-thana" value="Cox's Bazar">Cox's Bazar</option>
                      <option class="thana-option coxsbazar-thana" value="Eidgaon">Eidgaon</option>
                      <option class="thana-option coxsbazar-thana" value="Kutubdia">Kutubdia</option>
                      <option class="thana-option coxsbazar-thana" value="Maheshkhali">Maheshkhali</option>
                      <option class="thana-option coxsbazar-thana" value="Pekua">Pekua</option>
                      <option class="thana-option coxsbazar-thana" value="Ramu">Ramu</option>
                      <option class="thana-option coxsbazar-thana" value="Teknaf">Teknaf</option>
                      <option class="thana-option coxsbazar-thana" value="Ukhia">Ukhia</option>
                      <!-- -------Cumilla---------- -->
                      <option class="thana-option cumilla-thana" value="Bangora Bazar">Bangora Bazar</option>
                      <option class="thana-option cumilla-thana" value="Barura">Barura</option>
                      <option class="thana-option cumilla-thana" value="Brahmanpara">Brahmanpara</option>
                      <option class="thana-option cumilla-thana" value="Burichong">Burichong</option>
                      <option class="thana-option cumilla-thana" value="Chandina">Chandina</option>
                      <option class="thana-option cumilla-thana" value="Chaudddagram">Chaudddagram</option>
                      <option class="thana-option cumilla-thana" value="Daudkandi">Daudkandi</option>
                      <option class="thana-option cumilla-thana" value="Debidwar">Debidwar</option>
                      <option class="thana-option cumilla-thana" value="Homna">Homna</option>
                      <option class="thana-option cumilla-thana" value="Kotowali Model">Kotowali Model</option>
                      <option class="thana-option cumilla-thana" value="Laksam">Laksam</option>
                      <option class="thana-option cumilla-thana" value="Lalmai">Lalmai</option>
                      <option class="thana-option cumilla-thana" value="Manoharganj">Manoharganj</option>
                      <option class="thana-option cumilla-thana" value="Meghna">Meghna</option>
                      <option class="thana-option cumilla-thana" value="Muradnagar">Muradnagar</option>
                      <option class="thana-option cumilla-thana" value="Nangalkot">Nangalkot</option>
                      <option class="thana-option cumilla-thana" value="Sadar Dakshin">Sadar Dakshin</option>
                      <option class="thana-option cumilla-thana" value="Titas">Titas</option>
                      <!-- -------Dhaka---------- -->
                      <option class="thana-option dhaka-thana" value="Adabor">Adabor</option>
                      <option class="thana-option dhaka-thana" value="Airport">Airport</option>
                      <option class="thana-option dhaka-thana" value="Ashulia">Ashulia</option>
                      <option class="thana-option dhaka-thana" value="Badda">Badda</option>
                      <option class="thana-option dhaka-thana" value="Banani">Banani</option>
                      <option class="thana-option dhaka-thana" value="Bangshal">Bangshal</option>
                      <option class="thana-option dhaka-thana" value="Cantonment">Cantonment</option>
                      <option class="thana-option dhaka-thana" value="Chawkbazar">Chawkbazar</option>
                      <option class="thana-option dhaka-thana" value="Dakshinkhan">Dakshinkhan</option>
                      <option class="thana-option dhaka-thana" value="Darus Salam">Darus Salam</option>
                      <option class="thana-option dhaka-thana" value="Demra">Demra</option>
                      <option class="thana-option dhaka-thana" value="Dhamrai">Dhamrai</option>
                      <option class="thana-option dhaka-thana" value="Dhanmondi">Dhanmondi</option>
                      <option class="thana-option dhaka-thana" value="Dohar">Dohar</option>
                      <option class="thana-option dhaka-thana" value="Gendaria">Gendaria</option>
                      <option class="thana-option dhaka-thana" value="Gulshan">Gulshan</option>
                      <option class="thana-option dhaka-thana" value="Hatirjheel">Hatirjheel</option>
                      <option class="thana-option dhaka-thana" value="Hazari Bagh">Hazari Bagh</option>
                      <option class="thana-option dhaka-thana" value="Jatrabari">Jatrabari</option>
                      <option class="thana-option dhaka-thana" value="Kadomtali">Kadomtali</option>
                      <option class="thana-option dhaka-thana" value="Kafrul">Kafrul</option>
                      <option class="thana-option dhaka-thana" value="Kalabagan">Kalabagan</option>
                      <option class="thana-option dhaka-thana" value="Kamrangirchar">Kamrangirchar</option>
                      <option class="thana-option dhaka-thana" value="Keraniganj Model">Keraniganj Model</option>
                      <option class="thana-option dhaka-thana" value="Khilgaon">Khilgaon</option>
                      <option class="thana-option dhaka-thana" value="Khilkhet">Khilkhet</option>
                      <option class="thana-option dhaka-thana" value="Kotowali">Kotowali</option>
                      <option class="thana-option dhaka-thana" value="Lalbagh">Lalbagh</option>
                      <option class="thana-option dhaka-thana" value="Mirpur">Mirpur</option>
                      <option class="thana-option dhaka-thana" value="Mohammadpur">Mohammadpur</option>
                      <option class="thana-option dhaka-thana" value="Motijheel">Motijheel</option>
                      <option class="thana-option dhaka-thana" value="Mugda">Mugda</option>
                      <option class="thana-option dhaka-thana" value="Nawabgonj">Nawabgonj</option>
                      <option class="thana-option dhaka-thana" value="New Market">New Market</option>
                      <option class="thana-option dhaka-thana" value="Pallabi">Pallabi</option>
                      <option class="thana-option dhaka-thana" value="Paltan Model">Paltan Model</option>
                      <option class="thana-option dhaka-thana" value="Ramna Model">Ramna Model</option>
                      <option class="thana-option dhaka-thana" value="Rampura">Rampura</option>
                      <option class="thana-option dhaka-thana" value="Rupnagar">Rupnagar</option>
                      <option class="thana-option dhaka-thana" value="Sabujbagh">Sabujbagh</option>
                      <option class="thana-option dhaka-thana" value="Savar">Savar</option>
                      <option class="thana-option dhaka-thana" value="Shah Ali">Shah Ali</option>
                      <option class="thana-option dhaka-thana" value="Shahbagh">Shahbagh</option>
                      <option class="thana-option dhaka-thana" value="Shahjahanpur">Shahjahanpur</option>
                      <option class="thana-option dhaka-thana" value="Shampur">Shampur</option>
                      <option class="thana-option dhaka-thana" value="Sher-e-Bangla Nagar">Sher-e-Bangla Nagar</option>
                      <option class="thana-option dhaka-thana" value="South Keraniganj">South Keraniganj</option>
                      <option class="thana-option dhaka-thana" value="Sutrapur">Sutrapur</option>
                      <option class="thana-option dhaka-thana" value="Tejgaon">Tejgaon</option>
                      <option class="thana-option dhaka-thana" value="Tejgaon Industrial Area">Tejgaon Industrial Area</option>
                      <option class="thana-option dhaka-thana" value="Turag">Turag</option>
                      <option class="thana-option dhaka-thana" value="Uttara East">Uttara East</option>
                      <option class="thana-option dhaka-thana" value="Uttara West">Uttara West</option>
                      <option class="thana-option dhaka-thana" value="Uttarkhan">Uttarkhan</option>
                      <option class="thana-option dhaka-thana" value="Vashantek">Vashantek</option>
                      <option class="thana-option dhaka-thana" value="Vatara">Vatara</option>
                      <option class="thana-option dhaka-thana" value="Wari">Wari</option>
                      <!-- -------Dinajpur---------- -->
                      <option class="thana-option dinajpur-thana" value="Biral">Biral</option>
                      <option class="thana-option dinajpur-thana" value="Birampur">Birampur</option>
                      <option class="thana-option dinajpur-thana" value="Birganj">Birganj</option>
                      <option class="thana-option dinajpur-thana" value="Bochaganj">Bochaganj</option>
                      <option class="thana-option dinajpur-thana" value="Chirirbandar">Chirirbandar</option>
                      <option class="thana-option dinajpur-thana" value="Ghoraghat">Ghoraghat</option>
                      <option class="thana-option dinajpur-thana" value="Hakimpur">Hakimpur</option>
                      <option class="thana-option dinajpur-thana" value="Kaharole">Kaharole</option>
                      <option class="thana-option dinajpur-thana" value="Khansama">Khansama</option>
                      <option class="thana-option dinajpur-thana" value="Kotowali">Kotowali</option>
                      <option class="thana-option dinajpur-thana" value="Nawabgonj">Nawabgonj</option>
                      <option class="thana-option dinajpur-thana" value="Parbatipur">Parbatipur</option>
                      <option class="thana-option dinajpur-thana" value="Phulbari">Phulbari</option>
                      <!-- -------Faridpur---------- -->
                      <option class="thana-option faridpur-thana" value="Alfadanga">Alfadanga</option>
                      <option class="thana-option faridpur-thana" value="Bhanga">Bhanga</option>
                      <option class="thana-option faridpur-thana" value="Boalmari">Boalmari</option>
                      <option class="thana-option faridpur-thana" value="Char Bhadrasan">Char Bhadrasan</option>
                      <option class="thana-option faridpur-thana" value="Kotowali">Kotowali</option>
                      <option class="thana-option faridpur-thana" value="Madhukhali">Madhukhali</option>
                      <option class="thana-option faridpur-thana" value="Nagarkanda">Nagarkanda</option>
                      <option class="thana-option faridpur-thana" value="Sadarpur">Sadarpur</option>
                      <option class="thana-option faridpur-thana" value="Saltha">Saltha</option>
                      <!-- -------Feni---------- -->
                      <option class="thana-option feni-thana" value="Chhagalnaiya">Chhagalnaiya</option>
                      <option class="thana-option feni-thana" value="Daganbhuiyan">Daganbhuiyan</option>
                      <option class="thana-option feni-thana" value="Feni Sadar">Feni Sadar</option>
                      <option class="thana-option feni-thana" value="Fulgazi">Fulgazi</option>
                      <option class="thana-option feni-thana" value="Parshuram">Parshuram</option>
                      <option class="thana-option feni-thana" value="Sonagazi">Sonagazi</option>
                      <!-- -------Gaibandha---------- -->
                      <option class="thana-option gaibandha-thana" value="Fulchhari">Fulchhari</option>
                      <option class="thana-option gaibandha-thana" value="Gaibandha Sadar">Gaibandha Sadar</option>
                      <option class="thana-option gaibandha-thana" value="Gobindaganj">Gobindaganj</option>
                      <option class="thana-option gaibandha-thana" value="Palashbari">Palashbari</option>
                      <option class="thana-option gaibandha-thana" value="Sadullapur">Sadullapur</option>
                      <option class="thana-option gaibandha-thana" value="Shaghata">Shaghata</option>
                      <option class="thana-option gaibandha-thana" value="Sundarganj">Sundarganj</option>
                      <!-- -------Gazipur---------- -->
                      <option class="thana-option gazipur-thana" value="Bason">Bason</option>
                      <option class="thana-option gazipur-thana" value="Gacha">Gacha</option>
                      <option class="thana-option gazipur-thana" value="Gazipur Sadar">Gazipur Sadar</option>
                      <option class="thana-option gazipur-thana" value="Joydebpur">Joydebpur</option>
                      <option class="thana-option gazipur-thana" value="Kaliakair">Kaliakair</option>
                      <option class="thana-option gazipur-thana" value="Kaliganj">Kaliganj</option>
                      <option class="thana-option gazipur-thana" value="Kapasia">Kapasia</option>
                      <option class="thana-option gazipur-thana" value="Kasimpur">Kasimpur</option>
                      <option class="thana-option gazipur-thana" value="Konabari">Konabari</option>
                      <option class="thana-option gazipur-thana" value="Pubail">Pubail</option>
                      <option class="thana-option gazipur-thana" value="Sreepur">Sreepur</option>
                      <option class="thana-option gazipur-thana" value="Tongi East">Tongi East</option>
                      <option class="thana-option gazipur-thana" value="Tongi West">Tongi West</option>
                      <!-- -------Gopalganj---------- -->
                      <option class="thana-option gopalganj-thana" value="Gopalganj">Gopalganj</option>
                      <option class="thana-option gopalganj-thana" value="Kashiani">Kashiani</option>
                      <option class="thana-option gopalganj-thana" value="Kotalipara">Kotalipara</option>
                      <option class="thana-option gopalganj-thana" value="Muksudpur">Muksudpur</option>
                      <option class="thana-option gopalganj-thana" value="Tungipara">Tungipara</option>
                      <!-- -------Habiganj---------- -->
                      <option class="thana-option habiganj-thana" value="Ajmiriganj">Ajmiriganj</option>
                      <option class="thana-option habiganj-thana" value="Bahubal">Bahubal</option>
                      <option class="thana-option habiganj-thana" value="Baniachong">Baniachong</option>
                      <option class="thana-option habiganj-thana" value="Chunarughat">Chunarughat</option>
                      <option class="thana-option habiganj-thana" value="Habiganj">Habiganj</option>
                      <option class="thana-option habiganj-thana" value="Lakhai">Lakhai</option>
                      <option class="thana-option habiganj-thana" value="Madhabpur">Madhabpur</option>
                      <option class="thana-option habiganj-thana" value="Nabiganj">Nabiganj</option>
                      <option class="thana-option habiganj-thana" value="Shaestagonj">Shaestagonj</option>
                      <!-- -------Jamalpur---------- -->
                      <option class="thana-option jamalpur-thana" value="Bakshigonj">Bakshigonj</option>
                      <option class="thana-option jamalpur-thana" value="Dewanganj">Dewanganj</option>
                      <option class="thana-option jamalpur-thana" value="Islampur">Islampur</option>
                      <option class="thana-option jamalpur-thana" value="Jamalpur Sadar">Jamalpur Sadar</option>
                      <option class="thana-option jamalpur-thana" value="Madarganj">Madarganj</option>
                      <option class="thana-option jamalpur-thana" value="Melandoho">Melandoho</option>
                      <option class="thana-option jamalpur-thana" value="Sarishabari">Sarishabari</option>
                      <!-- -------Jashore---------- -->
                      <option class="thana-option jashore-thana" value="Abhaynagar">Abhaynagar</option>
                      <option class="thana-option jashore-thana" value="Bagherpara">Bagherpara</option>
                      <option class="thana-option jashore-thana" value="Benapole Port">Benapole Port</option>
                      <option class="thana-option jashore-thana" value="Chaugachha">Chaugachha</option>
                      <option class="thana-option jashore-thana" value="Jhikargachha">Jhikargachha</option>
                      <option class="thana-option jashore-thana" value="Keshabpur">Keshabpur</option>
                      <option class="thana-option jashore-thana" value="Kotwali">Kotwali</option>
                      <option class="thana-option jashore-thana" value="Manirampur">Manirampur</option>
                      <option class="thana-option jashore-thana" value="Sharsa">Sharsa</option>
                      <!-- -------Jhalakathi---------- -->
                      <option class="thana-option jhalakathi-thana" value="Jhalokati">Jhalokathi</option>
                      <option class="thana-option jhalakathi-thana" value="Kathalia">Kathalia</option>
                      <option class="thana-option jhalakathi-thana" value="Nalchity">Nalchity</option>
                      <option class="thana-option jhalakathi-thana" value="Rajapur">Rajapur</option>
                      <!-- -------Jhenaidah---------- -->
                      <option class="thana-option jhenaidah-thana" value="Harinakunda">Harinakunda</option>
                      <option class="thana-option jhenaidah-thana" value="Jhenaidah">Jhenaidah</option>
                      <option class="thana-option jhenaidah-thana" value="Kaliganj">Kaliganj</option>
                      <option class="thana-option jhenaidah-thana" value="Kotchandpur">Kotchandpur</option>
                      <option class="thana-option jhenaidah-thana" value="Maheshpur">Maheshpur</option>
                      <option class="thana-option jhenaidah-thana" value="Shailkupa">Shailkupa</option>
                      <!-- -------Joypurhat---------- -->
                      <option class="thana-option joypurhat-thana" value="Akkelpur">Akkelpur</option>
                      <option class="thana-option joypurhat-thana" value="Joypurhat">Joypurhat</option>
                      <option class="thana-option joypurhat-thana" value="Kalai">Kalai</option>
                      <option class="thana-option joypurhat-thana" value="Khetlal">Khetlal</option>
                      <option class="thana-option joypurhat-thana" value="Panchbibi">Panchbibi</option>
                      <!-- -------Khagrachari---------- -->
                      <option class="thana-option khagrachari-thana" value="Dighinala">Dighinala</option>
                      <option class="thana-option khagrachari-thana" value="Guimara">Guimara</option>
                      <option class="thana-option khagrachari-thana" value="Khagrachari">Khagrachari</option>
                      <option class="thana-option khagrachari-thana" value="Laxmichhari">Laxmichhari</option>
                      <option class="thana-option khagrachari-thana" value="Manikchhari">Manikchhari</option>
                      <option class="thana-option khagrachari-thana" value="Matiranga">Matiranga</option>
                      <option class="thana-option khagrachari-thana" value="Mohalchhari">Mohalchhari</option>
                      <option class="thana-option khagrachari-thana" value="Panchhari">Panchhari</option>
                      <option class="thana-option khagrachari-thana" value="Ramgarh">Ramgarh</option>
                      <!-- -------Khulna---------- -->
                      <option class="thana-option khulna-thana" value="Aronghata">Aronghata</option>
                      <option class="thana-option khulna-thana" value="Batiaghata">Batiaghata</option>
                      <option class="thana-option khulna-thana" value="Dacope">Dacope</option>
                      <option class="thana-option khulna-thana" value="Daulatpur">Daulatpur</option>
                      <option class="thana-option khulna-thana" value="Digholia">Digholia</option>
                      <option class="thana-option khulna-thana" value="Dumuria">Dumuria</option>
                      <option class="thana-option khulna-thana" value="Horintana">Horintana</option>
                      <option class="thana-option khulna-thana" value="Khalishpur">Khalishpur</option>
                      <option class="thana-option khulna-thana" value="Khan Jahan Ali">Khan Jahan Ali</option>
                      <option class="thana-option khulna-thana" value="Khulna Sadar">Khulna Sadar</option>
                      <option class="thana-option khulna-thana" value="Koyra">Koyra</option>
                      <option class="thana-option khulna-thana" value="Labanchora">Labanchora</option>
                      <option class="thana-option khulna-thana" value="Paikgasa">Paikgasa</option>
                      <option class="thana-option khulna-thana" value="Phultala">Phultala</option>
                      <option class="thana-option khulna-thana" value="Rupsha">Rupsha</option>
                      <option class="thana-option khulna-thana" value="Sonadanga Model">Sonadanga Model</option>
                      <option class="thana-option khulna-thana" value="Terokhada">Terokhada</option>
                      <!-- -------Kishoreganj---------- -->
                      <option class="thana-option kishoreganj-thana" value="Austagram">Austagram</option>
                      <option class="thana-option kishoreganj-thana" value="Bajitpur">Bajitpur</option>
                      <option class="thana-option kishoreganj-thana" value="Bhairab">Bhairab</option>
                      <option class="thana-option kishoreganj-thana" value="Hossainpur">Hossainpur</option>
                      <option class="thana-option kishoreganj-thana" value="Itna">Itna</option>
                      <option class="thana-option kishoreganj-thana" value="Karimganj">Karimganj</option>
                      <option class="thana-option kishoreganj-thana" value="Katiadi">Katiadi</option>
                      <option class="thana-option kishoreganj-thana" value="Kishoreganj Sadar">Kishoreganj Sadar</option>
                      <option class="thana-option kishoreganj-thana" value="Kuliarchar">Kuliarchar</option>
                      <option class="thana-option kishoreganj-thana" value="Mithamain">Mithamain</option>
                      <option class="thana-option kishoreganj-thana" value="Nikli">Nikli</option>
                      <option class="thana-option kishoreganj-thana" value="Pakundia">Pakundia</option>
                      <option class="thana-option kishoreganj-thana" value="Tarail">Tarail</option>
                      <!-- -------Kurigram---------- -->
                      <option class="thana-option kurigram-thana" value="Bhurungamari">Bhurungamari</option>
                      <option class="thana-option kurigram-thana" value="Char Rajibpur">Char Rajibpur</option>
                      <option class="thana-option kurigram-thana" value="Chilmari">Chilmari</option>
                      <option class="thana-option kurigram-thana" value="Dusmara">Dusmara</option>
                      <option class="thana-option kurigram-thana" value="Kachakata">Kachakata</option>
                      <option class="thana-option kurigram-thana" value="Kurigram Sadar">Kurigram Sadar</option>
                      <option class="thana-option kurigram-thana" value="Nageshwari">Nageshwari</option>
                      <option class="thana-option kurigram-thana" value="Phulbari">Phulbari</option>
                      <option class="thana-option kurigram-thana" value="Rajarhat">Rajarhat</option>
                      <option class="thana-option kurigram-thana" value="Rowmari">Rowmari</option>
                      <option class="thana-option kurigram-thana" value="Ulipur">Ulipur</option>
                      <!-- -------Kushtia---------- -->
                      <option class="thana-option kushtia-thana" value="Bheramara">Bheramara</option>
                      <option class="thana-option kushtia-thana" value="Daulatpur">Daulatpur</option>
                      <option class="thana-option kushtia-thana" value="Islamic University">Islamic University</option>
                      <option class="thana-option kushtia-thana" value="Khoksa">Khoksa</option>
                      <option class="thana-option kushtia-thana" value="Kumarkhali">Kumarkhali</option>
                      <option class="thana-option kushtia-thana" value="Kushtia Model">Kushtia Model</option>
                      <option class="thana-option kushtia-thana" value="Mirpur">Mirpur</option>
                      <!-- -------Lakshmipur---------- -->
                      <option class="thana-option lakshmipur-thana" value="Chandragonj">Chandragonj</option>
                      <option class="thana-option lakshmipur-thana" value="Kamalnagar">Kamalnagar</option>
                      <option class="thana-option lakshmipur-thana" value="Lakshmipur Sadar">Lakshmipur Sadar</option>
                      <option class="thana-option lakshmipur-thana" value="Raipur">Raipur</option>
                      <option class="thana-option lakshmipur-thana" value="Ramganj">Ramganj</option>
                      <option class="thana-option lakshmipur-thana" value="Ramgati">Ramgati</option>
                      <!-- -------Lalmonirhat---------- -->
                      <option class="thana-option lalmonirhat-thana" value="Aditmari">Aditmari</option>
                      <option class="thana-option lalmonirhat-thana" value="Hatibandha">Hatibandha</option>
                      <option class="thana-option lalmonirhat-thana" value="Kaliganj">Kaliganj</option>
                      <option class="thana-option lalmonirhat-thana" value="Lalmonirhat">Lalmonirhat</option>
                      <option class="thana-option lalmonirhat-thana" value="Patgram">Patgram</option>
                      <!-- -------Madaripur---------- -->
                      <option class="thana-option madaripur-thana" value="Dashar">Dashar</option>
                      <option class="thana-option madaripur-thana" value="Kalkini">Kalkini</option>
                      <option class="thana-option madaripur-thana" value="Madaripur Sadar">Madaripur Sadar</option>
                      <option class="thana-option madaripur-thana" value="Rajoir">Rajoir</option>
                      <option class="thana-option madaripur-thana" value="Shibchar">Shibchar</option>
                      <!-- -------Magura---------- -->
                      <option class="thana-option magura-thana" value="Magura Sadar">Magura Sadar</option>
                      <option class="thana-option magura-thana" value="Mohammadpur">Mohammadpur</option>
                      <option class="thana-option magura-thana" value="Shalikha">Shalikha</option>
                      <option class="thana-option magura-thana" value="Sreepur">Sreepur</option>
                      <!-- -------Manikganj---------- -->
                      <option class="thana-option manikganj-thana" value="Daulatpur">Daulatpur</option>
                      <option class="thana-option manikganj-thana" value="Ghiord">Ghiord</option>
                      <option class="thana-option manikganj-thana" value="Harirampur">Harirampur</option>
                      <option class="thana-option manikganj-thana" value="Manikganj Sadar">Manikganj Sadar</option>
                      <option class="thana-option manikganj-thana" value="Saturia">Saturia</option>
                      <option class="thana-option manikganj-thana" value="Shibalaya">Shibalaya</option>
                      <option class="thana-option manikganj-thana" value="Singair">Singair</option>
                      <!-- -------Meherpur---------- -->
                      <option class="thana-option meherpur-thana" value="Gangni">Gangni</option>
                      <option class="thana-option meherpur-thana" value="Meherpur Sadar">Meherpur Sadar</option>
                      <option class="thana-option meherpur-thana" value="Mujibnagar">Mujibnagar</option>
                      <!-- -------Moulvibazar---------- -->
                      <option class="thana-option moulvibazar-thana" value="Barlekha">Barlekha</option>
                      <option class="thana-option moulvibazar-thana" value="Juri">Juri</option>
                      <option class="thana-option moulvibazar-thana" value="Komolganj">Komolganj</option>
                      <option class="thana-option moulvibazar-thana" value="Kulaura">Kulaura</option>
                      <option class="thana-option moulvibazar-thana" value="Moulvibazar Sadar">Moulvibazar Sadar</option>
                      <option class="thana-option moulvibazar-thana" value="Rajnagar">Rajnagar</option>
                      <option class="thana-option moulvibazar-thana" value="Sreemangal">Sreemangal</option>
                      <!-- -------Munshiganj---------- -->
                      <option class="thana-option munshiganj-thana" value="Gazaria">Gazaria</option>
                      <option class="thana-option munshiganj-thana" value="Louhajong">Louhajong</option>
                      <option class="thana-option munshiganj-thana" value="Munshiganj">Munshiganj</option>
                      <option class="thana-option munshiganj-thana" value="Padma Setu North">Padma Setu North</option>
                      <option class="thana-option munshiganj-thana" value="Sirajdikhan">Sirajdikhan</option>
                      <option class="thana-option munshiganj-thana" value="Sreenagar">Sreenagar</option>
                      <option class="thana-option munshiganj-thana" value="Tongibari">Tongibari</option>
                      <!-- -------Mymensingh---------- -->
                      <option class="thana-option mymensingh-thana" value="Bhaluka">Bhaluka</option>
                      <option class="thana-option mymensingh-thana" value="Dhobaura">Dhobaura</option>
                      <option class="thana-option mymensingh-thana" value="Fulbaria">Fulbaria</option>
                      <option class="thana-option mymensingh-thana" value="Gafforgaon">Gafforgaon</option>
                      <option class="thana-option mymensingh-thana" value="Gouripur">Gouripur</option>
                      <option class="thana-option mymensingh-thana" value="Haluaghat">Haluaghat</option>
                      <option class="thana-option mymensingh-thana" value="Ishwarganj">Ishwarganj</option>
                      <option class="thana-option mymensingh-thana" value="Kotwali">Kotwali</option>
                      <option class="thana-option mymensingh-thana" value="Muktagacha">Muktagacha</option>
                      <option class="thana-option mymensingh-thana" value="Nandail">Nandail</option>
                      <option class="thana-option mymensingh-thana" value="Pagla">Pagla</option>
                      <option class="thana-option mymensingh-thana" value="Phulpur">Phulpur</option>
                      <option class="thana-option mymensingh-thana" value="Tarakanda">Tarakanda</option>
                      <option class="thana-option mymensingh-thana" value="Trishal">Trishal</option>
                      <!-- -------Naogaon---------- -->
                      <option class="thana-option naogaon-thana" value="Atrai">Atrai</option>
                      <option class="thana-option naogaon-thana" value="Badalgachhi">Badalgachhi</option>
                      <option class="thana-option naogaon-thana" value="Dhamoirhat">Dhamoirhat</option>
                      <option class="thana-option naogaon-thana" value="Manda">Manda</option>
                      <option class="thana-option naogaon-thana" value="Mohadevpur">Mohadevpur</option>
                      <option class="thana-option naogaon-thana" value="Naogaon Sadar">Naogaon Sadar</option>
                      <option class="thana-option naogaon-thana" value="Niamatpur">Niamatpur</option>
                      <option class="thana-option naogaon-thana" value="Patnitala">Patnitala</option>
                      <option class="thana-option naogaon-thana" value="Porsha">Porsha</option>
                      <option class="thana-option naogaon-thana" value="Raninagar">Raninagar</option>
                      <option class="thana-option naogaon-thana" value="Sapahar">Sapahar</option>                              
                      <!-- -------Narail---------- -->
                      <option class="thana-option narail-thana" value="Kalia">Kalia</option>
                      <option class="thana-option narail-thana" value="Lohagara">Lohagara</option>
                      <option class="thana-option narail-thana" value="Naragati">Naragati</option>
                      <option class="thana-option narail-thana" value="Narail Sadar">Narail Sadar</option>
                      <!-- -------Narayanganj---------- -->
                      <option class="thana-option narayanganj-thana" value="Araihazar">Araihazar</option>
                      <option class="thana-option narayanganj-thana" value="Bandar">Bandar</option>
                      <option class="thana-option narayanganj-thana" value="Fatullah">Fatullah</option>
                      <option class="thana-option narayanganj-thana" value="Narayanganj Sadar">Narayanganj Sadar</option>
                      <option class="thana-option narayanganj-thana" value="Rupganj">Rupganj</option>
                      <option class="thana-option narayanganj-thana" value="Siddirganj">Siddirganj</option>
                      <option class="thana-option narayanganj-thana" value="Sonargaon">Sonargaon</option>
                      <!-- -------Narsingdi---------- -->
                      <option class="thana-option narsingdi-thana" value="Belabo">Belabo</option>
                      <option class="thana-option narsingdi-thana" value="Madhabdi">Madhabdi</option>
                      <option class="thana-option narsingdi-thana" value="Monohardi">Monohardi</option>
                      <option class="thana-option narsingdi-thana" value="Narsingdi Sadar">Narsingdi Sadar</option>
                      <option class="thana-option narsingdi-thana" value="Palash">Palash</option>
                      <option class="thana-option narsingdi-thana" value="Raipura">Raipura</option>
                      <option class="thana-option narsingdi-thana" value="Shibpur">Shibpur</option>
                      <!-- -------Natore---------- -->
                      <option class="thana-option natore-thana" value="Bagatipara">Bagatipara</option>
                      <option class="thana-option natore-thana" value="Baraigram">Baraigram</option>
                      <option class="thana-option natore-thana" value="Gurudaspur">Gurudaspur</option>
                      <option class="thana-option natore-thana" value="Lalpur">Lalpur</option>
                      <option class="thana-option natore-thana" value="Naldanga">Naldanga</option>
                      <option class="thana-option natore-thana" value="Natore">Natore</option>
                      <option class="thana-option natore-thana" value="Singra">Singra</option>
                      <!-- -------Netrokona---------- -->
                      <option class="thana-option netrokona-thana" value="Atpara">Atpara</option>
                      <option class="thana-option netrokona-thana" value="Barhatta">Barhatta</option>
                      <option class="thana-option netrokona-thana" value="Durgapur">Durgapur</option>
                      <option class="thana-option netrokona-thana" value="Kalmakanda">Kalmakanda</option>
                      <option class="thana-option netrokona-thana" value="Kendua">Kendua</option>
                      <option class="thana-option netrokona-thana" value="Khaliajuri">Khaliajuri</option>
                      <option class="thana-option netrokona-thana" value="Modon">Modon</option>
                      <option class="thana-option netrokona-thana" value="Mohanganj">Mohanganj</option>
                      <option class="thana-option netrokona-thana" value="NetrokonaSadarModel">Netrokona Sadar Model</option>
                      <option class="thana-option netrokona-thana" value="Purbadhala">Purbadhala</option>
                      <!-- -------Nilphamari---------- -->
                      <option class="thana-option nilphamari-thana" value="Dimla">Dimla</option>
                      <option class="thana-option nilphamari-thana" value="Domar">Domar</option>
                      <option class="thana-option nilphamari-thana" value="Jaldhaka">Jaldhaka</option>
                      <option class="thana-option nilphamari-thana" value="Kishoreganj">Kishoreganj</option>
                      <option class="thana-option nilphamari-thana" value="NilphamariSadar">Nilphamari Sadar</option>
                      <option class="thana-option nilphamari-thana" value="Saidpur">Saidpur</option>
                      <!-- -------Noakhali---------- -->
                      <option class="thana-option noakhali-thana" value="Begumganj">Begumganj</option>
                      <option class="thana-option noakhali-thana" value="BhasanChar">Bhasan Char</option>
                      <option class="thana-option noakhali-thana" value="Charjabbar">Charjabbar</option>
                      <option class="thana-option noakhali-thana" value="Chatkhil">Chatkhil</option>
                      <option class="thana-option noakhali-thana" value="Companigonj">Companigonj</option>
                      <option class="thana-option noakhali-thana" value="Hatiya">Hatiya</option>
                      <option class="thana-option noakhali-thana" value="Kabirhat">Kabirhat</option>
                      <option class="thana-option noakhali-thana" value="Senbagh">Senbagh</option>
                      <option class="thana-option noakhali-thana" value="Sonaimuri">Sonaimuri</option>
                      <option class="thana-option noakhali-thana" value="Sudharam">Sudharam</option>
                      <!-- -------Pabna---------- -->
                      <option class="thana-option pabna-thana" value="Aminpur">Aminpur</option>
                      <option class="thana-option pabna-thana" value="Ataikula">Ataikula</option>
                      <option class="thana-option pabna-thana" value="Atgharia">Atgharia</option>
                      <option class="thana-option pabna-thana" value="Bera">Bera</option>
                      <option class="thana-option pabna-thana" value="Bhangura">Bhangura</option>
                      <option class="thana-option pabna-thana" value="Chatmohar">Chatmohar</option>
                      <option class="thana-option pabna-thana" value="Faridpur">Faridpur</option>
                      <option class="thana-option pabna-thana" value="Ishwardi">Ishwardi</option>
                      <option class="thana-option pabna-thana" value="PabnaSadar">Pabna Sadar</option>
                      <option class="thana-option pabna-thana" value="Santhia">Santhia</option>
                      <option class="thana-option pabna-thana" value="Sujanagar">Sujanagar</option>
                      <!-- -------Panchagarh---------- -->
                      <option class="thana-option panchagarh-thana" value="Atwari">Atwari</option>
                      <option class="thana-option panchagarh-thana" value="Boda">Boda</option>
                      <option class="thana-option panchagarh-thana" value="Debiganj">Debiganj</option>
                      <option class="thana-option panchagarh-thana" value="PanchagarhSadar">Panchagarh Sadar</option>
                      <option class="thana-option panchagarh-thana" value="Tetulia">Tetulia</option>
                      <!-- -------Patuakhali---------- -->
                      <option class="thana-option patuakhali-thana" value="Bauphal">Bauphal</option>
                      <option class="thana-option patuakhali-thana" value="Dashmina">Dashmina</option>
                      <option class="thana-option patuakhali-thana" value="Dumki">Dumki</option>
                      <option class="thana-option patuakhali-thana" value="Galachipa">Galachipa</option>
                      <option class="thana-option patuakhali-thana" value="Kalapara">Kalapara</option>
                      <option class="thana-option patuakhali-thana" value="Mirzaganj">Mirzaganj</option>
                      <option class="thana-option patuakhali-thana" value="Mohipur">Mohipur</option>
                      <option class="thana-option patuakhali-thana" value="Patuakhali Sadar">Patuakhali Sadar</option>
                      <option class="thana-option patuakhali-thana" value="Rangabali">Rangabali</option>
                      <!-- -------Pirojpur---------- -->
                      <option class="thana-option pirojpur-thana" value="Bhandaria">Bhandaria</option>
                      <option class="thana-option pirojpur-thana" value="Indurkani">Indurkani</option>
                      <option class="thana-option pirojpur-thana" value="Kawkhali">Kawkhali</option>
                      <option class="thana-option pirojpur-thana" value="Mathbaria">Mathbaria</option>
                      <option class="thana-option pirojpur-thana" value="Nazirpur">Nazirpur</option>
                      <option class="thana-option pirojpur-thana" value="Nesarabad">Nesarabad</option>
                      <option class="thana-option pirojpur-thana" value="Pirojpur Sadar">Pirojpur Sadar</option>
                      <!-- -------Rajbari---------- -->
                      <option class="thana-option rajbari-thana" value="Baliakandi">Baliakandi</option>
                      <option class="thana-option rajbari-thana" value="Goalanda Ghat">Goalanda Ghat</option>
                      <option class="thana-option rajbari-thana" value="Kalukhali">Kalukhali</option>
                      <option class="thana-option rajbari-thana" value="Pangsha">Pangsha</option>
                      <option class="thana-option rajbari-thana" value="Rajbari">Rajbari</option>
                      <!-- -------Rajshahi---------- -->
                      <option class="thana-option rajshahi-thana" value="Airport">Airport</option>
                      <option class="thana-option rajshahi-thana" value="Bagha">Bagha</option>
                      <option class="thana-option rajshahi-thana" value="Bagmara">Bagmara</option>
                      <option class="thana-option rajshahi-thana" value="Bilpur">Bilpur</option>
                      <option class="thana-option rajshahi-thana" value="Boalia Model">Boalia Model</option>
                      <option class="thana-option rajshahi-thana" value="Chandrima">Chandrima</option>
                      <option class="thana-option rajshahi-thana" value="Charghat">Charghat</option>
                      <option class="thana-option rajshahi-thana" value="Damkura">Damkura</option>
                      <option class="thana-option rajshahi-thana" value="Durgapur">Durgapur</option>
                      <option class="thana-option rajshahi-thana" value="Godagari">Godagari</option>
                      <option class="thana-option rajshahi-thana" value="Kashiadanga">Kashiadanga</option>
                      <option class="thana-option rajshahi-thana" value="Katakhali">Katakhali</option>
                      <option class="thana-option rajshahi-thana" value="Kornahar">Kornahar</option>
                      <option class="thana-option rajshahi-thana" value="Mohanpur">Mohanpur</option>
                      <option class="thana-option rajshahi-thana" value="Motihar">Motihar</option>
                      <option class="thana-option rajshahi-thana" value="Paba">Paba</option>
                      <option class="thana-option rajshahi-thana" value="Puthia">Puthia</option>
                      <option class="thana-option rajshahi-thana" value="Rajpara">Rajpara</option>
                      <option class="thana-option rajshahi-thana" value="Shah Makhdum">Shah Makhdum</option>
                      <option class="thana-option rajshahi-thana" value="Tanor">Tanor</option>
                      <!-- -------Rangamati---------- -->
                      <option class="thana-option rangamati-thana" value="Baghaichhari">Baghaichhari</option>
                      <option class="thana-option rangamati-thana" value="Barkal">Barkal</option>
                      <option class="thana-option rangamati-thana" value="Belaichhari">Belaichhari</option>
                      <option class="thana-option rangamati-thana" value="Chandroghona">Chandroghona</option>
                      <option class="thana-option rangamati-thana" value="Juraichhari">Juraichhari</option>
                      <option class="thana-option rangamati-thana" value="Kaptai">Kaptai</option>
                      <option class="thana-option rangamati-thana" value="Kawkhali (Betbunia)">Kawkhali (Betbunia)</option>
                      <option class="thana-option rangamati-thana" value="Kotwali">Kotwali</option>
                      <option class="thana-option rangamati-thana" value="Langadu">Langadu</option>
                      <option class="thana-option rangamati-thana" value="Naniarchar">Naniarchar</option>
                      <option class="thana-option rangamati-thana" value="Rajasthali">Rajasthali</option>
                      <option class="thana-option rangamati-thana" value="Sajek">Sajek</option>
                      <!-- -------Rangpur---------- -->
                      <option class="thana-option rangpur-thana" value="Badarganj">Badarganj</option>
                      <option class="thana-option rangpur-thana" value="Gangachara">Gangachara</option>
                      <option class="thana-option rangpur-thana" value="Haragach">Haragach</option>
                      <option class="thana-option rangpur-thana" value="Hazirhat">Hazirhat</option>
                      <option class="thana-option rangpur-thana" value="Kaunia">Kaunia</option>
                      <option class="thana-option rangpur-thana" value="Kotwali Metro">Kotwali Metro</option>
                      <option class="thana-option rangpur-thana" value="Mahigonj">Mahigonj</option>
                      <option class="thana-option rangpur-thana" value="Mitha Pukur">Mitha Pukur</option>
                      <option class="thana-option rangpur-thana" value="Pirgachha">Pirgachha</option>
                      <option class="thana-option rangpur-thana" value="Pirganj">Pirganj</option>
                      <option class="thana-option rangpur-thana" value="Porshuram">Porshuram</option>
                      <option class="thana-option rangpur-thana" value="Rangpur Sadar">Rangpur Sadar</option>
                      <option class="thana-option rangpur-thana" value="Tajhat">Tajhat</option>
                      <option class="thana-option rangpur-thana" value="Taraganj">Taraganj</option>
                      <!-- -------Satkhira---------- -->
                      <option class="thana-option satkhira-thana" value="Ashashuni">Ashashuni</option>
                      <option class="thana-option satkhira-thana" value="Debhata">Debhata</option>
                      <option class="thana-option satkhira-thana" value="Kalaroa">Kalaroa</option>
                      <option class="thana-option satkhira-thana" value="Kaliganj">Kaliganj</option>
                      <option class="thana-option satkhira-thana" value="Patkelghata">Patkelghata</option>
                      <option class="thana-option satkhira-thana" value="Satkhira Sadar">Satkhira Sadar</option>
                      <option class="thana-option satkhira-thana" value="Shyamnagar">Shyamnagar</option>
                      <option class="thana-option satkhira-thana" value="Tala">Tala</option>
                      <!-- -------Shariatpur---------- -->
                      <option class="thana-option shariatpur-thana" value="Bhedarganj">Bhedarganj</option>
                      <option class="thana-option shariatpur-thana" value="Damudya">Damudya</option>
                      <option class="thana-option shariatpur-thana" value="Gosairhat">Gosairhat</option>
                      <option class="thana-option shariatpur-thana" value="Jajira">Jajira</option>
                      <option class="thana-option shariatpur-thana" value="Naria">Naria</option>
                      <option class="thana-option shariatpur-thana" value="Padma Setu South">Padma Setu South</option>
                      <option class="thana-option shariatpur-thana" value="Palong Model">Palong Model</option>
                      <option class="thana-option shariatpur-thana" value="Shakhipur">Shakhipur</option>
                      <!-- -------Sherpur---------- -->
                      <option class="thana-option sherpur-thana" value="Jhenaigati">Jhenaigati</option>
                      <option class="thana-option sherpur-thana" value="Nakla">Nakla</option>
                      <option class="thana-option sherpur-thana" value="Nalitabari">Nalitabari</option>
                      <option class="thana-option sherpur-thana" value="Sherpur">Sherpur</option>
                      <option class="thana-option sherpur-thana" value="Sribardi">Sribardi</option>
                      <!-- -------Sirajganj---------- -->
                      <option class="thana-option sirajganj-thana" value="Bangabandhu Setu West">Bangabandhu Setu West</option>
                      <option class="thana-option sirajganj-thana" value="Belkuchi">Belkuchi</option>
                      <option class="thana-option sirajganj-thana" value="Chowhali">Chowhali</option>
                      <option class="thana-option sirajganj-thana" value="Enayetpur">Enayetpur</option>
                      <option class="thana-option sirajganj-thana" value="Kamarkhand">Kamarkhand</option>
                      <option class="thana-option sirajganj-thana" value="Kazipur">Kazipur</option>
                      <option class="thana-option sirajganj-thana" value="Raigonj">Raigonj</option>
                      <option class="thana-option sirajganj-thana" value="Salanga">Salanga</option>
                      <option class="thana-option sirajganj-thana" value="Shahjadpur">Shahjadpur</option>
                      <option class="thana-option sirajganj-thana" value="Sirajganj">Sirajganj</option>
                      <option class="thana-option sirajganj-thana" value="Tarash">Tarash</option>
                      <option class="thana-option sirajganj-thana" value="Ullapara Model">Ullapara Model</option>
                      <!-- -------Sunamganj---------- -->
                      <option class="thana-option sunamganj-thana" value="Bishwambarpur">Bishwambarpur</option>
                      <option class="thana-option sunamganj-thana" value="Chhatak">Chhatak</option>
                      <option class="thana-option sunamganj-thana" value="Dakshin Sunamganj">Dakshin Sunamganj</option>
                      <option class="thana-option sunamganj-thana" value="Derai">Derai</option>
                      <option class="thana-option sunamganj-thana" value="Dharmapasha">Dharmapasha</option>
                      <option class="thana-option sunamganj-thana" value="Dowarabazar">Dowarabazar</option>
                      <option class="thana-option sunamganj-thana" value="Jagannathpur">Jagannathpur</option>
                      <option class="thana-option sunamganj-thana" value="Jamalganj">Jamalganj</option>
                      <option class="thana-option sunamganj-thana" value="Madhanagar">Madhanagar</option>
                      <option class="thana-option sunamganj-thana" value="Sullah">Sullah</option>
                      <option class="thana-option sunamganj-thana" value="Sunamganj Sadar">Sunamganj Sadar</option>
                      <option class="thana-option sunamganj-thana" value="Tahirpur">Tahirpur</option>
                      <!-- -------Sylhet---------- -->
                      <option class="thana-option sylhet-thana" value="Airport">Airport</option>
                      <option class="thana-option sylhet-thana" value="Balaganj">Balaganj</option>
                      <option class="thana-option sylhet-thana" value="Beanibazar">Beanibazar</option>
                      <option class="thana-option sylhet-thana" value="Bishwanath">Bishwanath</option>
                      <option class="thana-option sylhet-thana" value="Companygonj">Companygonj</option>
                      <option class="thana-option sylhet-thana" value="Fenchuganj">Fenchuganj</option>
                      <option class="thana-option sylhet-thana" value="Golapgonj">Golapgonj</option>
                      <option class="thana-option sylhet-thana" value="Gowainghat">Gowainghat</option>
                      <option class="thana-option sylhet-thana" value="Jaintapur">Jaintapur</option>
                      <option class="thana-option sylhet-thana" value="Jalalabad">Jalalabad</option>
                      <option class="thana-option sylhet-thana" value="Kanaighat">Kanaighat</option>
                      <option class="thana-option sylhet-thana" value="Kotwali">Kotwali</option>
                      <option class="thana-option sylhet-thana" value="Moglabazar">Moglabazar</option>
                      <option class="thana-option sylhet-thana" value="Osmaninagar">Osmaninagar</option>
                      <option class="thana-option sylhet-thana" value="Shahporan">Shahporan</option>
                      <option class="thana-option sylhet-thana" value="South Surma">South Surma</option>
                      <option class="thana-option sylhet-thana" value="Zokiganj">Zokiganj</option>
                      <!-- -------Tangail---------- -->
                      <option class="thana-option tangail-thana" value="Bangabandhu Setu East">Bangabandhu Setu East</option>
                      <option class="thana-option tangail-thana" value="Basail">Basail</option>
                      <option class="thana-option tangail-thana" value="Bhuapur">Bhuapur</option>
                      <option class="thana-option tangail-thana" value="Delduar">Delduar</option>
                      <option class="thana-option tangail-thana" value="Dhanbari">Dhanbari</option>
                      <option class="thana-option tangail-thana" value="Ghatail">Ghatail</option>
                      <option class="thana-option tangail-thana" value="Gopalpur">Gopalpur</option>
                      <option class="thana-option tangail-thana" value="Kalihati">Kalihati</option>
                      <option class="thana-option tangail-thana" value="Madhupur">Madhupur</option>
                      <option class="thana-option tangail-thana" value="Mirzapur">Mirzapur</option>
                      <option class="thana-option tangail-thana" value="Nagarpur">Nagarpur</option>
                      <option class="thana-option tangail-thana" value="Sakhipur">Sakhipur</option>
                      <option class="thana-option tangail-thana" value="Tangail Sadar">Tangail Sadar</option>
                      <!-- -------Thakurgaon---------- -->
                      <option class="thana-option thakurgaon-thana" value="Baliadangi">Baliadangi</option>
                      <option class="thana-option thakurgaon-thana" value="Bhully">Bhully</option>
                      <option class="thana-option thakurgaon-thana" value="Haripur">Haripur</option>
                      <option class="thana-option thakurgaon-thana" value="Pirganj">Pirganj</option>
                      <option class="thana-option thakurgaon-thana" value="Ranisankail">Ranisankail</option>
                      <option class="thana-option thakurgaon-thana" value="Ruhia">Ruhia</option>
                      <option class="thana-option thakurgaon-thana" value="Thakurgaon Sadar">Thakurgaon Sadar</option>
                  </select>
                  <label for="full-address">address<sup>*</sup></label>
                  <input type="text" id="full-address" name="Address" required>
                  <div class="check-box">
                      <input id="yes" type="checkbox" required>
                      <label for="yes">I have filled in all the information correctly.</label>
                  </div>
              </div>
              <div class="billing-side">
                  <div class="product-box">
                      <div class="product-image-title">
                          <div class="products-image">
                              <img src="${image}" alt="Product Image">
                          </div>
                          <div class="product-name">
                              <input name="Title" class="p-title" readonly value="${title}">
                          </div>
                      </div>
                      <div class="product-price">
                          <span class="price">${price}</span>
                      </div>
                  </div>
                  <div class="Colours-box">
                      <label>Colours:</label>
                      <input name="Colours" type="text" value="${selectedColor}" readonly>
                  </div>
                  <div class="quantity">
                      <label>quantity:</label>
                      <input name="Quantaty" type="number" readonly value="${quantity}">
                  </div>
                  <div class="billing-sum">
                      <div class="subtotal">
                          <label>Subtotal:</label>
                          <span>৳ 00.00</span>
                      </div>
                      <div class="shipping">
                          <label>Shipping:</label>
                          <span>৳ 00.00</span>
                      </div>
                      <div class="total">
                          <label>Total:</label>
                          <input name="Price" readonly value="৳ 00.00">
                      </div>
                  </div>
                  <div class="payment-method">
                      <div class="banking">
                          <div class="selected">
                              <input type="radio" name="payment" value="bank" id="bank" required checked>
                              <label for="bank">bank</label>
                          </div>
                          <img src="../../resources/img/icons/bkash.png" alt="bkash">
                      </div>
                      <div class="cashondelivery" style="display: flex;">
                          <input type="radio" name="payment" value="cashOnDelivery" id="cashOnDelivery" required>
                          <label for="cashOnDelivery">Cash on delivery</label>
                      </div>
                  </div>
                  <div class="place-order">
                      <button popovertarget="payment" type="button" class="btn place-order-btn">Place Order</button>
                      <div id="payment" popover="manual">
                          <div class="close-button">
                              <button type="button" class="side-menu-btn menu-close" popovertarget="payment" popovertargetactive="hide"><i class="fa-regular fa-xmark"></i></button>
                          </div>
                          <div class="full-payment">
                              <p class="payment-condition full-pay">To make a payment, send <span class="payment-out">৳ 00.00</span> taka via bKash and fill in the required details.</p>
                              <p class="payment-condition advance-pay">To order, send an advance of ৳ 200.00 via bKash and fill in the required details.</p>
                              <div class="bkash-number-box">
                                  <img src="../../resources/img/icons/bkash.png" alt="bkash">
                                  <p class="number">01908111251</p>
                                  <button class="btn copy-btn" type="button">copy</button>
                              </div>
                              <label for="payment-date">payment date<sup>*</sup></label>
                              <input name="Payment-date" type="date" id="payment-date" required>
                              <label for="trxID">trxID<sup>*</sup></label>
                              <input name="trxID" type="text" id="trxID" required>
                          </div>
                          <div class="submit-btn">
                              <button type="submit" class="btn place-order" id="order-place">place order</button>
                              <div id="loader"></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      </form>
  <!-- footer section -->
      <footer class="footer-secion">
          <div class="row">
              <div class="footer-col">
                  <h4 class="footer-title">Exclusive</h4>
                  <a href="#" class="links" style="font-weight: 600;">Subscribe</a>
                  <p class="links">Get 10% off your first order</p>
              </div>
              <div class="footer-col">
                  <h4 class="footer-title">Support</h4>
                  <p class="links">IBRAHIM</p>
                  <p class="links" style="text-transform: none;">amarbazardotcom009@gmail.com</p>
                  <p class="links">+880 1908-111251</p>
              </div>
              <div class="footer-col">
                  <h4 class="footer-title">Account</h4>
                  <a href="#" class="links">My Account</a>
                  <a href="../pages/logIn.html" class="links">Login / Register</a>
                  <a href="#" class="links">Cart</a>
                  <a href="#" class="links">Wishlist</a>
                  <a href="#" class="links">Shop</a>
              </div>
              <div class="footer-col">
                  <h4 class="footer-title">Quick Link</h4>
                  <a href="#" class="links">Privacy Policy</a>
                  <a href="#" class="links">Terms Of Use</a>
                  <a href="#" class="links">FAQ</a>
                  <a href="#" class="links">Contact</a>
              </div>
              <div class="footer-col">
                  <h4 class="footer-title">Download App</h4>
                  <span class="coming-soon">coming soon</span>
              </div>
          </div>
          <div class="row">
              <p class="copyright">&copy; Copyright AmarBazar.com 2024. All right reserved</p>
          </div>
      </footer>
      <!-- script -->
      <script src="../../resources/js/cashOut.js"></script>
  </body>
  </html>`;

  // Create and open the new window with the content
  const newWindow = window.open('', '_self');
    newWindow.document.write(newPageContent);
    newWindow.document.close();
});