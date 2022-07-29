// function myFunctionA(event) {

//     event.preventDefault();
//     console.log(event);

//     document.getElementById('form').style.display ='none';
//     document.getElementById('wrap').style.display = 'block';
// }

function myFunction(showStuff) {
    showStuff.preventDefault();
    
    document.getElementById('form').style.display ='none';
    
    let dogs = document.querySelectorAll('.product_grid');
    dogs.forEach(e => {e.style.display ='none'});
    
    // if (persona.value != "bitofboth") {
        let divPersona = document.querySelectorAll("[data-personality='" + persona.value + "']");
        console.log("[data-personality='" + persona.value + "']");
        divPersona.forEach(divP => {
            divP.style.display = 'block';
        })

        let divSize = document.querySelectorAll("[data-size='" + sizeofdog.value + "']");
        console.log("[data-sizeofdog='" + sizeofdog.value + "']");
        divSize.forEach(divS => {
        divS.style.display = 'block';
        })

        let divActivity = document.querySelectorAll("[data-activity='" + activity.value + "']");
        console.log("[data-personality='" + activity.value + "']");
        divActivity.forEach(divA => {
        divA.style.display = 'block';
        })
    // }
    
            
}