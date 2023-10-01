<template>
    <div class="contact-component">
      <h1 class="title">Контакты</h1>
      
      <form action="mailto:suren.arakelyan994@gmail.com" method="POST">
            <div class="form-item">
                <label for="name">Фамилия Имя Отчество <span id="required">*</span></label>
                <input type="text" id="name" name="name" placeholder="Введите ФИО">
                <div class="error-message"></div>
            </div>

            <div class="form-item">
                <label>Дата рождения <span id="required">*</span></label>
                <input type="text" id="date" name="date" placeholder="ДД.ММ.ГГ" readonly>
                <div class="error-message"></div>
                <div id="calendar">
                    <ul class="calendar-info">
                        <li class="year-name"></li>
                        <li class="month-name"></li>
                        <div class="input-calendar">
                            <select name="birth-year" id="birth-year"></select>
                            <select name="birth-month" id="birth-month"></select>
                        </div>
                    </ul>
                    <ul class="weekdays">
                        <li>Пн</li>
                        <li>Вт</li>
                        <li>Ср</li>
                        <li>Чт</li>
                        <li>Пт</li>
                        <li>Сб</li>
                        <li>Вс</li>
                    </ul>
                    <ul class="days">
                    </ul>
                </div>
            </div>

            <div class="form-item">
                <label for="phone">Телефон <span id="required">*</span></label>
                <input type="tel" id="phone" name="phone" placeholder="Введите номер телефона">
                <div class="error-message"></div>
            </div>
            
            <div class="form-item">
                <label>Пол <span id="required">*</span></label>
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
                <label for="age">Возраст <span id="required">*</span></label>
                <select id="age" name="age">
                    <option value="" disabled selected>Выберите возраст</option>
                    <option value="18-25">18-25</option>
                    <option value="26-35">26-35</option>
                    <option value="36-45">36-45</option>
                    <option value="46+">46+</option>
                </select>
            </div>
            
            <div class="form-item">
                <label for="email">E-mail <span id="required">*</span></label>
                <input type="email" id="email" name="email" placeholder="Введите e-mail">
                <div class="error-message"></div>
            </div>
            
            <div class="button-container">
                <button id="send" type="submit" disabled>Отправить</button>
                <button id="clear" type="reset">
                    <img id="reset" src="../assets/reset.svg" alt="reset">
                </button>
            </div>
        </form>
    </div>
</template>
  
<script src="../js/contact.js"></script>