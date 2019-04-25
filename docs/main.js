let banner = document.querySelector(".banner");
banner.addEventListener("click", goToPage);

document.addEventListener("load", setTimeout(reloadPage, 4100));

function reloadPage() {
    location.reload();
}

function goToPage(){

    window.open(
        'https://www.cphbusiness.dk/',
        '_blank' // <- This is what makes it open in a new window.
      );

}



