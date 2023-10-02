import '../styles/AboutComponent.scss';
import { updatePageHistory } from './historyFunctions';

export default {
    name: 'AboutComponent',

    mounted() {
        updatePageHistory();
    },
};