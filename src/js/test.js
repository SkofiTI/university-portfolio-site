import '../styles/TestComponent.scss';
import { updatePageHistory } from './historyFunctions';

export default {
    name: 'TestComponent',
    mounted() {
        const testForm = document.querySelector('.test-component form');
        const textarea = document.querySelector('#question1');
        const minWordCount = 30;

        const handleSubmit = (event) => {
            if (!this.validateTestForm()) {
                event.preventDefault();
                return;
            }
        
            const text = textarea.value.trim();
            const wordCount = text.split(/\s+/).length;
        
            if (wordCount < minWordCount) {
                alert('Минимальная длина ответа 30 слов.');
                textarea.focus();
                event.preventDefault();
            }
        };
        
        testForm.addEventListener('submit', handleSubmit);

        updatePageHistory();
    },
    methods: {
        validateTestForm() {
            const form = document.querySelector('.test-component form');
            const inputs = form.querySelectorAll('input, select, textarea');
            let radioChecked = false;

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
                alert('Пожалуйста, заполните все поля формы');
                return false;
            }

            return true;
        },
    }
};