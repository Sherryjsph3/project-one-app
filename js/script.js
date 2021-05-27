/*----- constants -----*/
/*----- app's state (variables) -----*/
let exerciseData; //global variable that we can access anywhere below
// getting the value/result from the user input here

/*----- cached element references -----*/
const $mainContent = $('main');
const $modal = $('.modal');

/*----- event listeners -----*/
//this event handler will only get called when a card is clicked
$mainContent.on('click', 'article', handleClick);

/*----- functions -----*/
// render() responsible for visualizing
// the results variable is referencing the array and result is representing each element within the array 

function render() {
    let html = exerciseData.results.map(function (result) {

        return `
        <article data-exercise-name='${result.name}' >
        <h3>${result.name}</h3>
        </article>`;
    });

    $mainContent.append(html);
}


getApiData();

function getApiData() {
    $.ajax({
            url: 'https://wger.de/api/v2/exercise/?format=json&limit=20&language=2',
        })
        .then(function (data) {
                exerciseData = data;
                render();
            },
            function (error) {
                console.log('bad request: ', error);
            }
        );
}

function handleClick() {
    const exerciseName = this.dataset.exerciseName;

    const outcome = exerciseData.results.find(function (result) {
        return result.name === exerciseName;

    });

    const html = `
        <div>
            <h3><strong>${outcome.name}</strong></h3>
            <p id='description'>${outcome.description}</p>
            </div>
        `;

    $modal.html(html).modal();

}