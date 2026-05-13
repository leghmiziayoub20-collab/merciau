function sendEmail()  {
    const Data = {
        to_email : "acrb371@gmail.com",
        from_name: document.getElementById("name").value,
        from_email : "acrb371@gmail.com",
        subject : "support",
        message : `
        
        name : ${document.getElementById("name").value}
        email : ${document.getElementById("email").value}
        message : ${document.getElementById("message").value}
        
        `,

    };
    emailjs,send("service_icpvtwp" , "template_cfyvysm", Data).then((response) => {
        alert('success');
    }).catch((error) => {
        alert(+error);

    });
}



document.getElementById("btn").addEventListener("click", () => {
    sendEmail();
})