function slumpRecept() {
    return Math.ceil(Math.random() * 12);
}

// Hackad lösning - Make it work!
document.addEventListener("DOMContentLoaded", () => {
    const allaRecepet = document.querySelectorAll('.recepten__artikel');
    const slumpat = slumpRecept();

    allaRecepet.forEach((element) => {
        x = element.getAttribute("data-id")

        if (slumpat == x) {
            element.classList.remove("hidden")
        }
    })

})



document.addEventListener('DOMContentLoaded', function () {

    function slumpRecept() {
        return Math.ceil(Math.random() * 12);
    }


    let results = new Set();
    while (results.size < 4) {
        results.add(slumpRecept());
    }
    results = Array.from(results);

    console.log(results);


    const allaRecept = document.querySelectorAll('.recepten__artikel__main');
    results.forEach(slumpat => {
        allaRecept.forEach(element => {
            const x = element.getAttribute("data-i");
            if (slumpat == x) {
                element.classList.remove("hidden__main");
            }
        });
    });

});


