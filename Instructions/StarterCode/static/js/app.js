// from data.js
var tableData = data;

// YOUR CODE HERE!
var list = d3.select("tbody");

function buildTable(data) {
    list.html("");

    //append
    data.forEach((inputRow)=>{
        var row = list.append("tr");
        Object.values(inputRow).forEach((val)=>{
            let cells = row.append("td");
            cells.text(val);
        }

        );

    }

    );
}
//add filter
var filters = {
    //built new function to update filters
}
function updateFilters() {
    var elements = d3.select(this).select("input");
    var elValue = elements.property("value");
    var filterId = elements.attr("id");
    if (elValue) {
        filters[filterId] = elValue;

    }
    else {
        delete filters[filterId]
    }
    filterTable();
}
function filterTable() {
    //const aliens = d3.select("#datetime").property("value");
    let secondData = tableData;
    //if (aliens){
        //secondData = secondData.filter(row=>row.datetime===aliens);
    //}
    Object.entries(filters).forEach(([key,value])=>{
        secondData = secondData.filter(row=>row[key]===value);

    }

    );
    buildTable(secondData)

}
d3.selectAll(".filter").on("click",updateFilters)


buildTable(tableData)