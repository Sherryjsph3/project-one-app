/*----- constants -----*/
//variables for what I want to target
const $name = $('#name');
const $description = $('description');


/*----- app's state (variables) -----*/
let exerciseData; //global variable that we can access anywhere below




/*----- cached element references -----*/
const $mainContent = $('main');

/*----- event listeners -----*/
/*----- functions -----*/

function handleGetData (evt) {
    evt.preventDefault();
    $.ajax({
            url: "https://wger.de/api/v2/exercise/"
        })
        .then(
            function (data) {
                exerciseData = data;
                render();

            },
            function (error) {
                console.log('bad request: ', error);
            }

        );
}

function render() {
    $name.text(exerciseData.name);
    $description.text(exerciseData.description);
}