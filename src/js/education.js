import '../styles/EducationComponent.scss';
import { updatePageHistory } from './historyFunctions';

export default {
    name: 'EducationComponent',

    mounted() {
        updatePageHistory();
    },
};