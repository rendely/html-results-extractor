const fs = require('fs');
const path = require('path');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const { extractElements } = require('./extractor.js');

const testDir = path.join(__dirname, 'examples');

fs.readdirSync(testDir).forEach(file => {
    if (path.extname(file) === '.html') {
        const filePath = path.join(testDir, file);
        const html = fs.readFileSync(filePath, 'utf8');
        const dom = new JSDOM(html);
        
        global.window = dom.window;
        global.document = dom.window.document;

        console.log(`Testing ${file}:`);
        extractElements();
        console.log('-------------------');
    }
});