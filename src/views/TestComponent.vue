<template>
    <div class="test-component">
        <h1 class="title">Тест</h1>
    
        <form action="mailto:suren.arakelyan994@gmail.com" method="POST" @submit="handleSubmit">
            <div class="form-item">
                <label for="surname">Фамилия</label>
                <input type="text" id="surname" v-model="formData.surname" placeholder="Введите фамилию" />
            </div>
    
            <div class="form-item">
                <label for="name">Имя</label>
                <input type="text" id="name" v-model="formData.name" placeholder="Введите имя" />
            </div>
    
            <div class="form-item">
                <label for="lastname">Отчество</label>
                <input type="text" id="lastname" v-model="formData.lastname" placeholder="Введите отчество" />
            </div>
    
            <div class="form-item">
                <label for="group">Группа</label>
                <select id="group" v-model="formData.group" name="group">
                    <option value="" disabled selected>Выберите Группу</option>
                    <optgroup v-for="course in courses" :label="course.label" :key="course.label">
                        <option v-for="option in course.options" :value="option.value" :key="option.value">{{ option.label }}</option>
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
                    <img id="reset" src="../assets/reset.svg" alt="reset" />
                </button>
            </div>
        </form>
    </div>
</template>

<script src="../js/test.js"></script>