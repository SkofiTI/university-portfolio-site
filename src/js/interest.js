import '../styles/InterestComponent.scss';
import { updatePageHistory } from './historyFunctions';

function createInterests(...interests) {
    const sidebar = document.querySelector('.menu');
    const content = document.querySelector('.interests-content');
  
    for (let { id, name, items } of interests) {
        const interestSidebarTitle = document.createElement('h2');
        interestSidebarTitle.innerHTML = `${name}<a href="#${id}"> #</a>`;

        const interestSidebarItem = document.createElement('ul');
        for (let [index, item] of items.entries()) {
            const itemSidebarLi = document.createElement('li');
            itemSidebarLi.innerHTML = `<a href="#${id}${index}">${item}</a>`;
            interestSidebarItem.append(itemSidebarLi);
        }

        sidebar.append(interestSidebarTitle, interestSidebarItem);
        
    
        const interestContent = document.createElement('h1');
        interestContent.textContent = name;
        interestContent.id = id;
        content.append(interestContent);

        for (let [index, item] of items.entries()) {
            const itemContent = document.createElement('p');
            itemContent.textContent = item;
            itemContent.id = id + index;
            content.append(itemContent);
        }
    }
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