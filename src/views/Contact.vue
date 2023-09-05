<template>
    <div class="contact-component">
      <h1 class="title">Контакты</h1>
      
      <form action="mailto:suren.arakelyan994@gmail.com" method="POST">
            <div class="form-item">
                <label for="surname">Фамилия</label>
                <input type="text" id="surname" name="surname" placeholder="Введите фамилию" required autofocus>
            </div>
            
            <div class="form-item">
                <label for="name">Имя</label>
                <input type="text" id="name" name="name" placeholder="Введите имя" required>
            </div>
            
            <div class="form-item">
                <label for="lastname">Отчество</label>
                <input type="text" id="lastname" name="lastname" placeholder="Введите отчество" required>
            </div>
            
            <div class="form-item">
                <label>Пол</label>
                <div class="radio-group">
                    <label>
                        <input type="radio" name="gender" value="male" required>
                        Мужской
                    </label>
                    <label>
                        <input type="radio" name="gender" value="female" required>
                        Женский
                    </label>
                </div>
            </div>
            
            <div class="form-item">
                <label for="age">Возраст</label>
                <select id="age" name="age" required>
                    <option value="" disabled selected>Выберите возраст</option>
                    <option value="18-25">18-25</option>
                    <option value="26-35">26-35</option>
                    <option value="36-45">36-45</option>
                    <option value="46+">46+</option>
                </select>
            </div>
            
            <div class="form-item">
                <label for="email">E-mail</label>
                <input type="email" id="email" name="email" placeholder="Введите e-mail" required>
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
  
<script>
    import '../styles/ContactComponent.scss';

    export default {
        name: 'ContactComponent'
    };
</script>