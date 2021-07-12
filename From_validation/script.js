// Defining a function to display error message
// function printError(elemId, hintMsg) {
//     document.getElementById(elemId).innerHTML = hintMsg;
// }

// Defining a function to validate form 
function validateForm() {
    //Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var country = document.contactForm.country.value;
    var gender = document.contactForm.gender.value;
    var postCode = document.contactForm.postCode.value;
    var btn = document.getElementById(btn);

    var name = document.getElementById('name');
    alert(name);
    var hobbies = [];
    var checkboxes = document.getElementsByName("hobbies[]");
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            // Populate hobbies array with selected values
            hobbies.push(checkboxes[i].value);
        }
    }

    // Defining error variables with a default value
    var nameErr = emailErr = mobileErr = countryErr = genderErr = postErr = true;

    //Validate postCode
    if (postCode == "") {
        printError("postErr", "Please enter your Post Code");
    } else {
        //var regex = /^[1-9]\d{9}$/;
        var regex = /^\\d{4}$/;

        if (regex.test(postCode) === false) {
            printError("postErr", "Please enter a valid 4 digit Post Code");
        } else {
            printError("postErr", "");
            mobileErr = false;
        }
    }

    // Validate name
    if (name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }

    // Validate email address
    if (email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else {
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate mobile number
    if (mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        //var regex = /^[1-9]\d{9}$/;
        var regex = /^(?:\+88|88)?(01[346789]\d{8})$/
        if (regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else {
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

    // Validate country
    if (country == "Select") {
        printError("countryErr", "Please select your country");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }

    // Validate gender
    if (gender == "") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }
    alert("Form Submitted Successfully!");
    return true;
    //document.alert("Full Name: " + name + "\n" + "Email Address: " + email + "\n" + "Mobile Number: " + mobile + "\n" + "Country: " + country + "\n" + "Gender: " + gender + "\n" + "PostCode: " + postCode + "\n");

    // Prevent the form from being submitted if there are any errors
    if ((nameErr || emailErr || mobileErr || countryErr || genderErr || postErr) == true) {
        return false;
    }
    // else {
    //     // Creating a string from input data for preview
    //     var dataPreview = "You've entered the following details: \n" +
    //         "Full Name: " + name + "\n" +
    //         "Email Address: " + email + "\n" +
    //         "Mobile Number: " + mobile + "\n" +
    //         "Country: " + country + "\n" +
    //         "Gender: " + gender + "\n" +
    //         "PostCode: " + postCode + "\n";
    //     /*if (hobbies.length) {
    //         dataPreview += "Hobbies: " + hobbies.join(", ");
    //     }*/
    //     // Display input data in a dialog box before submitting the form
    //     alert(dataPreview);
    // } else {
    document.alert("Full Name: " + name + "\n" + "Email Address: " + email + "\n" + "Mobile Number: " + mobile + "\n" + "Country: " + country + "\n" + "Gender: " + gender + "\n" + "PostCode: " + postCode + "\n");
}
};