//your JS code here. If required.
   function displayResults() {
            let firstName = document.getElementById("first-name").value;
            let lastName = document.getElementById("last-name").value;
            let phoneNumber = document.getElementById("Phone-Number").value;
            let email = document.getElementById("Email-ID").value;

            let resultMessage = "First Name: " + firstName + "\n" +
                                  "Last Name: " + lastName + "\n" +
                                  "Phone Number: " + phoneNumber + "\n" +
                                  "Email ID: " + email;

            alert(resultMessage);
        }