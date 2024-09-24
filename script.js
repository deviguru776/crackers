
  function validateForm(event) {
     event.preventDefault(); // Prevent the form from submitting
 
     // Get form values
     const name = document.getElementById('exampleInputname').value;
     const email = document.getElementById('exampleInputEmail1').value;
     const mobile = document.getElementById('exampleInputMobileNumber').value;
     const whatsapp = document.getElementById('exampleInputWhatsappnumber').value;
 
     // Validate form fields
     if (!name || !email || !mobile || !whatsapp) {
       alert("Please fill out all fields.");
       return false;
     }
 
     // If everything is filled out, you can submit the form
     alert("Form submitted successfully!");
     // Here you could also submit the form programmatically if needed
     // document.querySelector('form').submit();
   }