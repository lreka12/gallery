let imagesData = [
        {photo: 'bali.jpg',
            title: 'Bali',
            description: 'is a province of Indonesia and the westernmost of the Lesser Sunda Islands.'
        },
        
        {photo: 'mallorca.jpg',
            title: 'Mallorca',
            description:'is the largest island in the Balearic Islands, which are part of Spain and located in the Mediterranean.'
        },
        
        {photo: 'santorini.jpg',
            title: 'Santorini',
            description:'officially Thira, is an island in the southern Aegean Sea, about 200 km southeast from the Greek mainland.'
        },
        
        {photo: 'riodejaneiro.jpg',
            title: 'Rio',
            description:'is the second-most populous city in Brazil and the sixth-most populous in the Americas.'
        },
           
        {photo: 'maldiv.jpg',
            title: 'Maldiv',
            description:'is a small archipelagic state in South Asia, situated in the Arabian Sea of the Indian Ocean.'
        },
        
    
    ];
let currentPhoto = 0;
let loadPhoto = (index) => {
    $('#photo').attr('src', imagesData[index].photo);
    $('#photo-title').text(imagesData[index].title);
    $('#photo-description').text(imagesData[index].description);
}
loadPhoto(currentPhoto);

$('#ra').click(() => {
    currentPhoto++;
    loadPhoto(currentPhoto);
});

$('#la').click(() => {
    currentPhoto--;
    loadPhoto(currentPhoto);
});

$('.small').on('click',  function() {
    $('#photo').prop('src', this.src);
  });

/*console.log(imagesData);
imagesData.forEach((item,index) => {
    console.log(item);
    $('#thumbnails').append(`<div class="thumbnail" data-number="${index}">
    <img src="${item.photo}" data-number="${index}" alt="">
    </div>`);
  
$('#thumbnails').on('click', '.thumbnail', function(){
    /*let ind = parseInt($(Event.target);
    loadPhoto($(this).attr('data-number'));
});  
}); */