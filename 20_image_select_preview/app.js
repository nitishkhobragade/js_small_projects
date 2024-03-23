const selectImage = document.querySelector('.select-img');
const inputFile = document.querySelector('#file');
const imgSection = document.querySelector('.img-section');

selectImage.addEventListener('click', function() {
    inputFile.click();
});

inputFile.addEventListener('change', function () {
    const image = this.files[0];
    console.log(image);
    if(image.size < 2000000) {
        const reader = new FileReader();
        reader.onload = () => {
            const allImg = imgSection.querySelectorAll('img');
            allImg.forEach(item => item.remove());
            const imgUrl = reader.result;
            const img = document.createElement('img');
            img.src = imgUrl;
            imgSection.appendChild(img);
            imgSection.classList.add('active');
            imgSection.dataset.img = image.name;
        }
        reader.readAsDataURL(image);
    } else {
        alert("Image size more than 2MB");
    }
   
})