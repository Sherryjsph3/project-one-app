/*----- constants -----*/
/*----- app's state (variables) -----*/
let exerciseData; //global variable that we can access anywhere below
 // getting the value/result from the user input here

/*----- cached element references -----*/
const $mainContent = $('main');
const $modal = $('.modal');

/*----- event listeners -----*/
$mainContent.on('click', 'article', handleClick);//this event handler will only get caalled when a card is clicked

/*----- functions -----*/
 // render() responsible for visualizing
// the results variable is referencing the array and result is representing each element within the array 

function render() { 
    const html = exerciseData.results.map(function(result) {
        return `
        <article data-exerise-name"${result.name}">
        <h3>${result.name}</h3>
        </article>
        `;
    });
    $mainContent.append(html);
 };

getApiData();
    function getApiData() {
        $.ajax({
                url: "https://wger.de/api/v2/exercise/?format=json&limit=16&language=2",
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
    const exerciseName = this.dataset.exerciseName
     
    const outcome = exerciseData.results.find(function(result) {
         return result.name === exerciseName;
         
     });
     console.log(outcome);


        const html = `
        <div>
            <h3>${exerciseData.results.name}</h3>
            <p>${exerciseData.results.description}</p>
            </div>
        `;

        $modal.html(html).modal();
};











  



