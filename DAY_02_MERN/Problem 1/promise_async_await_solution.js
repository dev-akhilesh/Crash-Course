const fs = require('fs').promises;

// Function to read a file asynchronously and return a promise
async function readFile(filename) {
    try {
        const data = await fs.readFile(filename, 'utf8');
        return data;
    } catch (err) {
        throw err;
    }
}

// Function to aggregate data from multiple files using promises and async/await
async function aggregateDataWithPromises(filenames) {
    const aggregatedData = [];

    for (const filename of filenames) {
        try {
            const data = await readFile(filename);
            aggregatedData.push(data);
        } catch (err) {
            throw err;
        }
    }

    return aggregatedData;
}

// Example usage
const files = ['file1.txt', 'file2.txt', 'file3.txt'];
aggregateDataWithPromises(files)
    .then(data => console.log('Aggregated Data:', data))
    .catch(err => console.error('Error:', err));
 