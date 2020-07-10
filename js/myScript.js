//base map image
const base = document.getElementById('baseMap');

//pointers
const pointer_t1 = document.getElementById('t1');
const pointer_t2_one = document.getElementById('t2_one');
const pointer_t3 = document.getElementById('t3');
const pointer_t4 = document.getElementById('t4');
const pointer_g6 = document.getElementById('g6');
const pointer_g5 = document.getElementById('g5');
const pointer_g8 = document.getElementById('g8');
const pointer_g2 = document.getElementById('g2');
const pointer_g1_g3_g7 = document.getElementById('g1_g3_g7');
const pointer_g9_g4 = document.getElementById('g9_g4');
const pointer_a1 = document.getElementById('a1');
const pointer_a2 = document.getElementById('a2');
const pointer_a3 = document.getElementById('a3');
const pointer_a4 = document.getElementById('a4');
const pointer_a5 = document.getElementById('a5');
const pointer_a6 = document.getElementById('a6');

//close buttons
const close_content1 = document.querySelector('#close1');
const close_content2 = document.querySelector('#close2');
const close_content3 = document.querySelector('#close3');
const close_content4 = document.querySelector('#close4');
const close_content5 = document.querySelector('#close5');
const close_content6 = document.querySelector('#close6');
const close_content7 = document.querySelector('#close7');
const close_content8 = document.querySelector('#close8');
const close_content9 = document.querySelector('#close9');
const close_content10 = document.querySelector('#close10');
const close_content11 = document.querySelector('#close11');
const close_content12 = document.querySelector('#close12');
const close_content13 = document.querySelector('#close13');
const close_content14 = document.querySelector('#close14');
const close_content15 = document.querySelector('#close15');
const close_content16 = document.querySelector('#close16');

//user clicks
userClicked = false;

//content
const pointer_t2_one_content = document.getElementById('t2_one_text');
const pointer_t1_content = document.getElementById('t1_text');
const pointer_t3_content = document.getElementById('t3_text');
const pointer_t4_content = document.getElementById('t4_text');

const g6_model = document.getElementById('g6_model');
const g5_model = document.getElementById('g5_model');
const g8_model = document.getElementById('g8_model');
const g2_model = document.getElementById('g2_model');
const g1_g3_g7_model = document.getElementById('g1_g3_g7_model');
const g9_g4_model = document.getElementById('g9_g4_model');

const a1_content = document.getElementById('a1_content');


// <-------------------------------------------------------------------------------- START Hover Over Tags -------------------------------------------------------------------------->
pointer_a1.addEventListener('mouseenter', e => 
{
    base.src = 'assets/images/pointers/a1_hover.jpg';
});
  
pointer_a1.addEventListener('mouseleave', e => 
{
    if (userClicked === false)
    {
        base.src = 'assets/images/20200701_Control-Map.jpg';
    }
});

pointer_a2.addEventListener('mouseenter', e => 
{
    base.src = 'assets/images/pointers/a2_hover.jpg';
});
  
pointer_a2.addEventListener('mouseleave', e => 
{
    if (userClicked === false)
    {
        base.src = 'assets/images/20200701_Control-Map.jpg';
    }
});

pointer_a3.addEventListener('mouseenter', e => 
{
    base.src = 'assets/images/pointers/a3_hover.jpg';
});
  
pointer_a3.addEventListener('mouseleave', e => 
{
    if (userClicked === false)
    {
        base.src = 'assets/images/20200701_Control-Map.jpg';
    }
});

pointer_a4.addEventListener('mouseenter', e => 
{
    base.src = 'assets/images/pointers/a4_hover.jpg';
});
  
pointer_a4.addEventListener('mouseleave', e => 
{
    if (userClicked === false)
    {
        base.src = 'assets/images/20200701_Control-Map.jpg';
    }
});

pointer_a5.addEventListener('mouseenter', e => 
{
    base.src = 'assets/images/pointers/a5_hover.jpg';
});
  
pointer_a5.addEventListener('mouseleave', e => 
{
    if (userClicked === false)
    {
        base.src = 'assets/images/20200701_Control-Map.jpg';
    }
});

pointer_a6.addEventListener('mouseenter', e => 
{
    base.src = 'assets/images/pointers/a6_hover.jpg';
});
  
pointer_a5.addEventListener('mouseleave', e => 
{
    if (userClicked === false)
    {
        base.src = 'assets/images/20200701_Control-Map.jpg';
    }
});

pointer_t2_one.addEventListener('mouseenter', e => 
{
    base.src = 'assets/images/pointers/t2_hover.jpg';
});
  
pointer_t2_one.addEventListener('mouseleave', e => 
{
    if (userClicked === false)
    {
        base.src = 'assets/images/20200701_Control-Map.jpg';
    }
});

pointer_g6.addEventListener('mouseenter', e => 
{
    base.src = 'assets/images/pointers/g6_hover.jpg';
});
  
pointer_g6.addEventListener('mouseleave', e => 
{
    if (userClicked === false)
    {
        base.src = 'assets/images/20200701_Control-Map.jpg';
    }
});

pointer_g5.addEventListener('mouseenter', e => 
{
    base.src = 'assets/images/pointers/g5_hover.jpg';
});
  
pointer_g5.addEventListener('mouseleave', e => 
{
    if (userClicked === false)
    {
        base.src = 'assets/images/20200701_Control-Map.jpg';
    }
});

pointer_g8.addEventListener('mouseenter', e => 
{
    base.src = 'assets/images/pointers/g8_hover.jpg';
});
  
pointer_g8.addEventListener('mouseleave', e => 
{
    if (userClicked === false)
    {
        base.src = 'assets/images/20200701_Control-Map.jpg';
    }
});

pointer_t1.addEventListener('mouseenter', e => 
{
    base.src = 'assets/images/pointers/t1_hover.jpg';
});
  
pointer_t1.addEventListener('mouseleave', e => 
{
    if (userClicked === false)
    {
        base.src = 'assets/images/20200701_Control-Map.jpg';
    }
});

pointer_t3.addEventListener('mouseenter', e => 
{
    base.src = 'assets/images/pointers/t3_hover.jpg';
});
  
pointer_t3.addEventListener('mouseleave', e => 
{
    if (userClicked === false)
    {
        base.src = 'assets/images/20200701_Control-Map.jpg';
    }
});

pointer_t4.addEventListener('mouseenter', e => 
{
    console.log("hello");
    base.src = 'assets/images/pointers/t4_hover.jpg';
});
  
pointer_t4.addEventListener('mouseleave', e => 
{
    if (userClicked === false)
    {
        base.src = 'assets/images/20200701_Control-Map.jpg';
    }
});

pointer_g2.addEventListener('mouseenter', e => 
{
    base.src = 'assets/images/pointers/g2_hover.jpg';
});
  
pointer_g2.addEventListener('mouseleave', e => 
{
    if (userClicked === false)
    {
        base.src = 'assets/images/20200701_Control-Map.jpg';
    }
});

pointer_g1_g3_g7.addEventListener('mouseenter', e => 
{
    base.src = 'assets/images/pointers/g1_g3_g7_hover.jpg';
});

pointer_g1_g3_g7.addEventListener('mouseleave', e => 
{
    if (userClicked === false)
    {
        base.src = 'assets/images/20200701_Control-Map.jpg';
    }
});

pointer_g9_g4.addEventListener('mouseenter', e => 
{
    base.src = 'assets/images/pointers/g9_64_hover.jpg';
});

pointer_g9_g4.addEventListener('mouseleave', e => 
{
    if (userClicked === false)
    {
        base.src = 'assets/images/20200701_Control-Map.jpg';
    }
});


// <-------------------------------------------------------------------------------- END Hover Over Tags -------------------------------------------------------------------------->

// <-------------------------------------------------------------------------------- START Click On Tags -------------------------------------------------------------------------->

pointer_t1.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/pointers/t1_hover.jpg';
    pointer_t1_content.style.display = 'block';
    base.style.filter = "grayscale(80%)";
});

pointer_t2_one.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/pointers/t2_hover.jpg';
    pointer_t2_one_content.style.display = 'block';
    base.style.filter = "grayscale(80%)";
});

pointer_t3.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/pointers/t3_hover.jpg';
    pointer_t3_content.style.display = 'block';
    base.style.filter = "grayscale(80%)";
});

pointer_t4.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/pointers/t4_hover.jpg';
    pointer_t4_content.style.display = 'block';
    base.style.filter = "grayscale(80%)";
});

pointer_g6.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/pointers/g6_hover.jpg';
    g6_model.style.display = 'block';
    base.style.filter = "grayscale(90%)";
});

pointer_g5.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/pointers/g5_hover.jpg';
    g5_model.style.display = 'block';
    base.style.filter = "grayscale(90%)";
});

pointer_g9_g4.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/pointers/g9_64_hover.jpg';
    g9_g4_model.style.display = 'block';
    base.style.filter = "grayscale(90%)";
});

pointer_g2.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/pointers/g2_hover.jpg';
    g2_model.style.display = 'block';
    base.style.filter = "grayscale(90%)";
});

pointer_g8.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/pointers/g8_hover.jpg';
    g8_model.style.display = 'block';
    base.style.filter = "grayscale(90%)";
});

pointer_g1_g3_g7.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/pointers/g1_g3_g7_hover.jpg';
    g1_g3_g7_model.style.display = 'block';
    base.style.filter = "grayscale(90%)";
});

pointer_a1.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/A_tags/A1.jpg';

});


// <-------------------------------------------------------------------------------- END Click On Tags -------------------------------------------------------------------------->


// <-------------------------------------------------------------------------------- START CLICK ON CLOSE BUTTON ---------------------------------------------------------------->

close_content1.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/20200701_Control-Map.jpg';
    pointer_t1_content.style.display = 'none';
    base.style.filter = "grayscale(0%)";
});

close_content2.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/20200701_Control-Map.jpg';
    pointer_t2_one_content.style.display = 'none';
    base.style.filter = "grayscale(0%)";
});

close_content3.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/20200701_Control-Map.jpg';
    pointer_t3_content.style.display = 'none';
    base.style.filter = "grayscale(0%)";
});

close_content4.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/20200701_Control-Map.jpg';
    pointer_t4_content.style.display = 'none';
    base.style.filter = "grayscale(0%)";
});

close_content5.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/20200701_Control-Map.jpg';
    g6_model.style.display = 'none';
    base.style.filter = "grayscale(0%)";
});

close_content6.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/20200701_Control-Map.jpg';
    g5_model.style.display = 'none';
    base.style.filter = "grayscale(0%)";
});

close_content7.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/20200701_Control-Map.jpg';
    g8_model.style.display = 'none';
    base.style.filter = "grayscale(0%)";
});

close_content8.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/20200701_Control-Map.jpg';
    g2_model.style.display = 'none';
    base.style.filter = "grayscale(0%)";
});

close_content9.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/20200701_Control-Map.jpg';
    g1_g3_g7_model.style.display = 'none';
    base.style.filter = "grayscale(0%)";
});

close_content10.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/20200701_Control-Map.jpg';
    g9_g4_model.style.display = 'none';
    base.style.filter = "grayscale(0%)";
});

close_content11.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/20200701_Control-Map.jpg';
    base.style.filter = "grayscale(0%)";
});

document.addEventListener('click', function (event) {
	console.log(event.target);
});

// <-------------------------------------------------------------------------------- END CLICK ON CLOSE BUTTON ---------------------------------------------------------------->

$(window).on("load",function(){
    $(".loader-wrapper").fadeOut("slow");
  });