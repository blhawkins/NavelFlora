window.onload = function patientListFun() {
    var patientDropDown = d3.select('#selDataset')
    d3.json('Data/samples.json').then((importedData) => {
        importedData['names'].forEach((element, index) => {
                var patient = patientDropDown.append('option')
                patient.text(`Patient ${element}`)
                patient.property('value', index)
        });
    });
    createGraphics(0)
};
    //https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload



function createGraphics(index) {
    d3.json('Data/samples.json').then((importedData) => {
    var sampleData = importedData['samples'][index] //??How do I call for a particular entry in the array of patients
    console.log(sampleData);
    topTenIDs = sampleData['otu_ids'].slice(0,10).reverse()
        for (var i = 0; i <= topTenIDs.length -1; i++){
            topTenIDs[i] = 'OTU ' + topTenIDs[i];
        }
    topTenSampleValues = sampleData['sample_values'].slice(0,10).reverse()
    topTenLabels = sampleData['otu_labels'].slice(0,10).reverse()
    console.log(topTenIDs)
    console.log(topTenSampleValues)
    console.log(topTenLabels)
    
    var trace1 = {
        x: topTenSampleValues,
        y: topTenIDs,
        text: topTenLabels,
        type: 'bar',
        orientation: 'h'
    };

    var topTenData = [trace1];

    var layout = {
        title: "Top 10 OTUs",
        margin: {
          l: 100,
          r: 100,
          t: 25,
          b: 100
        }
      };

    Plotly.newPlot("bar", topTenData, layout);

    //Here is the code for building the Demographic Info table
    //This is for the table from 14.3.5 Bonus
    // Object.entries(frequencyCounts).forEach(([key, value]) => {
    //     var li = output.append("li").text(`${key}: ${value}`);
    //   });

    //Here is the code for the Bubble Chart.

    });
}




