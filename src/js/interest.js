import '../styles/InterestComponent.scss';
import { updatePageHistory } from './historyFunctions';
import $ from 'jquery';


function createInterests(...interests) {
    const sidebar = $('.menu');
    const content = $('.interests-content');

    interests.forEach(({ id, name, items }) => {
        const interestSidebarTitle = $('<h2></h2>')
            .html(`${name}<a href="#${id}"> #</a>`);

        const interestSidebarItem = $('<ul></ul>');
        items.forEach((item, index) => {
            const itemSidebarLi = $('<li></li>')
                .html(`<a href="#${id}${index}">${item}</a>`);

            interestSidebarItem.append(itemSidebarLi);
        });

        sidebar.append(interestSidebarTitle, interestSidebarItem);

        const interestContent = $('<h1></h1>')
        .text(name)
        .attr('id', id);

        content.append(interestContent);

        items.forEach((item, index) => {
            const itemContent = $('<p></p>')
            .text(item)
            .attr('id', id + index);

            content.append(itemContent);
        });
    });
}

export default {
    name: 'InterestComponent',
    mounted() {
        const hobbies = {
            id: "hobby",
            name: "Мои хобби",
            items: ["Баскетбол", "Хоббихорсинг", "Прятки"],
        };
        const books = {
            id: "book",
            name: "Мои любимые книги",
            items: ["Преступление и наказание", "PHP для тех, кто хочет писать на GO", "Laravel 1941 - как всё начиналось"],
        };
        const music = {
            id: "music",
            name: "Моя любимая музыка",
            items: ["Tired - CJ SO COOL", "Кизарян - Всё те же на манеже", "Томас Шелбян - Fook Liinnnndaaa"],
        };
        const films = {
            id: "films",
            name: "Мои любимые фильмы",
            items: ["Джентельмены", "Интерстеллар", "Господин Никто"],
        };
        
        updatePageHistory();
        createInterests(hobbies, books, music, films);
    },
};