<template>
    <div class="test-component">
        <h1 class="title">Тест</h1>
        
        <form action="mailto:suren.arakelyan994@gmail.com" method="POST">
            <div class="form-item">
                <label for="surname">Фамилия</label>
                <input type="text" id="surname" name="surname" placeholder="Введите фамилию">
            </div>
            
            <div class="form-item">
                <label for="name">Имя</label>
                <input type="text" id="name" name="name" placeholder="Введите имя">
            </div>
            
            <div class="form-item">
                <label for="lastname">Отчество</label>
                <input type="text" id="lastname" name="lastname" placeholder="Введите отчество">
            </div>
            
            
            <div class="form-item">
                <label for="group">Группа</label>
                <select id="group" name="group">
                    <option value="" disabled selected>Выберите Группу</option>
                    <optgroup label="1 курс">
                        <option value="ИС-1">ИС-1</option>
                        <option value="ИТ-1">ИТ-1</option>
                    </optgroup>
                    <optgroup label="2 курс">
                        <option value="ИС-2">ИС-2</option>
                        <option value="ИТ-2">ИТ-2</option>
                    </optgroup>
                    <optgroup label="3 курс">
                        <option value="ИС/б-21-1-о">ИС/б-21-3-о</option>
                        <option value="ИС/б-21-3-о">ИТ/б-21-3-о</option>
                    </optgroup>
                </select>
            </div>

            <div class="form-item">
                <div class="questions">
                    <div class="question-first">
                        <label for="question1">
                            1. Каковы преимущества активного образа жизни?
                        </label>
                        <textarea name="question1" id="question1" rows="5"></textarea>
                    </div>

                    <div class="question-second">
                        <label for="question2">
                            2. Какой фактор наиболее влияет на развитие сердечно-сосудистых заболеваний?
                        </label>
                        <div class="radio-group">
                            <label>
                                <input type="radio" name="factor" value="food">
                                Неправильное питание
                            </label>
                            <label>
                                <input type="radio" name="factor" value="smoking">
                                Курение
                            </label>
                            <label>
                                <input type="radio" name="factor" value="alcogol">
                                Алкоголь
                            </label>
                        </div>
                    </div>

                    <div class="question-third">
                        <label for="question3">
                            3. Какой продукт является наибольшим источником белка?
                        </label>
                        <select name="protein" id="protein">
                            <option value="" disabled selected>Выберите продукт</option>
                            <option value="meat">Мясо</option>
                            <option value="fish">Рыба</option>
                        </select>
                    </div>
                </div>
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

<script src="../js/test.js"></script>