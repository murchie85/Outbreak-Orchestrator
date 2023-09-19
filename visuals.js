// visuals.js

function updateVisuals(showStudied, showRP, showFocus, showDemand, showDispose, showStudy, showSell) {
    if (showStudied) {
        document.getElementById('studiedContainer').style.display = 'block';
    }
    if (showRP) {
        document.getElementById('rpContainer').style.display = 'block';
    }
    if (showFocus) {
        document.getElementById('focusContainer').style.display = 'block';
    }
    if (showDemand) {
        document.getElementById('demandContainer').style.display = 'block';
    }
    if (showDispose) {
        document.getElementById('disposeContainer').style.display = 'block';
    }
    if (showStudy) {
        document.getElementById('studyContainer').style.display = 'block';
    }
    if (showSell) {
        document.getElementById('sellContainer').style.display = 'block';
    }
}
