// Toggle the sidebar visibility
function toggleNavbar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    sidebar.classList.toggle('show-sidebar');
    content.classList.toggle('show-content');
  }
  
  // Close the dropdown if clicked outside (only needed for sidebar)
  document.addEventListener('click', function(event) {
    const sidebar = document.getElementById('sidebar');
    const content = document.getElementById('content');
    const toggleButton = document.querySelector('.toggle-btn');
  
    // Close sidebar if clicking outside of it
    if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
      sidebar.classList.remove('show-sidebar');
      content.classList.remove('show-content');
    }
  });
  
  
  
  
  
  
  
  
  
  
  
  
  // -------------glass claener?
  
  
  // Function to handle image change and price update every 4 seconds
  let currentImageIndex = 0; // Keeps track of the current image index
  const images = [
    {
      src: './Clean_aura_web_img/CA_GlassCleaner_500ml.png',
      price: '500rs <s>rs 300/-</s>', // 500ml
    },
    {
      src: './Clean_aura_web_img/CA_GlassCleaner_5ltr.png',
      price: '  For 5L -  ₹4000/- <s>rs 500/-</s>', // 5L
    }
  ];
  
  function changeProduct() {
    setInterval(() => {
      // Toggle between the two images
      currentImageIndex = (currentImageIndex + 1) % images.length;
      const productImage = document.getElementById('product-image');
      const productPrice = document.getElementById('price');
      
      // Update the image and price
      productImage.src = images[currentImageIndex].src;
      productPrice.innerHTML = images[currentImageIndex].price;
  
    }, 4000); // Change the image every 4 seconds
  }
  
  
  // Function to open the modal with the selected image and price
  function openModal() {
    const modal = document.getElementById("product-modal");
    const img = document.getElementById("product-image").src;
    const price = document.getElementById("price").innerHTML;
  
    document.getElementById("popup-image").src = img;
    document.getElementById("popup-price").innerHTML = price;
  
    modal.classList.add("show"); // Show the modal
  }
  
  // Function to close the modal
  function closeModal() {
    const modal = document.getElementById("product-modal");
    modal.classList.remove("show"); // Hide the modal
  }
  
  // Start the image change functionality when the page loads
  changeProduct();
  