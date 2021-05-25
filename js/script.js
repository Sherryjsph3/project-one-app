/*----- constants -----*/
//variables for what I want to target
const $name = $('#name');
const $description = $('#description');

/*----- app's state (variables) -----*/
let exerciseData; //global variable that we can access anywhere below
 // getting the value/result from the user input here
 

/*----- cached element references -----*/
const $mainContent = $('main');

/*----- event listeners -----*/
// $('form').on('submit', handleGetData);

/*----- functions -----*/

 // render() responsible for visualizing
//.find will iterate through results and return the first result that matches the userInput. 
// the results variable is referencing the array and result is representing each element within the array 

function render() { 
    const html = exerciseData.results.map(function(result) {
        return `
        <article>
        <h3>${result.name}</h3>
        </article>
        `;
    });
    $mainContent.append(html);
 };

 
// forEach
//  exerciseData.results.forEach(function(result) {
//     if (result === exerciseData.name) {   
//         $name.text(exerciseData.results.name);
//     }

// })

getApiData();
//want to prevent a page refresh by calling prventDefault() on 'submit'
    function getApiData() {
        // preventDefault(); 
        $.ajax({
                url: "https://wger.de/api/v2/exercise/?format=json&limit=20&language=2",
                
            })
            .then(
                function (data) {
                    exerciseData = data;
                    render();
                    // exerciseData = "";
                },
                function (error) {
                    console.log('bad request: ', error);
                }
                
            );    
    }

   










    // let userInput = $('input#search').val();
    // let apiMatchWithUserInput = exerciseData.results.find(function(result) { 
    //     if (result.name === userInput) {
    //        $name.text(apiMatchWithUserInput.name);
    //        $description.text(apiMatchWithUserInput.description);
    //     };
        
    // });
  



