function extractElements(document) {

  const tables = Array.from(document.body.querySelectorAll('tbody'));
  tables.map((t, i) => {
    console.log(`Table ${i}`);
    console.log(`    Depth in body: ${countAncestors(t)}`);
    console.log(`    Num rows: ${Array.from(t.querySelectorAll('tr')).length}`);
    console.log(`    Num links: ${countLinks(t)}`);
  })

  console.log('\n-----\n')

  const lists = Array.from(document.body.querySelectorAll('ul,ol'));
  lists.map((l, i) => {
    console.log(`List ${i}`);
    console.log(`    Depth in body: ${countAncestors(l)}`);
    console.log(`    Num items: ${Array.from(l.querySelectorAll('li')).length}`)
    console.log(`    Num links: ${countLinks(l)}`);
  })
}

function countLinks(element) {
  const links = Array.from(element.querySelectorAll('a'));
  const trueLinks = links.filter(l => {
    if (l.href == '#') return false
    if (l.href.length <= 1) return false
    return true
  });
  const uniqueLinks = [...new Set(trueLinks.map(a => a.href))];
  // uniqueLinks.map(a => console.log(a));
  console.log(uniqueLinks[0])
  return uniqueLinks.length;
}

function countAncestors(element) {
  let count = 0;
  let currentElement = element;

  // Traverse up the DOM tree until you reach the <body> element or the root
  while (currentElement.parentElement && currentElement.parentElement !== document.body) {
    currentElement = currentElement.parentElement;
    count++;
  }

  return count;
}

function printLinks(nodeList) {
  Array.from(nodeList).map(e => {
    const links = e.querySelectorAll('a');
    Array.from(links).map(a => {
      console.log(a.href)
    })
  })
}

function printElements(nodeList) {
  Array.from(nodeList).map(e => {
    console.log(e.textContent)
  })
}


// // Only run the extraction if we're not in a test environment
// if (typeof window !== 'undefined' && window.document) {
  // extractElements(document);
// }

// // Make the function available for testing
// if (typeof module !== 'undefined') {
  module.exports = { extractElements };
// }