function Register(event) {
    event.preventDefault();
    // console.log(document.getElementById("userName").value)
    var name = document.getElementById("userName").value;
    // console.log(name, "name here");
    var email = document.getElementById("userEmail").value;
    // console.log(email, "email here");
    var password = document.getElementById("userPassword").value;
    // console.log(password, "password here");
    var confrimPassword = document.getElementById("userConfirmPassword").value;
    // console.log(confrimPassword, "confrimPassword here");


    // First step - get ls if it available then take it or use empty Array 
    // Second step - push new user data into step 1 array 
    // Third step - Save updated data into LS 










































    // var LS = JSON.parse(localStorage.getItem("Users")) || [];
    // // console.log(LS[2], " - LS here")
    // var flag = false;
    // for (var i = 0; i < LS.length; i++) {
    //     // console.log(LS[i].userEmail, i)
    //     if (LS[i].userEmail == email) {
    //         // console.log("Matched")
    //         flag = true;
    //     }
    // }
    // // console.log(flag, "if true we got simliar, if false its uniwque ")
    // if(!flag){
    //     console.log("Good to go for reg.")
    // } else {
    //     console.log("Email Matched.")
    // }

    if (name && email && password && confrimPassword) {
        if (password.length >= 8 && confrimPassword >= 8) {
            if (password == confrimPassword) {
                var LS = JSON.parse(localStorage.getItem("Users")) || [];
                var flag = false;
                for (var i = 0; i < LS.length; i++) {
                    if (LS[i].userEmail == email) {
                        flag = true;
                    }
                }
                if (!flag) {
                    var userData = { userName: name, userEmail: email, userPassword: password };
                    LS.push(userData);
                    localStorage.setItem("Users", JSON.stringify(LS));
                    alert("Registration Successful.")
                    document.getElementById("userName").value = "";
                    document.getElementById("userEmail").value = "";
                    document.getElementById("userPassword").value = "";
                    document.getElementById("userConfirmPassword").value = "";
                } else {
                    alert("Email already Present!")
                }
            } else {
                console.log("Password not matched...")
            }
        } else {
            console.log("Password should be 8 or more digit...")
        }
    } else {
        console.log("Please fill all the firlds..")
    }
}



// var vrushabh = [12, 34, 57, 89, "JHG"];
// // console.log(vrushabh[0])
// var instituteData = {
//     instituteName: "awdiz", noOfStudents: { bath1: 12, batch2: [7, 34, 65, 78, 987] },
//     noOfClass: 2, nameOfTeachers: ["swaraj", "siddharth", 987, 98]
// }
// var array = instituteData.nameOfTeachers;
// console.log(array, "array")
