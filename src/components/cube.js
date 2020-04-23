import React from 'react';
// import firestore from './firebase';
import './cube.scss'

const Cube = () => {
    var ID = window.location.href;
    ID = ID.split("/");
    ID = ID[ID.length - 1];

    document.addEventListener('DOMContentLoaded', function () {

        var box = document.querySelector('.box');
        var radioGroup = document.querySelector('.radio-group');
        var currentClass = '';

        function changeSide() {
            var checkedRadio = radioGroup.querySelector(':checked');
            var showClass = 'show-' + checkedRadio.value;
            if (currentClass) {
                box.classList.remove(currentClass);
            }
            box.classList.add(showClass);
            currentClass = showClass;
        }
        // set initial side
        changeSide();

        radioGroup.addEventListener('change', changeSide);

    });

    return (
        <div>
            <div class="scene">
                <div class="box">
                    <div class="box__face box__face--front">front</div>
                    <div class="box__face box__face--right">right</div>
                    <div class="box__face box__face--left">left</div>
                </div>
            </div>
            <p class="radio-group">
                <label>
                    <input type="radio" name="rotate-cube-side" value="front" checked /> front
                </label>
                <label>
                    <input type="radio" name="rotate-cube-side" value="right" /> right
                </label>
                <label>
                    <input type="radio" name="rotate-cube-side" value="left" /> left
                </label>
            </p>

        </div>
    )
};

export default Cube