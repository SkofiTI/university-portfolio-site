<template>
    <div class="interests-container">
        <div class="interests-component">
            <div class="menu">
                <h2>Мои хобби <a href="#hobby">#</a></h2>
                <ul>
                    <li><a href="#hobby1">Баскетбол</a></li>
                    <li><a href="#hobby2">Хоббихорсинг</a></li>
                    <li><a href="#hobby3">Прятки</a></li>
                </ul>
                <h2>Мои любимые книги <a href="#book">#</a></h2>
                <ul>
                    <li><a href="#book1">Преступление и наказание</a></li>
                    <li><a href="#book2">PHP для тех, кто хочет писать на GO</a></li>
                    <li><a href="#book3">Laravel 1941 - как всё начиналось</a></li>
                </ul>
                <h2>Моя любимая музыка <a href="#music">#</a></h2>
                <ul>
                    <li><a href="#music1">Tired - CJ SO COOL</a></li>
                    <li><a href="#music2">Всё те же на манеже</a></li>
                    <li><a href="#music3">Томас Шелбян???</a></li>
                </ul>
                <h2>Мои любимые фильмы <a href="#movie">#</a></h2>
                <ul>
                    <li><a href="#movie1">Джентельмены</a></li>
                    <li><a href="#movie2">Интерстеллар</a></li>
                    <li><a href="#movie3">Господин Никто</a></li>
                </ul>
            </div>
        </div>
        <div class="interests-content">
            <h1 id="hobby">Мои хобби</h1>
            <p id="hobby1">Баскетбол</p>
            <p id="hobby2">Хоббихорсинг</p>
            <p id="hobby3">Прятки</p>

            <h1 id="book">Мои любимые книги</h1>
            <p id="book1">Преступление и наказание</p>
            <p id="book2">PHP для тех, кто хочет писать на GO</p>
            <p id="book3">Laravel 1941 - как всё начиналось</p>

            <h1 id="music">Моя любимая музыка</h1>
            <p id="music1">Tired - CJ SO COOL</p>
            <p id="music2">Kizaru - Say No Mo</p>
            <p id="music3">Red Right Hand - Fook Liiiindaaa</p>
            
            <h1 id="movie">Мои любимые фильмы</h1>
            <p id="movie1">Джентельмены</p>
            <p id="movie2">Интерстеллар</p>
            <p id="movie3">Господин Никто</p>
        </div>
    </div>
</template>

<script>
    import '../styles/InterestComponent.scss';

    export default {
        name: 'InterestComponent'
    };
</script>