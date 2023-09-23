

document.addEventListener("DOMContentLoaded", function () {


    // -------DISPLAY VALUES 


    let showStudy   = localStorage.getItem("showStudy") === "true";
    let showRP      = localStorage.getItem("showRP") === "true";
    let showStudied = localStorage.getItem("showStudied") === "true";
    let showFocus   = localStorage.getItem("showFocus") === "true";
    let showDemand  = localStorage.getItem("showDemand") === "true";
    let showDispose = localStorage.getItem("showDispose") === "true";
    let showSell    = localStorage.getItem("showSell") === "true";
    let showRPThresh       = 20
    let decomposeThreshold = 20
    let currentRPThreshold = 100;

    updateVisuals(showStudied, showRP, showFocus, showDemand, showDispose, showStudy, showSell);


    // STORAGE VALUES
    
    let totalMatter         = parseInt(localStorage.getItem("totalMatter") || 2123000);
    let currentMatterCount  = parseInt(localStorage.getItem("currentMatterCount") || 0);
    let currentRPcount      = parseInt(localStorage.getItem("currentRPcount") || 0);
    let decomposition       = !!localStorage.getItem("decomposition");
    let currentStudiedVal   = parseInt(localStorage.getItem("currentStudiedVal") || 0);



    // GET OUR ELEMENTS

    
    const currentMatterNameEl  = document.getElementById("currentMatterName");
    const totalMatterEl        = document.getElementById("totalMatter");
    const currentMatterCountEl = document.getElementById("currentMatterCount");
    const currentRPEl          = document.querySelector("#rpContainer #currentRP");
    const studiedProgressEl    = document.querySelector("#studiedContainer #studiedProgress");
    

    // BUTTONS
    const collectBtn           = document.getElementById("collectBtn");
    const studyBtn             = document.querySelector("#studyContainer button");
    const resetBtn             = document.getElementById("resetBtn");







    // SET TOP TEXT
    totalMatterEl.innerText        = totalMatter;
    

    // INIT VALUES
    let selectedMatter = "Ant Remnants";





    //-------------------------------------------------------------------------------------
    //
    //                         FUNCTIONS
    //
    //-------------------------------------------------------------------------------------



    let currentlyDecomposing = false;
    let runDecompose;  // Moved to top-level scope for potential later use
    function mainLogic(){


        // --------------DECOMPOSE

        // toggle flag if condition met
        if(currentMatterCount >decomposeThreshold && decomposition==false){
            decomposition = true
            localStorage.setItem("decomposition", String(decomposition));
            runDecompose = setInterval(decomposeDecriment, 2000);
        }

        if(decomposition==true && currentlyDecomposing==false){
            runDecompose = setInterval(decomposeDecriment, 2000);
            currentlyDecomposing = true
        }


        // ------------UNLOCK STUDY, FOCUS AND RESEARCH

        if(currentRPcount>20){

            showFocus     = true;
            showStudied   = true;
            localStorage.setItem("showFocus", String(showFocus));
            localStorage.setItem("showStudied", String(showStudied));
            updateVisuals(showStudied, showRP, showFocus, showDemand, showDispose, showStudy, showSell);

        }

        if(currentRPcount>=currentRPThreshold){
            currentRPcount = 0;

        }










        if(showStudied==true){
            studiedProgressEl.value   = currentStudiedVal;
        }



    }



    function decomposeDecriment(){
        console.log('decomposing decreiment');
        if(decomposition==true && currentMatterCount>0){

            // tick down currentMatterCount every
            currentMatterCount --;
            currentMatterCountEl.innerText   = String(currentMatterCount);
            localStorage.setItem("currentMatterCount", String(currentMatterCount));
         }
    }


    function setTextElements(){
        // CONDITIONALLY SET INNER TEXT
        if (selectedMatter === "Ant Remnants") {
            currentMatterNameEl.innerText  = "Ant Remnants";
            currentMatterCountEl.innerText = currentMatterCount;
            currentRPEl.innerText          = currentRPcount
        }

    }


    // VISUALS
    function manageVisuals(){
        
        if(currentMatterCount > showRPThresh && !showRP){
            showRP    = true
            showStudy = true
            localStorage.setItem("showRP", String(showRP));
            localStorage.setItem("showStudy", String(showStudy));
            updateVisuals(showStudied, showRP, showFocus, showDemand, showDispose, showStudy, showSell);

        }
    }





    //-------------------------------------------------------------------------------------
    //
    //                         FUNCTION EXECUTIONS 
    //
    //-------------------------------------------------------------------------------------





    
    manageVisuals();
    setTextElements();

    // runs continuously 
    let intervalID = setInterval(mainLogic, 100);
    //clearInterval(intervalID);







    //-------------------------------------------------------------------------------------
    //
    //                         BUTTONS
    //
    //-------------------------------------------------------------------------------------






    // ----------COLLECT BUTTON 

    collectBtn.addEventListener("click", function () {
        

        // UPDATE ORGANIC MATTER 
        totalMatter++;
        totalMatterEl.innerText        = String(totalMatter);
        localStorage.setItem("totalMatter", String(totalMatter));
        
        // UPDATE ORGANIC MATTER 
        currentMatterCount++;
        currentMatterCountEl.innerText   = String(currentMatterCount);
        localStorage.setItem("currentMatterCount", String(currentMatterCount));


        


        manageVisuals()




        // Border color change logic
        this.classList.add("pressed");

        // After 1/6th of a second (166.7ms), remove the pressed class
        setTimeout(() => {
            this.classList.remove("pressed");
        }, 200);
    });


    // ----------STUDY BUTTON 

    studyBtn.addEventListener("click", function () {
        
        // update values
        if(currentMatterCount>0){
            currentRPcount++;
            currentMatterCount --;

            if(showStudied==true){
                currentStudiedVal++;
                localStorage.setItem("currentStudiedVal", String(currentStudiedVal));
            }

            // update display
            currentRPEl.innerText            = String(currentRPcount);
            currentMatterCountEl.innerText   = String(currentMatterCount);
            
            // store
            localStorage.setItem("currentRPcount", String(currentRPcount));
            localStorage.setItem("currentMatterCount", String(currentMatterCount));

        }


        // Border color change logic
        this.classList.add("pressed");

        // After 1/6th of a second (166.7ms), remove the pressed class
        setTimeout(() => {
            this.classList.remove("pressed");
        }, 200);


    }
    )



    

    resetBtn.addEventListener("click", function () {

        localStorage.clear();
        // Reset values
        totalMatter = 2123000;
        currentMatterCount = 0;

        // Update elements
        totalMatterEl.innerText        = totalMatter;
        currentMatterCountEl.innerText = currentMatterCount;
        currentRPEl.innerText          = 0;

        // Update localStorage
        localStorage.setItem("totalMatter", totalMatter);
        localStorage.setItem("currentMatterCount", currentMatterCount);
        localStorage.setItem("currentRPcount", 0);


        let showStudied  = false;   
        let showRP       = false;
        let showFocus    = false;
        let showDemand   = false;
        let showDispose  = false;
        let showStudy    = false;
        let showSell     = false;
        let showRPThresh = 20


        manageVisuals();
        updateVisuals(showStudied, showRP, showFocus, showDemand, showDispose, showStudy, showSell);
        setTextElements();
        clearInterval(intervalID);

        alert("Values have been reset!");

    });




});
