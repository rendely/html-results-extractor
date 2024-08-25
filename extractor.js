// TODO
// - div support
// - find container with items that have low variance on scoring items





function extractElements() {

  const tables = Array.from(document.body.querySelectorAll('tbody'));

  const tableData = tables.map((t, i) => {
    return {
      index: i,
      depthInBody: countAncestors(t),
      numRows: Array.from(t.querySelectorAll('tr')).length,
      numLinks: countLinks(t),
      numTabindex: countTabIndex(t),
      numImages: countImages(t)
    }
  });
  
  console.table(tableData);

  console.log('\n-----\n')

  const lists = Array.from(document.body.querySelectorAll('ul,ol'));
  const listData = lists.map((l, i) => {
    return {
      index: i,
      depthInBody: countAncestors(l),
      numItems: Array.from(l.querySelectorAll('li')).length,
      numLinks: countLinks(l),
      numTabindex: countTabIndex(l),
      numImages: countImages(l)
    }
  })
  console.table(listData);
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
  // console.log(uniqueLinks[0])
  return uniqueLinks.length;
}

function countTabIndex(element){
  const els = Array.from(element.querySelectorAll('[tabindex]'));
  return els.length;
}

function countImages(element){
  const els = Array.from(element.querySelectorAll('img'));
  return els.length;
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