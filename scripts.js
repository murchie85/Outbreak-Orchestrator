document.addEventListener("DOMContentLoaded", function () {
    const organicMatterEl = document.getElementById("organicMatter");
    const rodentCountEl = document.getElementById("rodentCount");
    const collectBtn = document.getElementById("collectBtn");  // using 'collectBtn' ID

    // Load saved data from localStorage or use default values
    const organicMatter = localStorage.getItem("organicMatter") || 2123000;
    const rodentCount = localStorage.getItem("rodentCount") || 0;

    organicMatterEl.innerText = organicMatter;
    rodentCountEl.innerText = rodentCount;




    // ----------COLLECT BUTTON 

    collectBtn.addEventListener("click", function () {
        let organicMatterValue = parseInt(organicMatterEl.innerText);
        let rodentCountValue = parseInt(rodentCountEl.innerText);

        organicMatterValue++;
        rodentCountValue++;

        organicMatterEl.innerText = organicMatterValue;
        rodentCountEl.innerText = rodentCountValue;

        // Save to localStorage
        localStorage.setItem("organicMatter", organicMatterValue);
        localStorage.setItem("rodentCount", rodentCountValue);

        // Border color change logic
        this.classList.add("pressed");

        // After 1/6th of a second (166.7ms), remove the pressed class
        setTimeout(() => {
            this.classList.remove("pressed");
        }, 200);
    });








});
