<template>
    <nav>
        <ul>
            <li><router-link active-class="active" to="/">Главная страница</router-link></li>
            <li><router-link active-class="active" to="/about">Обо мне</router-link></li>
            <li><router-link active-class="active" to="/interests">Мои интересы</router-link></li>
            <li><router-link active-class="active" to="/education">Учеба</router-link></li>
            <li><router-link active-class="active" to="/photo-album">Фотоальбом</router-link></li>
            <li><router-link active-class="active" to="/contact">Контакт</router-link></li>
            <li><router-link active-class="active" to="/test">Тест по БЖД</router-link></li>
        </ul>
    </nav>
</template>

<script>
    import '../styles/NavbarComponent.scss';

    export default {
        name: 'NavbarComponent'
    };
</script>