document.addEventListener('DOMContentLoaded', function(){
    var h1text = document.getElementById('h1Text');
    var linkThere = document.getElementById('linkThere');
    var imgBg = document.getElementById('imgBg');
    var begin = document.getElementById('begin');

    linkThere.addEventListener("mouseover", function() {
        setOpacity(h1text, 0);
        setOpacity(imgBg, 0.3);

    });

    linkThere.addEventListener("mouseout", function() {
        setOpacity(h1text, 1);
        setOpacity(imgBg, 0);

    });


    function setOpacity(element, opacityValue) {
        element.style.opacity = opacityValue;
    }
});
