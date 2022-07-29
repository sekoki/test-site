function myFunction(event) {

    event.preventDefault();
    console.log(event);

    document.getElementById('form').style.display ='none';
    document.getElementById('wrap').style.display = 'block';

function myFunction(showStuff) {

    // This works but shows all the images

        // let divs = document.getElementById('wrap');

        // if (persona.value == 'introvert') {
        //     divs.style.display = 'block';


    // This doesn't work and should show only product_img_2 and hide product_img_3 when introvert is chosen
        let divs = document.querySelectorAll('.product_grid,.column_2,.product_img_2');
        if (persona.value == 'introvert') {

            divs.style.display = 'block';
            document.querySelector('.product_img_3').style.display='none';
            

           }
            
        }
    }
