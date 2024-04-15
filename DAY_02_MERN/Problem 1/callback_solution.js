const fs = require('fs');
const path = require('path');

// Function to read a file asynchronously and return its contents via callback
function readFile(filename, callback) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, data);
    });
}

// Function to aggregate data from multiple files using callbacks
function aggregateDataWithCallbacks(filenames, callback) {
    let aggregatedData = [];
    let count = 0;

    filenames.forEach(filename => {
        const filePath = path.join(__dirname, 'files', filename); // Construct file path
        readFile(filePath, (err, data) => {
            if (err) {
                callback(err, null);
                return;
            }
            aggregatedData.push(data);
            count++;
            if (count === filenames.length) {
                callback(null, aggregatedData);
            }
        });
    });
}

// Example usage
const files = ['file1.txt', 'file2.txt', 'file3.txt'];
aggregateDataWithCallbacks(files, (err, data) => {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log('Aggregated Data:', data);
});
