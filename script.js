
    const forms = document.querySelector(".forms");
    const pwShowHide = document.querySelectorAll(".eye-icon");
    const links = document.querySelectorAll(".link");

    console.log("forms:", forms);
    console.log("pwShowHide:", pwShowHide);
    console.log("links:", links);

    pwShowHide.forEach(eyeIcon => {
        eyeIcon.addEventListener("click", () => {
            console.log("Click sur eyeIcon");

            let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
            pwFields.forEach(password => {
                if (password.type === "password") {
                    password.type = "text";
                    eyeIcon.classList.replace("bx-hide", "bx-show");
                    return;
                }
                password.type = "password";
                eyeIcon.classList.replace("bx-show", "bx-hide");
            });
        });
    });

    links.forEach(link => {
        link.addEventListener("click", e => {
            console.log("Click sur link");

            e.preventDefault(); // Prévenir la soumission du formulaire
            forms.classList.toggle("show-signup");
        });
    });

    console.log("Fin du script");

    