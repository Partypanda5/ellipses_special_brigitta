//base map image
const base = document.getElementById('baseMap');

//pointers
const pointer_t2_one = document.getElementById('t2_one');
const pointer_g6 = document.getElementById('g6');

//close button
const close_content = document.getElementById('close');

//user clicks
userClicked = false;

//content
const pointer_t2_one_content = document.getElementById('t2_one_text');
const g6_model = document.getElementById('g6_model');
const g6_model_iframe = document.getElementById('g6_model_style');



//hover over pointers

pointer_t2_one.addEventListener('mouseenter', e => 
{
    base.src = 'assets/images/pointers/pointer_t2_one_hover.jpg';
});
  
pointer_t2_one.addEventListener('mouseleave', e => 
{
    if (userClicked === false)
    {
        base.src = 'assets/images/base_labels.jpg';
    }
});

pointer_g6.addEventListener('mouseenter', e => 
{
    base.src = 'assets/images/pointers/pointer_g6_hover.jpg';
});
  
pointer_g6.addEventListener('mouseleave', e => 
{
    if (userClicked === false)
    {
        base.src = 'assets/images/base_labels.jpg';
    }
});




//click on pointers

pointer_t2_one.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/pointers/pointer_t2_one_hover.jpg';
    pointer_t2_one_content.style.display = 'block';
    base.style.filter = "grayscale(80%)";
});

pointer_g6.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/pointers/pointer_g6_hover.jpg';
    g6_model.style.display = 'block';
    base.style.filter = "grayscale(90%)";
});





//click on close button

close_content.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/base_labels.jpg';
    // g6_model_iframe.style.setProperty ("display", "none", "important");
    console.log('hide model');
    pointer_t2_one_content.style.display = 'none';
    base.style.filter = "grayscale(0%)";
});