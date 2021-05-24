/*----- constants -----*/
//variables for what I want to target
const $name = $('#name');
const $description = $('#description');
//const $input = $('input[type="text"]')


/*----- app's state (variables) -----*/
let exerciseData; //global variable that we can access anywhere below


/*----- cached element references -----*/
const $mainContent = $('main');

/*----- event listeners -----*/
$('form').on('submit', handleGetData);

/*----- functions -----*/

function render() {
    exerciseData.results.map(function(exercise, idx) {
        return `
        $name.text = ${exercise.name}
        $description.text = ${exercise.description}`
    });

    // $name.text(exerciseData.object.keys(results[3]));
    // $description.text(exerciseData.object.keys(results[6]));
    // $name.text(exerciseData.results[0].name);
    // $description.text(exerciseData.results[0].description);

}


function handleGetData(event) {
    event.preventDefault(); //want to prevent a page refresh by calling prventDefault() on 'submit'

    let exploreText = $('input#explore').val(); // getting the value/result from the user input here

    $.ajax({
            url: `https://wger.de/api/v2/exercise/?format=json&limit=400&?=${exploreText}`,
        })
        .then(
            function (data) {
                exerciseData = data;
                render();
                exerciseData = "";


            },
            function (error) {
                console.log('bad request: ', error);
            }

        );
}




// let reformattedArray = kvArray.map(function(obj) {
//     let rObj = {}
//     rObj[obj.key] = obj.value
//     return rObj
// })


// for(var i in jsonData){
//     var key = i;
//     var val = jsonData[i];
//     for(var j in val){
//         var sub_key = j;
//         var sub_val = val[j];
//         console.log(sub_key);
//     }
// }
// success: function(data){
//     $.each(data.results, function(index, object){
//         $("body").append("<div>"+object.name +"</div><br/>")
//     })
// }
// response($.map(data.results, function(index,item) {
//     return {
//         label: item.name,
//         value: item.name

       