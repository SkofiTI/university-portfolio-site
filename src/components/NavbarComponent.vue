<template>
    <nav>
        <ul>
            <li><router-link active-class="active" to="/">Главная страница</router-link></li>
            <li><router-link active-class="active" to="/about">Обо мне</router-link></li>
            <li class="interests-dropdown">
                <router-link active-class="active" to="/interests">Мои интересы</router-link>
                <div class="dropdown-content">
                </div>
            </li>
            <li><router-link active-class="active" to="/education">Учеба</router-link></li>
            <li><router-link active-class="active" to="/photo-album">Фотоальбом</router-link></li>
            <li><router-link active-class="active" to="/contact">Контакт</router-link></li>
            <li><router-link active-class="active" to="/test">Тест по БЖД</router-link></li>
            <li><router-link active-class="active" to="/history">История просмотра</router-link></li>
        </ul>
        <div class="current-date">{{ currentDateTime }}</div>
    </nav>
</template>

<script src="../js/navbar.js"></script>