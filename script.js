document.addEventListener("DOMContentLoaded", function () {
    const darkModeInput = document.querySelector(".darkModeToggle")
    const body = document.body

    darkModeInput.addEventListener("change", function () {
        if (darkModeInput.checked) {
            body.classList.add("dark-mode");
            localStorage.setItem("darkmode", "enabled")
        } else{
            body.classList.remove("dark-mode");
            localStorage.setItem("darkmode", "disabled")
        }
    })
})