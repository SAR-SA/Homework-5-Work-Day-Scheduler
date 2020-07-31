$(document).ready(function () {
    console.log(localStorage.getItem('9AM'))

    const todayDate = moment();
    const currentDayElement = $('#currentDay');

    //Container that holds the calendar
    const container = $('div.container');

    //Header Date - using moment.js
    currentDayElement.text(todayDate.format('dddd, MMMM DD YYYY'));


    //Function to save To Do's
    function savebutton() {
        
        // button.addEventListener('click', storeTodo);
        $('.saveBtn').on('click', storeTodo)
    }   

    

    var todo = 'textarea'

    function storeTodo() {
        console.log("THIS BUTTON IS WORKING");
        $(this).siblings('.storage').val()
        // console.log(
        //     $(this) // whatveer is setting off this event
        //     .siblings('.hour') // another element that is a child of THIS's parent element
        //     .text() // a method that returns the inner text of the sibling with "hour" class
        //     )
        localStorage.setItem($(this).siblings('.hour').text(), $(this).siblings('.storage').val());
    }

    for (let i = 9; i < 18; i++) {

        const rowEl = $('<div>');
        const hourEl = $('<div>');
        const calTextArea = $('<textarea>');
        const saveBtn = $('<button>');
        const currentHour = moment().hour();
        const storageInput = document.querySelector('.storage')

        rowEl.addClass('row time-block');
        hourEl.addClass('col-1 hour');
        hourEl.text(i + "AM");
        calTextArea.addClass('col-10 storage');

         if (i < 12) {
        calTextArea.text(localStorage.getItem(i + "AM"));
         }

         if (i > 11) {
            calTextArea.text(localStorage.getItem((i - 12) + "PM"));
         }
        
        
        calTextArea.attr('input');
        saveBtn.addClass('col-1 saveBtn');
        saveBtn.attr('type', 'button');
        saveBtn.html('<i class="far fa-save"></i>');

        container.append(rowEl);
        rowEl.append(hourEl, calTextArea, saveBtn);

        function addToDos() {
            storageInput.addEventListener('text', letter => {
                console.log(letter.target.value)
                text.textContent = letter.target.value
            })
        }

        if (i === 12) {
            hourEl.text(i + "PM");
        }

        if (i > 12) {
            hourEl.text(i - 12 + "PM");
        }

        if (i < currentHour) {
            calTextArea.addClass('past')
        }

        if (i > currentHour) {
            calTextArea.addClass('future')
        }

        if (i === currentHour) {
            calTextArea.addClass('present')
        }
    }
    savebutton();
    addToDos();


});

// const input = document.querySelector('input')

// form.addEventListener('submit', logSubmit)

// //Function to add To Do's
// function logSubmit(event) {
//     event.preventDefault();
//   }





