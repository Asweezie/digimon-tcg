

    document.querySelector('#search').addEventListener('click', search)
    document.querySelector('input').addEventListener('keydown', event => {
        if (event.code === 'Enter') search()
    });

    function search() {
        let result = document.querySelector('input').value.replaceAll(" ", "");
        fetch(`https://digimoncard.io/api-public/search.php?n=${result}`)
            .then(response => response.json())
            .then(data => {
        console.log(data)
        // for (let i= 0; i < 7; i++) {
        //     document.querySelector(`#img${i+1}`).src = ''
        // }
        // for (let i = 0; i < data.length; i++) {
        //     document.querySelector(`#img${i+1}`).src = data[i].image_url;
        // }
        
        
        //clears all previous entries

        previousIMGS = document.querySelectorAll('img')
        previousIMGS.forEach(item => {
            item.src = '';
        })

        // finds all values entered
        data.forEach(item => {
            let img = document.createElement('img')
            img.src = item.image_url;
            document.querySelector('body').appendChild(img)
        })
    })
    }