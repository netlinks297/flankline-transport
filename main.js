const menuBtn = document.getElementById("menu-btn");
const navlinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navlinks.classList.toggle("open");

    const isopen = navlinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isopen? "ri-close-line":"ri-menu-line")
});

navlinks.addEventListener("click", (e) =>{
    navlinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
});
function generateQuotation() {
    // Get form values
    const customerName = document.getElementById('customerName').value;
    const quotationDate = document.getElementById('quotationDate').value;
    const itemDescription = document.getElementById('itemDescription').value;
    const itemPrice = document.getElementById('itemPrice').value;
  
    // Validate form
    if (!customerName || !quotationDate || !itemDescription || !itemPrice) {
      alert('Please fill in all fields');
      return;
    }
  
    // Format the quotation HTML
    const quotationHTML = `
      <p><strong>Customer Name:</strong> ${customerName}</p>
      <p><strong>Quotation Date:</strong> ${quotationDate}</p>
      <p><strong>Item Description:</strong> ${itemDescription}</p>
      <p><strong>Price:</strong> $${parseFloat(itemPrice).toFixed(2)}</p>
    `;
  
    // Display the generated quotation
    document.getElementById('quotationDetails').innerHTML = quotationHTML;
    document.getElementById('quotationDisplay').style.display = 'block';
  }
  
  function printQuotation() {
    const content = document.getElementById('quotationDisplay').innerHTML;
    const printWindow = window.open('', '', 'height=600,width=800');
    printWindow.document.write('<html><head><title>Quotation</title>');
    printWindow.document.write('<link rel="stylesheet" type="text/css" href="styles.css">');
    printWindow.document.write('</head><body>');
    printWindow.document.write(content);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  }
  