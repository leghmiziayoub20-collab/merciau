function sendEmail() {
    const Data = {
        to_email: "acrb371@gmail.com",
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: "support",
        message: `
name: ${document.getElementById("name").value}
email: ${document.getElementById("email").value}
message: ${document.getElementById("message").value}
`
    };

    emailjs.send("service_icpvtwp", "template_cfyvysm", Data)
        .then(() => {
            alert("sent successfully");
        })
        .catch((error) => {
            alert(error.text || error.message);
        });
}

document.querySelector(".form-box").addEventListener("submit", (e) => {
    e.preventDefault(); // 👈 هادي هي الحل
    sendEmail();
});


