// visuals.js

function updateVisuals(showStudied, showRP, showFocus, showDemand, showDispose, showStudy, showSell) {
    if (showStudied) {
        document.getElementById('studiedContainer').style.display = 'block';
    }
    else{
        document.getElementById('studiedContainer').style.display = 'none';
    }

    if (showRP) {
        document.getElementById('rpContainer').style.display = 'block';
    }
    else{
         document.getElementById('rpContainer').style.display = 'none';
    }

    if (showFocus) {
        document.getElementById('focusContainer').style.display = 'block';
    }
    else{
        document.getElementById('focusContainer').style.display = 'none';
    }

    if (showDemand) {
        document.getElementById('demandContainer').style.display = 'block';
    }
    else{
        document.getElementById('demandContainer').style.display = 'none';
    }

    if (showDispose) {
        document.getElementById('disposeContainer').style.display = 'block';
    }
    else{
        document.getElementById('disposeContainer').style.display = 'none';
    }

    if (showStudy) {
        document.getElementById('studyContainer').style.display = 'block';
    }
    else {
        document.getElementById('studyContainer').style.display = 'none';
    }

    if (showSell) {
        document.getElementById('sellContainer').style.display = 'block';
    }
    else{
        document.getElementById('sellContainer').style.display = 'none';
    }
}
