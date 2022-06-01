// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}
//Use this function to update the filters. 
function updateFilters() {

// 4a. Save the element that was changed as a variable.
// 4b. Save the value that was changed as a variable.
// 4c. Save the id of the filter that was changed as a variable
    let date = d3.select("#datetime").property("value");
    let city = d3.select("#city").property("value");
    let state = d3.select("#state").property("value");
    let country = d3.select("#country").property("value");
    let shape = d3.select("#shape").property("value");
   
    // 8. Set the filtered data to the tableData. 
    let filteredData = tableData;

// 5. If a filter value was entered then add that filterId and value
//to the filters list. Otherwise, clear that filter from the filters object.
    if (date) {
    filteredData = filteredData.filter(row => row.datetime === date)
    };
    if (city) {
    filteredData = filteredData.filter(row => row.city === city) 
};
    if (state) {
    filteredData = filteredData.filter(row => row.state === state) 
};
    if (country) {
    filteredData = filteredData.filter(row => row.country === country) 
};
    if (shape) {
    filteredData = filteredData.filter(row => row.shape === shape) 
};

// 6. Call function to apply all filters and rebuild the table
buildTable(filteredData)
};



// 2. Attach an event to listen for changes to each filter
d3.selectAll("input").on("change", updateFilters);

//Build the table when the page loads
buildTable(tableData);

