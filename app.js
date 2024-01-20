// let activity = [];
// function addActivity() {
//     let activityNames = document.getElementById("activity").value;
//     if (activityNames.trim() !== "") {
//         activity.push(activityNames);
//         let newButton = document.createElement('input');
//         newButton.type = 'checkbox';
//         newButton.id = 'checkbox' + activity.length;
//         newButton.value = activityNames;
//         let label = document.createElement('label');
//         label.htmlFor = newButton.id;
//         label.appendChild(document.createTextNode(activityNames));
//         let container = document.createElement('div');
//         container.appendChild(newButton);

//         // Assuming you have an element with the class 'allButtons'
//         let allButtonsContainer = document.querySelector('.allButtons');
//         allButtonsContainer.appendChild(container);
//     }
// }
function addActivity() {
    let activityNames = document.getElementById("activity").value;

    if (activityNames.trim() !== "") {
        let newCheckbox = document.createElement('input');
        newCheckbox.type = 'checkbox';

        let label = document.createElement('label');
        label.htmlFor = 'checkbox' + document.querySelectorAll('.task-container').length + 1;
        label.appendChild(document.createTextNode(activityNames));

        let container = document.createElement('list');
        container.className = 'task-container';
        container.appendChild(newCheckbox);
        container.appendChild(label);
        newCheckbox.addEventListener('change', function () {
            label.classList.toggle('line-through-label', this.checked);
        });

        document.querySelector('.allButtons').appendChild(container);

        // Clear the input field
        document.getElementById("activity").value = "";
    }
}
