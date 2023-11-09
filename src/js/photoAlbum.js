import '../styles/PhotoAlbumComponent.scss';
import { updatePageHistory } from './historyFunctions';
import $ from 'jquery';

export const fotos = [
    "mohammed_1.jpg",
    "mohammed_2.jpg",
    "mohammed_3.jpg",
    "mohammed_4.jpg",
    "mohammed_5.jpg",
    "mohammed_6.jpg",
    "mohammed_7.jpg",
    "mohammed_8.jpg",
    "mohammed_9.jpg",
    "mohammed_10.jpg",
    "mohammed_11.jpg",
    "mohammed_12.jpg",
    "mohammed_13.jpg",
    "mohammed_14.jpg",
    "mohammed_15.jpg",
];

export const titles = [
    "Mohammed 1",
    "Mohammed 2",
    "Mohammed 3",
    "Mohammed 4",
    "Mohammed 5",
    "Mohammed 6",
    "Mohammed 7",
    "Mohammed 8",
    "Mohammed 9",
    "Mohammed 10",
    "Mohammed 11",
    "Mohammed 12",
    "Mohammed 13",
    "Mohammed 14",
    "Mohammed 15",
];

let position = 0;
let movePosition = 0;

export default {
    name: "PhotoAlbumComponent",
    data() {
        return {
            photoAlbumElement: null,
        };
    },
    mounted() {
        updatePageHistory();
        this.createPhotoAlbum();

        const sliderItemsCount = fotos.length;
        const sliderItemWidth = $('.slider-item').width();

        $('.next').on('click', () => {
            position += 1;
            movePosition -= sliderItemWidth;
            
            this.setPosition(movePosition);
            this.checkButtons(sliderItemsCount, sliderItemWidth);
        });

        $('.prev').on('click', () => {
            position -= 1;
            movePosition += sliderItemWidth;
            
            this.setPosition(movePosition);
            this.checkButtons(sliderItemsCount, sliderItemWidth);
        });
    },
    methods: {
        setPosition(sliderItemWidth) {
            $('.slider-item').css({
                transform: `translateX(${sliderItemWidth}px)`,
                transition: 'transform 0.5s',
            });
        },
        checkButtons(sliderItemsCount, sliderItemWidth) {
            const maxPosition = (sliderItemsCount - 1) * sliderItemWidth;
            
            if (position < 0) {
                position = sliderItemsCount - 1;
                movePosition = -maxPosition;
            } else if (position >= sliderItemsCount) {
                position = 0;
                movePosition = 0;
            }

            this.setPosition(movePosition);
        },
        createPhotoAlbum(sliderItemWidth) {
            const modalContainer = $('.modal');
            const modalCloseElement = $('.close');
            const photoAlbumElement = $('.photo-album-component');
            const sliderTrack = $('.slider-track');

            for (let index = 0; index < fotos.length; index++) {
                const sliderItem = $('<div>').addClass('slider-item');
                const photoItem = $('<div>').addClass('photo-item');

                const img = $('<img>').attr({
                    src: require(`../assets/album/${fotos[index]}`),
                    alt: titles[index],
                }).addClass('photo');

                const sliderImg = $('<img>').attr({
                    src: require(`../assets/album/${fotos[index]}`),
                    alt: titles[index],
                }).addClass('slider-photo');

                const tooltip = $('<div>')
                    .text(titles[index])
                    .addClass('tooltip')
                    .css('pointer-events', 'none');
                
                const caption = $('<div>')
                    .text(titles[index])
                    .addClass('caption');

                const modalImage = $('<div>')
                    .addClass('modal')
                    .attr('id', titles[index]);

                img.on('click', () => {
                    sliderItemWidth = $('.slider-item').width();
                    position = index;
                    movePosition = -(position * sliderItemWidth);
                    
                    this.setPosition(movePosition);
                    modalContainer.css('display', 'block');
                });

                modalCloseElement.on('click', () => {
                    modalContainer.css('display', 'none');
                });

                photoItem.append(img, tooltip, caption, modalImage);
                photoAlbumElement.append(photoItem);
                sliderItem.append(sliderImg);
                sliderTrack.append(sliderItem);
            }

            return photoAlbumElement;
        },
    },
};