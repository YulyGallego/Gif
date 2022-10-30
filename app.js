const inputFilter = document.querySelector(".inputFilter");
const containerCards = document.querySelector(".containerCards");


window.addEventListener('DOMContentLoaded', () => {
    let URL = 'https://tenor.googleapis.com/v2/featured?key=AIzaSyDPC3LMf_b_0FRPRdhfZj_vIhM0W4uvTC8&client_key=my_test_app';
    dataRequest(URL)
})

inputFilter.addEventListener("keyup", () => {
    let URLFilter = `https://tenor.googleapis.com/v2/search?q=${inputFilter.value}&key=AIzaSyDPC3LMf_b_0FRPRdhfZj_vIhM0W4uvTC8`
    dataRequest(URLFilter);
});

function dataRequest(URL){
    fetch(URL)
    .then(response => response.json())
    .then(data => {
        containerCards.textContent=(null)
        data.results.map( gifTenor => createGif(gifTenor));
    });
}


function createGif(gifTenor) {
    const img = document.createElement("img")
    img.src = gifTenor.media_formats.mediumgif.url;
    img.setAttribute('alt',gifTenor.content_description);
    img.classList.add("imgcard");
    
    const h2 = document.createElement("h2");
    h2.textContent = gifTenor.content_description;

    const div = document.createElement("div");
    div.classList.add("divCard")
    div.appendChild(img);
    div.appendChild(h2);
    containerCards.appendChild(div);
}

