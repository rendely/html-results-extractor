function extractElements() {
  const rows = document.querySelectorAll('tr');
  console.log('Rows');
  printLinks(rows);
  const items = document.querySelectorAll('li');
  console.log('Items');
  printLinks(items)
  
}

function printLinks(nodeList){
  Array.from(nodeList).map(e => {
    const links = e.querySelectorAll('a');
    Array.from(links).map(a =>{
      console.log(a.href)
    })
  })
}

function printElements(nodeList){
  Array.from(nodeList).map(e => {
    console.log(e.textContent)
  })
}


// Only run the extraction if we're not in a test environment
if (typeof window !== 'undefined' && window.document) {
  extractElements();
}

// Make the function available for testing
if (typeof module !== 'undefined') {
  module.exports = { extractElements };
}