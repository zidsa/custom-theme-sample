function setErrorImg(img) {
    var errorImg = img.getAttribute("data-src-error");
    if(errorImg){
        img.setAttribute("src", errorImg);
    }
}