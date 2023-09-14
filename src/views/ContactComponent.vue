<template>
    <div class="contact-component">
      <h1 class="title">Контакты</h1>
      
      <form action="mailto:suren.arakelyan994@gmail.com" method="POST">
            <div class="form-item">
                <label for="name">Фамилия Имя Отчество</label>
                <input type="text" id="name" name="name" placeholder="Введите ФИО">
            </div>

            <div class="form-item">
                <label for="phone">Телефон</label>
                <input type="tel" id="phone" name="phone" placeholder="Введите номер телефона">
            </div>
            
            <div class="form-item">
                <label>Пол</label>
                <div class="radio-group">
                    <label>
                        <input type="radio" name="gender" value="male">
                        Мужской
                    </label>
                    <label>
                        <input type="radio" name="gender" value="female">
                        Женский
                    </label>
                </div>
            </div>
            
            <div class="form-item">
                <label for="age">Возраст</label>
                <select id="age" name="age">
                    <option value="" disabled selected>Выберите возраст</option>
                    <option value="18-25">18-25</option>
                    <option value="26-35">26-35</option>
                    <option value="36-45">36-45</option>
                    <option value="46+">46+</option>
                </select>
            </div>
            
            <div class="form-item">
                <label for="email">E-mail</label>
                <input type="email" id="email" name="email" placeholder="Введите e-mail">
            </div>
            
            <div class="button-container">
                <button id="send" type="submit">Отправить</button>
                <button id="clear" type="reset">
                    <img id="reset" src="../assets/reset.svg" alt="reset">
                </button>
            </div>
        </form>
    </div>
</template>
  
<script src="../js/contact.js"></script>