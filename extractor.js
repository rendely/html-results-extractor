function extractElements() {
  // Your DOM extraction logic here
  console.log('Extracting elements from the DOM');
  console.log(document.querySelectorAll('a')[10].href)
}

// Only run the extraction if we're not in a test environment
if (typeof window !== 'undefined' && window.document) {
  extractElements();
}

// Make the function available for testing
if (typeof module !== 'undefined') {
  module.exports = { extractElements };
}