$(document).ready(function() {

    const todayDate = moment ();
    const currentDayElement = $('#currentDay');
    
    //Container that holds the calendar
    const container = $('div.container');
    
    //Header Date - using moment.js
    currentDayElement.text(todayDate.format('dddd, MMMM DD YYYY'));
    
    
    for (let i = 9; i < 18; i++) {
    
        const rowEl = $('<div>');
        const hourEl = $('<div>');
        const calTextArea = $('<textarea>');
        const saveBtn = $('<button>');
        const currentHour = moment ().hour();
    
        rowEl.addClass('row time-block');
        hourEl.addClass('col-1 hour');
        hourEl.text(i + "AM");
        calTextArea.addClass('col-10 storage');
        calTextArea.attr('input');
        saveBtn.addClass('col-1 saveBtn');
        saveBtn.attr('type', 'button');
        saveBtn.html('<i class="far fa-save"></i>');
    
        container.append(rowEl);
        rowEl.append(hourEl, calTextArea, saveBtn);
        
        if ( i > 12) {
            hourEl.text (i - 12 + "PM");
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

});

const button = document.querySelector('.saveBtn')

var todo = '.storage'

function storeTodo(){
    console.log(storeTodo)
localStorage.setItem('text', todo)
}

button.addEventListener('click', storeTodo)