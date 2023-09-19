

document.addEventListener("DOMContentLoaded", function () {


    // -------DISPLAY VALUES 

    let showStudied  = false;   
    let showRP       = false;
    let showFocus    = false;
    let showDemand   = false;
    let showDispose  = false;
    let showStudy    = false;
    let showSell     = false;
    let showRPThresh = 20

    updateVisuals(showStudied, showRP, showFocus, showDemand, showDispose, showStudy, showSell);



    // GET OUR ELEMENTS

    
    const currentMatterNameEl  = document.getElementById("currentMatterName");
    const organicMatterEl      = document.getElementById("organicMatter");
    const currentMatterCountEl = document.getElementById("currentMatterCount");
    const currentRPEl          = document.querySelector("#rpContainer #currentRP");
    

    // BUTTONS
    const collectBtn           = document.getElementById("collectBtn");
    const studyBtn             = document.querySelector("#studyContainer button");



    // STORAGE VALUES
    
    let organicMatter       = parseInt(localStorage.getItem("organicMatter") || 2123000);
    let currentMatterCount  = parseInt(localStorage.getItem("currentMatterCount") || 0);
    let currentRPcount      = parseInt(localStorage.getItem("currentRPcount") || 0);



    // SET TOP TEXT
    organicMatterEl.innerText        = organicMatter;
    


    // INIT VALUES
    let selectedMatter = "Ant Remnants";


    function setTextElements(){
        // CONDITIONALLY SET INNER TEXT
        if (selectedMatter === "Ant Remnants") {
            currentMatterNameEl.innerText  = "Ant Remnants";
            currentMatterCountEl.innerText = currentMatterCount;
            currentRPEl.innerText          = currentRPcount
        }

    }


    function mainLogic(){
        if(currentMatterCount>100){
            // tick down currentMatterCount every
        }

    }

    // runs once 
    
    manageVisuals();
    setTextElements();








    // ----------COLLECT BUTTON 

    collectBtn.addEventListener("click", function () {
        

        // LOGIC CHANGES

        organicMatter++;
        currentMatterCount++;

        // UPDATING ELEMENTS

        organicMatterEl.innerText        = String(organicMatter);
        currentMatterCountEl.innerText   = String(currentMatterCount);

        // UPDATE LOCAL STORAGE VALUE 

        localStorage.setItem("organicMatter", String(organicMatter));
        localStorage.setItem("currentMatterCount", String(currentMatterCount));


        manageVisuals()




        // Border color change logic
        this.classList.add("pressed");

        // After 1/6th of a second (166.7ms), remove the pressed class
        setTimeout(() => {
            this.classList.remove("pressed");
        }, 200);
    });


    studyBtn.addEventListener("click", function () {
        // update values
        currentRPcount++;
        currentMatterCount --;

        // update display
        currentRPEl.innerText            = String(currentRPcount);
        currentMatterCountEl.innerText   = String(currentMatterCount);
        
        // store
        localStorage.setItem("currentRPcount", String(currentRPcount));
        localStorage.setItem("currentMatterCount", String(currentMatterCount));

        // Border color change logic
        this.classList.add("pressed");

        // After 1/6th of a second (166.7ms), remove the pressed class
        setTimeout(() => {
            this.classList.remove("pressed");
        }, 200);


    }
    )

    // VISUALS
    function manageVisuals(){
        
        if(currentMatterCount > showRPThresh && !showRP){
            showRP = true
            showStudy = true
            updateVisuals(showStudied, showRP, showFocus, showDemand, showDispose, showStudy, showSell);

        }
    }


    const resetBtn = document.getElementById("resetBtn");

    resetBtn.addEventListener("click", function () {
        // Reset values
        organicMatter = 2123000;
        currentMatterCount = 0;

        // Update elements
        organicMatterEl.innerText     = organicMatter;
        currentMatterCountEl.innerText = currentMatterCount;
        currentRPEl.innerText          = 0;

        // Update localStorage
        localStorage.setItem("organicMatter", organicMatter);
        localStorage.setItem("currentMatterCount", currentMatterCount);
        localStorage.setItem("currentRPcount", 0);

        alert("Values have been reset!");
    });




});
