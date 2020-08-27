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
const pointer_g1 = document.getElementById('g1');
const pointer_g3 = document.getElementById('g3');
const pointer_g7 = document.getElementById('g7');
const pointer_g4 = document.getElementById('g4');
const pointer_g9 = document.getElementById('g9');
const pointer_a1 = document.getElementById('a1');
const pointer_a2 = document.getElementById('a2');
const pointer_a3 = document.getElementById('a3');
const pointer_a4 = document.getElementById('a4');
const pointer_a5 = document.getElementById('a5');
const pointer_a6 = document.getElementById('a6');
const flow = document.getElementById('flow');
const agregate = document.getElementById('agregate');
const crack_ooze = document.getElementById('crack_ooze');
const corrosion = document.getElementById('corrosion');
const moss = document.getElementById('moss-grows');
const pile = document.getElementById('pile-crack');
const erosion = document.getElementById('erosion');
const strata = document.getElementById('strata');
const terra = document.getElementById('terra');

//keys
const t_key = document.getElementById('t_key');
const a_key = document.getElementById('a_key');
const w_key = document.getElementById('w_key');
const g_key = document.getElementById('g_key');

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
const close_content17 = document.querySelector('#close17');
const close_content18 = document.querySelector('#close18');
const close_content19 = document.querySelector('#close19');
const close_content20 = document.querySelector('#close20');
const close_content21 = document.querySelector('#close21');
const close_content22 = document.querySelector('#close22');
const close_content23 = document.querySelector('#close23');
const close_content24 = document.querySelector('#close24');
const close_content25 = document.querySelector('#close25');
const close_content26 = document.querySelector('#close26');
const close_content27 = document.querySelector('#close27');
const close_content28 = document.querySelector('#close28');
const close_content29 = document.querySelector('#close29');
const close_content30 = document.querySelector('#close30');
const close_content31 = document.querySelector('#close31');
const close_content32 = document.querySelector('#close32');

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
const g1_model = document.getElementById('g1_model');
const g3_model = document.getElementById('g3_model');
const g7_model = document.getElementById('g7_model');
const g4_model = document.getElementById('g4_model');
const g9_model = document.getElementById('g9_model');

const a1_content = document.getElementById('a1_content');
const a2_content = document.getElementById('a2_content');
const a3_content = document.getElementById('a3_content');
const a4_content = document.getElementById('a4_content');
const a5_content = document.getElementById('a5_content');
const a6_content = document.getElementById('a6_content');

const words1_content = document.getElementById('words1_content');
const words2_content = document.getElementById('words2_content');
const words3_content = document.getElementById('words3_content');
const words4_content = document.getElementById('words4_content');
const words5_content = document.getElementById('words5_content');
const words6_content = document.getElementById('words6_content');
const words7_content = document.getElementById('words7_content');
const words8_content = document.getElementById('words8_content');
const words9_content = document.getElementById('words9_content');

const t_key_text = document.getElementById('t_key_text');
const a_key_text = document.getElementById('a_key_text');
const w_key_text = document.getElementById('w_key_text');
const g_key_text = document.getElementById('g_key_text');

const digiCleanse = document.getElementById('digiCleanse');
// <-------------------------------------------------------------------------------- START Hover Over Tags -------------------------------------------------------------------------->
pointer_a1.addEventListener('mouseenter', e => 
{
    base.src = 'assets/images/pointers/a1_hover.jpg';
});
  
pointer_a1.addEventListener('mouseleave', e => 
{
    if (userClicked === false)
    {
        base.src = 'assets/images/baseMap.jpg';
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
        base.src = 'assets/images/baseMap.jpg';
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
        base.src = 'assets/images/baseMap.jpg';
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
        base.src = 'assets/images/baseMap.jpg';
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
        base.src = 'assets/images/baseMap.jpg';
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
        base.src = 'assets/images/baseMap.jpg';
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
        base.src = 'assets/images/baseMap.jpg';
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
        base.src = 'assets/images/baseMap.jpg';
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
        base.src = 'assets/images/baseMap.jpg';
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
        base.src = 'assets/images/baseMap.jpg';
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
        base.src = 'assets/images/baseMap.jpg';
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
        base.src = 'assets/images/baseMap.jpg';
    }
});

pointer_t4.addEventListener('mouseenter', e => 
{
    base.src = 'assets/images/pointers/t4_hover.jpg';
});
  
pointer_t4.addEventListener('mouseleave', e => 
{
    if (userClicked === false)
    {
        base.src = 'assets/images/baseMap.jpg';
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
        base.src = 'assets/images/baseMap.jpg';
    }
});

pointer_g1.addEventListener('mouseenter', e => 
{
    base.src = 'assets/images/pointers/g1_hover.jpg';
});

pointer_g1.addEventListener('mouseleave', e => 
{
    if (userClicked === false)
    {
        base.src = 'assets/images/baseMap.jpg';
    }
});

pointer_g3.addEventListener('mouseenter', e => 
{
    base.src = 'assets/images/pointers/g3_hover.jpg';
});

pointer_g3.addEventListener('mouseleave', e => 
{
    if (userClicked === false)
    {
        base.src = 'assets/images/baseMap.jpg';
    }
});

pointer_g7.addEventListener('mouseenter', e => 
{
    base.src = 'assets/images/pointers/g7_hover.jpg';
});

pointer_g7.addEventListener('mouseleave', e => 
{
    if (userClicked === false)
    {
        base.src = 'assets/images/baseMap.jpg';
    }
});

pointer_g9.addEventListener('mouseenter', e => 
{
    base.src = 'assets/images/pointers/g9_hover.jpg';
});

pointer_g4.addEventListener('mouseenter', e => 
{
    base.src = 'assets/images/pointers/g4_hover.jpg';
});

pointer_g4.addEventListener('mouseleave', e => 
{
    if (userClicked === false)
    {
        base.src = 'assets/images/baseMap.jpg';
    }
});

pointer_g9.addEventListener('mouseleave', e => 
{
    if (userClicked === false)
    {
        base.src = 'assets/images/baseMap.jpg';
    }
});


// <-------------------------------------------------------------------------------- END Hover Over Tags -------------------------------------------------------------------------->

// <-------------------------------------------------------------------------------- START Click On Tags -------------------------------------------------------------------------->
t_key.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/pointers/t1_hover.jpg';
    t_key_text.style.display = 'block';
    base.style.opacity = "0.2";
    base.style.filter = "grayscale(80%)";
    base.style.zIndex = '900';
    digiCleanse.style.opacity = "0.2";
    digiCleanse.style.filter = "grayscale(80%)";
});

a_key.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/pointers/t1_hover.jpg';
    a_key_text.style.display = 'block';
    base.style.opacity = "0.2";
    base.style.filter = "grayscale(80%)";
    base.style.zIndex = '900';
    digiCleanse.style.opacity = "0.2";
    digiCleanse.style.filter = "grayscale(80%)";
});

w_key.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/pointers/t1_hover.jpg';
    w_key_text.style.display = 'block';
    base.style.opacity = "0.2";
    base.style.filter = "grayscale(80%)";
    base.style.zIndex = '900';
    digiCleanse.style.opacity = "0.2";
    digiCleanse.style.filter = "grayscale(80%)";
});

g_key.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/pointers/t1_hover.jpg';
    g_key_text.style.display = 'block';
    base.style.opacity = "0.2";
    base.style.filter = "grayscale(80%)";
    base.style.zIndex = '900';
    digiCleanse.style.opacity = "0.2";
    digiCleanse.style.filter = "grayscale(80%)";
});

pointer_t1.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/pointers/t1_hover.jpg';
    pointer_t1_content.style.display = 'block';
    base.style.opacity = "0.2";
    base.style.filter = "grayscale(80%)";
    base.style.zIndex = '900';
    digiCleanse.style.opacity = "0.2";
    digiCleanse.style.filter = "grayscale(80%)";
});

pointer_t2_one.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/pointers/t2_hover.jpg';
    pointer_t2_one_content.style.display = 'block';
    base.style.opacity = "0.2";
    base.style.filter = "grayscale(80%)";
    base.style.zIndex = '900';
    digiCleanse.style.opacity = "0.2";
    digiCleanse.style.filter = "grayscale(80%)";
});

pointer_t3.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/pointers/t3_hover.jpg';
    pointer_t3_content.style.display = 'block';
    base.style.opacity = "0.2";
    base.style.filter = "grayscale(80%)";
    base.style.zIndex = '900';
    digiCleanse.style.opacity = "0.2";
    digiCleanse.style.filter = "grayscale(80%)";
});

pointer_t4.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/pointers/t4_hover.jpg';
    pointer_t4_content.style.display = 'block';
    base.style.opacity = "0.2";
    base.style.filter = "grayscale(80%)";
    base.style.zIndex = '900';
    digiCleanse.style.opacity = "0.2";
    digiCleanse.style.filter = "grayscale(80%)";
});

pointer_g6.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/pointers/g6_hover.jpg';
    g6_model.style.display = 'block';
    base.style.filter = "grayscale(90%)";
    digiCleanse.style.opacity = "0.2";
    digiCleanse.style.filter = "grayscale(80%)";
});

pointer_g5.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/pointers/g5_hover.jpg';
    g5_model.style.display = 'block';
    base.style.filter = "grayscale(90%)";
    digiCleanse.style.opacity = "0.2";
    digiCleanse.style.filter = "grayscale(80%)";
});

pointer_g4.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/pointers/g4_hover.jpg';
    g4_model.style.display = 'block';
    base.style.filter = "grayscale(90%)";
    digiCleanse.style.opacity = "0.2";
    digiCleanse.style.filter = "grayscale(80%)";
});

pointer_g9.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/pointers/g9_hover.jpg';
    g9_model.style.display = 'block';
    base.style.filter = "grayscale(90%)";
    digiCleanse.style.opacity = "0.2";
    digiCleanse.style.filter = "grayscale(80%)";
});

pointer_g2.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/pointers/g2_hover.jpg';
    g2_model.style.display = 'block';
    base.style.filter = "grayscale(90%)";
    digiCleanse.style.opacity = "0.2";
    digiCleanse.style.filter = "grayscale(80%)";
});

pointer_g8.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/pointers/g8_hover.jpg';
    g8_model.style.display = 'block';
    base.style.filter = "grayscale(90%)";
    digiCleanse.style.opacity = "0.2";
    digiCleanse.style.filter = "grayscale(80%)";
});

pointer_g1.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/pointers/g1_hover.jpg';
    g1_model.style.display = 'block';
    base.style.filter = "grayscale(90%)";
    digiCleanse.style.opacity = "0.2";
    digiCleanse.style.filter = "grayscale(80%)";
});

pointer_g3.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/pointers/g1_hover.jpg';
    g3_model.style.display = 'block';
    base.style.filter = "grayscale(90%)";
    digiCleanse.style.opacity = "0.2";
    digiCleanse.style.filter = "grayscale(80%)";
});

pointer_g7.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/pointers/g1_hover.jpg';
    g7_model.style.display = 'block';
    base.style.filter = "grayscale(90%)";
    digiCleanse.style.opacity = "0.2";
    digiCleanse.style.filter = "grayscale(80%)";
});


pointer_a1.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/A_tags/A1.jpg';
    a1_content.style.display='block';
    base.style.zIndex = '900';
    digiCleanse.style.opacity = "0.2";
    digiCleanse.style.filter = "grayscale(80%)";
});


pointer_a2.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/A_tags/A2.jpg';
    a2_content.style.display='block';
    base.style.zIndex = '900';
    digiCleanse.style.opacity = "0.2";
    digiCleanse.style.filter = "grayscale(80%)";
});

pointer_a3.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/A_tags/A3.jpg';
    a3_content.style.display='block';
    base.style.zIndex = '900';
        digiCleanse.style.opacity = "0.2";
    digiCleanse.style.filter = "grayscale(80%)";
});

pointer_a4.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/A_tags/A4.jpg';
    a4_content.style.display='block';
    base.style.zIndex = '900';
        digiCleanse.style.opacity = "0.2";
    digiCleanse.style.filter = "grayscale(80%)";
});

pointer_a5.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/A_tags/A5.jpg';
    a5_content.style.display='block';
    base.style.zIndex = '900';
        digiCleanse.style.opacity = "0.2";
    digiCleanse.style.filter = "grayscale(80%)";
});

pointer_a6.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/A_tags/A6.jpg';
    a6_content.style.display='block';
    base.style.zIndex = '900';
        digiCleanse.style.opacity = "0.2";
    digiCleanse.style.filter = "grayscale(80%)";
});

flow.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/collages/FLOWS.jpg';
    words1_content.style.display='block';
    base.style.zIndex = '900';
        digiCleanse.style.opacity = "0.2";
    digiCleanse.style.filter = "grayscale(80%)";
});

agregate.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/collages/AGREGATE.jpg';
    words2_content.style.display='block';
    base.style.zIndex = '900';
        digiCleanse.style.opacity = "0.2";
    digiCleanse.style.filter = "grayscale(80%)";
});

crack_ooze.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/collages/CRACK-OOZE.jpg';
    words3_content.style.display='block';
    base.style.zIndex = '900';
    digiCleanse.style.opacity = "0.2";
    digiCleanse.style.filter = "grayscale(80%)";
});

terra.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/collages/TERRA.jpg';
    words4_content.style.display='block';
    base.style.zIndex = '900';
        digiCleanse.style.opacity = "0.2";
    digiCleanse.style.filter = "grayscale(80%)";
});

corrosion.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/collages/CORROSIONS.jpg';
    words5_content.style.display='block';
    base.style.zIndex = '900';
    digiCleanse.style.opacity = "0.2";
    digiCleanse.style.filter = "grayscale(80%)";
});

moss.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/collages/GROWS.jpg';
    words6_content.style.display='block';
    base.style.zIndex = '900';
    digiCleanse.style.opacity = "0.2";
    digiCleanse.style.filter = "grayscale(80%)";
});

pile.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/collages/CRACK-PILE.jpg';
    words7_content.style.display='block';
    base.style.zIndex = '900';
    digiCleanse.style.opacity = "0.2";
    digiCleanse.style.filter = "grayscale(80%)";
});

erosion.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/collages/ERROSION-RESISTANT.jpg';
    words8_content.style.display='block';
    base.style.zIndex = '900';
    digiCleanse.style.opacity = "0.2";
    digiCleanse.style.filter = "grayscale(80%)";
});

strata.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/collages/STRATA.jpg';
    words9_content.style.display='block';
    base.style.zIndex = '900';
    digiCleanse.style.opacity = "0.2";
    digiCleanse.style.filter = "grayscale(80%)";
});

// <-------------------------------------------------------------------------------- END Click On Tags -------------------------------------------------------------------------->


// <-------------------------------------------------------------------------------- START CLICK ON CLOSE BUTTON ---------------------------------------------------------------->

close_content1.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/baseMap.jpg';
    pointer_t1_content.style.display = 'none';
    base.style.filter = "grayscale(0%)";
    base.style.opacity = "1";
    base.style.zIndex = '0';
    digiCleanse.style.opacity = "1";
    digiCleanse.style.filter = "grayscale(0%)";
});

close_content2.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/baseMap.jpg';
    pointer_t2_one_content.style.display = 'none';
    base.style.filter = "grayscale(0%)";
    base.style.opacity = "1";
    base.style.zIndex = '0';
        digiCleanse.style.opacity = "1";
    digiCleanse.style.filter = "grayscale(0%)";
});

close_content3.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/baseMap.jpg';
    pointer_t3_content.style.display = 'none';
    base.style.filter = "grayscale(0%)";
    base.style.opacity = "1";
    base.style.zIndex = '0';
        digiCleanse.style.opacity = "1";
    digiCleanse.style.filter = "grayscale(0%)";
});

close_content4.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/baseMap.jpg';
    pointer_t4_content.style.display = 'none';
    base.style.filter = "grayscale(0%)";
    base.style.opacity = "1";
    base.style.zIndex = '0';
        digiCleanse.style.opacity = "1";
    digiCleanse.style.filter = "grayscale(0%)";
});

close_content5.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/baseMap.jpg';
    g6_model.style.display = 'none';
    base.style.filter = "grayscale(0%)";
        digiCleanse.style.opacity = "1";
    digiCleanse.style.filter = "grayscale(0%)";
});

close_content6.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/baseMap.jpg';
    g5_model.style.display = 'none';
    base.style.filter = "grayscale(0%)";
        digiCleanse.style.opacity = "1";
    digiCleanse.style.filter = "grayscale(0%)";
});

close_content7.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/baseMap.jpg';
    g8_model.style.display = 'none';
    base.style.filter = "grayscale(0%)";
        digiCleanse.style.opacity = "1";
    digiCleanse.style.filter = "grayscale(0%)";
});

close_content8.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/baseMap.jpg';
    g2_model.style.display = 'none';
    base.style.filter = "grayscale(0%)";
        digiCleanse.style.opacity = "1";
    digiCleanse.style.filter = "grayscale(0%)";
});

close_content9.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/baseMap.jpg';
    g1_model.style.display = 'none';
    base.style.filter = "grayscale(0%)";
        digiCleanse.style.opacity = "1";
    digiCleanse.style.filter = "grayscale(0%)";
});

close_content10.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/baseMap.jpg';
    g9_model.style.display = 'none';
    base.style.filter = "grayscale(0%)";
        digiCleanse.style.opacity = "1";
    digiCleanse.style.filter = "grayscale(0%)";
});

close_content11.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/baseMap.jpg';
    base.style.filter = "grayscale(0%)";
    a1_content.style.display='none';
    base.style.zIndex = '0';
        digiCleanse.style.opacity = "1";
    digiCleanse.style.filter = "grayscale(0%)";
});

close_content12.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/baseMap.jpg';
    base.style.filter = "grayscale(0%)";
    a2_content.style.display='none';
    base.style.zIndex = '0';
        digiCleanse.style.opacity = "1";
    digiCleanse.style.filter = "grayscale(0%)";
});

close_content13.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/baseMap.jpg';
    base.style.filter = "grayscale(0%)";
    a3_content.style.display='none';
    base.style.zIndex = '0';
        digiCleanse.style.opacity = "1";
    digiCleanse.style.filter = "grayscale(0%)";
});

close_content14.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/baseMap.jpg';
    base.style.filter = "grayscale(0%)";
    a4_content.style.display='none';
    base.style.zIndex = '0';
        digiCleanse.style.opacity = "1";
    digiCleanse.style.filter = "grayscale(0%)";
});

close_content15.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/baseMap.jpg';
    base.style.filter = "grayscale(0%)";
    a5_content.style.display='none';
    base.style.zIndex = '0';
        digiCleanse.style.opacity = "1";
    digiCleanse.style.filter = "grayscale(0%)";
});

close_content16.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/baseMap.jpg';
    base.style.filter = "grayscale(0%)";
    a6_content.style.display='none';
    base.style.zIndex = '0';
        digiCleanse.style.opacity = "1";
    digiCleanse.style.filter = "grayscale(0%)";
});

close_content17.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/baseMap.jpg';
    base.style.filter = "grayscale(0%)";
    words1_content.style.display='none';
    base.style.zIndex = '0';
        digiCleanse.style.opacity = "1";
    digiCleanse.style.filter = "grayscale(0%)";
});

close_content18.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/baseMap.jpg';
    base.style.filter = "grayscale(0%)";
    words2_content.style.display='none';
    base.style.zIndex = '0';
        digiCleanse.style.opacity = "1";
    digiCleanse.style.filter = "grayscale(0%)";
});

close_content19.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/baseMap.jpg';
    base.style.filter = "grayscale(0%)";
    words3_content.style.display='none';
    base.style.zIndex = '0';
        digiCleanse.style.opacity = "1";
    digiCleanse.style.filter = "grayscale(0%)";
});

close_content20.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/baseMap.jpg';
    base.style.filter = "grayscale(0%)";
    words4_content.style.display='none';
    base.style.zIndex = '0';
        digiCleanse.style.opacity = "1";
    digiCleanse.style.filter = "grayscale(0%)";
});

close_content21.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/baseMap.jpg';
    base.style.filter = "grayscale(0%)";
    words5_content.style.display='none';
    base.style.zIndex = '0';
        digiCleanse.style.opacity = "1";
    digiCleanse.style.filter = "grayscale(0%)";
});

close_content22.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/baseMap.jpg';
    base.style.filter = "grayscale(0%)";
    words6_content.style.display='none';
    base.style.zIndex = '0';
        digiCleanse.style.opacity = "1";
    digiCleanse.style.filter = "grayscale(0%)";
});

close_content23.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/baseMap.jpg';
    base.style.filter = "grayscale(0%)";
    words7_content.style.display='none';
    base.style.zIndex = '0';
        digiCleanse.style.opacity = "1";
    digiCleanse.style.filter = "grayscale(0%)";
});

close_content24.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/baseMap.jpg';
    base.style.filter = "grayscale(0%)";
    words8_content.style.display='none';
    base.style.zIndex = '0';
        digiCleanse.style.opacity = "1";
    digiCleanse.style.filter = "grayscale(0%)";
});

close_content25.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/baseMap.jpg';
    base.style.filter = "grayscale(0%)";
    words9_content.style.display='none';
    base.style.zIndex = '0';
        digiCleanse.style.opacity = "1";
    digiCleanse.style.filter = "grayscale(0%)";
});

close_content26.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/baseMap.jpg';
    g3_model.style.display = 'none';
    base.style.filter = "grayscale(0%)";
        digiCleanse.style.opacity = "1";
    digiCleanse.style.filter = "grayscale(0%)";
});


close_content27.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/baseMap.jpg';
    g7_model.style.display = 'none';
    base.style.filter = "grayscale(0%)";
        digiCleanse.style.opacity = "1";
    digiCleanse.style.filter = "grayscale(0%)";
});

close_content28.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/baseMap.jpg';
    g4_model.style.display = 'none';
    base.style.filter = "grayscale(0%)";
        digiCleanse.style.opacity = "1";
    digiCleanse.style.filter = "grayscale(0%)";
});

close_content29.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/baseMap.jpg';
    t_key_text.style.display = 'none';
    base.style.filter = "grayscale(0%)";
    base.style.opacity = "1";
    base.style.zIndex = '0';
        digiCleanse.style.opacity = "1";
    digiCleanse.style.filter = "grayscale(0%)";
});

close_content30.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/baseMap.jpg';
    a_key_text.style.display = 'none';
    base.style.filter = "grayscale(0%)";
    base.style.opacity = "1";
    base.style.zIndex = '0';
        digiCleanse.style.opacity = "1";
    digiCleanse.style.filter = "grayscale(0%)";
});

close_content31.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/baseMap.jpg';
    w_key_text.style.display = 'none';
    base.style.filter = "grayscale(0%)";
    base.style.opacity = "1";
    base.style.zIndex = '0';
        digiCleanse.style.opacity = "1";
    digiCleanse.style.filter = "grayscale(0%)";
});

close_content32.addEventListener('click', e => 
{
    userClicked = true;
    base.src = 'assets/images/baseMap.jpg';
    g_key_text.style.display = 'none';
    base.style.filter = "grayscale(0%)";
    base.style.opacity = "1";
    base.style.zIndex = '0';
        digiCleanse.style.opacity = "1";
    digiCleanse.style.filter = "grayscale(0%)";
});


document.addEventListener('click', function (event) {
    console.log(event.target);
    console.log(base.style.zIndex);
});

// <-------------------------------------------------------------------------------- END CLICK ON CLOSE BUTTON ---------------------------------------------------------------->

$(window).on("load",function()
{
    $(".loader-wrapper").fadeOut("slow");
});

function on() {
    document.getElementById("overlay").style.display = "block";
  }
  
  function off() {
    document.getElementById("overlay").style.display = "none";
  }
