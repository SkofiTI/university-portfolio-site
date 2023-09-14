import '../styles/ContactComponent.scss';

export default {
    name: 'ContactComponent',
    mounted() {
        const contactForm = document.querySelector('.contact-component form');
        contactForm.addEventListener('submit', (event) => {
            if (!this.validateContactForm()) {
                event.preventDefault();
            }
        });
    },
    methods: {
        validateContactForm() {
            const form = document.querySelector('.contact-component form');
            const nameInput = form.querySelector('#name');
            const phoneInput = form.querySelector('#phone');
            const inputs = form.querySelectorAll('input, select');
            let radioChecked = false;
      
            if (!this.validateName(nameInput.value)) {
                alert('Пожалуйста, введите ФИО в формате "Фамилия Имя Отчество"');
                nameInput.focus();
                return false;
            }
      
            if (!this.validatePhone(phoneInput.value)) {
                alert('Пожалуйста, введите правильный номер телефона +7/+3xxxxxxxxx');
                phoneInput.focus();
                return false;
            }
      
            for (let i = 0; i < inputs.length; i++) {
              if (!inputs[i].value) {
                alert('Пожалуйста, заполните все поля формы');
                inputs[i].focus();
                return false;
              }
      
              if (inputs[i].type === 'radio' && inputs[i].checked) {
                radioChecked = true;
              }
            }
      
            if (!radioChecked) {
              alert('Пожалуйста, выберите пол');
              return false;
            }
      
            return true;
        },
        validateName(name) {
            const nameRegex = /^([а-яА-ЯёЁ]+\s[а-яА-ЯёЁ]+\s[а-яА-ЯёЁ]+|[a-zA-Z]+\s[a-zA-Z]+\s[a-zA-Z]+)$/;
            return nameRegex.test(name);
        },
        validatePhone(phone) {
            const phoneRegex = /^(?:\+7|\+3)\d{9,11}$/;
            return phoneRegex.test(phone);
        },
    },
};