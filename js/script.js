var slideIndex = 0;


function currentSlide(n)
{
    showSlides(slideIndex = n);
}

function showSlides(n)
{
    var mySlides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    
    for (var i = 0; i < mySlides.length; i++)
    {
        mySlides[i].style.display = "none";
        dots[i].className = dots[i].className.replace("active", "");
    }

    mySlides[n].style.display = "block";
    dots[n].className += " activeSlide";
}

function plusSlides(plusMinus)
{
    if (plusMinus == -1 && slideIndex == 0)
    {
        slideIndex = document.getElementsByClassName("slides").length - 1;
    }
    else if (plusMinus == 1 && slideIndex == document.getElementsByClassName("slides").length - 1)
    {
        slideIndex = 0;
    }
    else
    {
        slideIndex = slideIndex + plusMinus;
    }
    showSlides(slideIndex);
}