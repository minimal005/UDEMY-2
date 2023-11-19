

'use strict';
document.addEventListener('DOMContentLoaded', () => {
    
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    const adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = document.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]')

    addForm.addEventListener('submit', (e) => {
        e.preventDefault()

        let newFilm = addInput.value.toLowerCase()
        const favorite = checkbox.checked
        
        if(newFilm){

            if(newFilm.length > 21){
                newFilm = `${newFilm.slice(0,21)}...`
            }
            if(favorite){
                console.log('Добавляемо улюблений фільм');
            }
        movieDB.movies.push(newFilm)
        sortArr(movieDB.movies)
        createMovieList(movieDB.movies, movieList)
        console.log(e.target);
        e.target.reset()}
    })

    const deleteAdv = (arr) => {
        arr.forEach(element => element.remove()
            )
    }
    
    const makeChanges = () =>{
        genre.textContent = 'Драма'
        poster.style.backgroundImage = "url('img/bg.jpg')"
    }

    const sortArr = (arr) =>{
        arr.sort()
    }
        
    function createMovieList(films, parent){
        parent.innerHTML = ''
        sortArr(films)
        films.forEach((film, index) => {
            parent.innerHTML += `
            <li class="promo__interactive-item">${index+1}. ${film}
            <div class="delete"></div>
        </li>`
        })
        
        document.querySelectorAll('.delete').forEach((btn,i) => {
            btn.addEventListener('click', ()=> {
                btn.parentElement.remove()
                movieDB.movies.splice(i, 1)
                createMovieList(films, parent)
            })
        })
    }

    deleteAdv(adv)
    makeChanges()
    createMovieList(movieDB.movies, movieList)
})








