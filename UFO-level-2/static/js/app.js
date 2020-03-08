// from data.js
var tableData = data;

//console.log(data);
// YOUR CODE HERE!
//Append a table to the web page 
//and then add new rows of data for each UFO sighting.

tbody=d3.select("tbody");

data.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
}); 

//Listen for events and search through the `date/time` column

//Select filter button
var button = d3.select("#filter-btn");




button.on("click", function() {

  // Select the input element and get the raw HTML node
    var dateInputElement = d3.select("#datetime");
    var countryInputElement = d3.select("#country");
    var stateInputElement = d3.select("#state");
    var cityInputElement = d3.select("#city");
    var shapeInputElement = d3.select("#shape");

  // Get the value property of the input element
    var dateInputValue = dateInputElement.property("value");
    var countryInputValue = countryInputElement.property("value");
    var stateInputValue = stateInputElement.property("value");
    var cityInputValue = cityInputElement.property("value");
    var shapeInputValue = shapeInputElement.property("value");
    
    
    

    var filteredData=tableData;

    if (dateInputValue!=="") {
        filteredData = filteredData.filter(ufo=> (ufo.datetime ===dateInputValue));
    }
    if (countryInputValue!=="") {
        filteredData = filteredData.filter(ufo=> (ufo.country ===countryInputValue));
    }
    if (stateInputValue!=="") {
        filteredData = filteredData.filter(ufo=> (ufo.state ===stateInputValue));
    }
    if (cityInputValue!=="") {
        filteredData = filteredData.filter(ufo=> (ufo.city ===cityInputValue));
    }
    if (shapeInputValue!==""){
        filteredData = filteredData.filter(ufo=> (ufo.shape ===shapeInputValue));
    }
  
    
    

    //empty the table 
    tbody.html("");

    filteredData.forEach((ufo) => {
        var row = tbody.append("tr");
        Object.entries(ufo).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
  
  
});