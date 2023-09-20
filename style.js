new kursor({
    type: 1,
    removeDefaultCursor: true,
});

document.querySelector('#controls').addEventListener('click', (event) => {
    const $slide = document.querySelector(event.target.getAttribute('href'));
    if (!$slide) return; 

    if ($slide.scrollIntoViewIfNeeded) {
      event.preventDefault();
      $slide.scrollIntoViewIfNeeded();
    } else if ($slide.scrollIntoView) {
      event.preventDefault();
      $slide.scrollIntoView();
    }
});


const toggleButton = document.getElementById('menu-toggle');
        const navLink = document.getElementById('menu');
            // const toggle = document.getElementById('toggle')
        toggleButton.addEventListener('click', () => {
            navLink.classList.toggle('active');
            toggleButton.classList.toggle('active')
          
        })


        const slider = ()=>{
    const slideRef = document.createElement("div")
    const loadingProgress = 0;
    const handleClickNext =()=>{                      
        let items = slideRef.querySelectorAll(".item");
        slideRef.appendChild(items[0]);
    }
    const handleClickPrev =()=>{
        let items = slideRef.querySelectorAll(".item");
        slideRef.prepend(items[items.length-1]);
    }
    const data = [
        {id:1, imgUrl: "https://i.postimg.cc/PxxyYwpK/Badhangarhi-temple-gawldan.jpg", name: "TungNath", desc:"Touch the Divine Heights at Tungnath"},
        {id:2, imgUrl: "https://i.postimg.cc/Tw8mNkRH/IMG-20230823-134311.jpg", name: "Almora Hills", desc:"Tranquil Serenity in the Heart of the Almora Hills"},
        {id:3, imgUrl: "https://i.postimg.cc/WzMZPsHR/Birthi-falls-munsyari-carousel.jpg",name: "Munsyari", desc:"Peaks and Purity Converge in Munsiyari"},
        {id:4, imgUrl: "https://i.postimg.cc/4388qRKN/Dhanaulti-carousel.jpg",name: "Dhanaulti", desc:"Dreamy Escapes in Dhanaulti's Embrace"},
        {id:5, imgUrl: "https://i.postimg.cc/ydxQ0mhN/Uttarkashi-carousel.jpg",name: "Uttarkashi", desc:"Gateway to Spiritual Adventure"},
        {id:6, imgUrl: "https://i.postimg.cc/T1RkXKYm/IMG-20230823-140827.jpg", name: "Urgam Valley", desc:"Urgam Valley: Where Nature's Secrets Unveil"}
    ]
    // create the container div
    const container=document.createElement("div");
    container.classList.add('container');

    //create the loadbar div
    const loadbar = document.createElement("div")
    loadbar.classList.add("loadbar");
    loadbar.style.width= `${loadingProgress}%`

    //Append loadbar to container
    container.appendChild(loadbar);
    //Append slide div to container
    container.appendChild(slideRef);

    // create and append items to slide div
    data.forEach((item)=>{
        const slideItem = document.createElement("div");
        slideItem.classList.add("item");
        slideItem.style.backgroundImage = `url(${item.imgUrl})`;

        const content = document.createElement("div");
        content.classList.add("content");

        const name = document.createElement("div");
        name.classList.add("name");
        name.textContent = item.name;

        const des = document.createElement("div");
        des.classList.add("des");
        des.textContent = item.desc;

        const button = document.createElement("button");
        button.textContent = "See More";
        content.appendChild(name);
        content.appendChild(des);
        content.appendChild(button);
        slideItem.appendChild(content);
        slideRef.appendChild(slideItem)

        //create the buttons div
        const buttons = document.createElement("div");
        buttons.classList.add("buttons");

        //create the prev button
        const prevButton = document.createElement("button");
        prevButton.id = "prev";
        prevButton.addEventListener("click",handleClickPrev);

        const prevIcon = document.createElement("i");
        prevIcon.className = "fa-solid fa-angle-left";
        prevButton.appendChild(prevIcon);

        // create the next button
        const nextButton = document.createElement("button");
        nextButton.id = "next"
        nextButton.addEventListener("click", handleClickNext);

        const nextIcon = document.createElement("i");
        nextIcon.className = "fa-solid fa-angle-right" ;
        nextButton.appendChild(nextIcon);

        //Append buttons to the container 
        buttons.appendChild(prevButton)
        buttons.appendChild(nextButton)
        container.appendChild(buttons)

    });
    // Add the complete container to the DOM  
    document.getElementById("root").appendChild(container);

};

slider();



// Function to open the payment modal
function openPaymentModal(clickedButton) {
    document.getElementById('paymentModal').style.display = 'block';
    const price = clickedButton.getAttribute("data-price");
    const payButton = document.getElementById("rzp-button1");
  
    // Update the data-amount attribute of the Pay button with the price
    payButton.setAttribute("data-amount", price);
  }
  
    // Function to close the payment modal
    function closePaymentModal() {
      document.getElementById("paymentModal").style.display = "none";
    }
    
    // Function to process the payment (placeholder for actual payment processing)
    function processPayment() {
      var options = {
          "key": "rzp_test_oi2u96AJ1CIWSY", // Enter the Key ID generated from the Dashboard
          "amount": document.getElementById("rzp-button1").getAttribute("data-amount")*100, 
          "currency": "INR",
          "name": "Trek & Tales", //your business name
          "description": "Test Transaction",
          "image": "https://i.postimg.cc/VvK5HhQN/logo.jpg",
          "handler": function (response){
              alert(response.razorpay_payment_id);
              
              alert(response.razorpay_signature)
          },
          "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
              "name": document.getElementById("name").value, //your customer's name
              "email": document.getElementById("email").value, 
              "contact": document.getElementById("contact").value  //Provide the customer's phone number for better conversion rates 
          },
          "notes": {
              "address": "Razorpay Corporate Office"
          },
          "theme": {
              "color": "#3399cc"
          }
      };
  
      var rzp1 = new Razorpay(options);
      rzp1.on('payment.failed', function (response){
              alert(response.error.code);
              alert(response.error.description);
              alert(response.error.source);
              alert(response.error.step);
              alert(response.error.reason);
              alert(response.error.metadata.payment_id);
      });
  
      document.getElementById('rzp-button1').onclick = function(e){
          rzp1.open();
          e.preventDefault();
      }
      
    }







    
    
    

