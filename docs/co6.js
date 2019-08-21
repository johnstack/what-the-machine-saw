var request = new XMLHttpRequest();
var imghost = 'https://s3-eu-west-1.amazonaws.com/smgco-images/images/';

request.addEventListener('load', function (e) {
  // response comes back as "{data: [{attributes: {locations: [{...}], summary_title: '...'} ...}, {} ...]}"
  JSON.parse(this.responseText).data.forEach(function (el) {
    if (!el.attributes.multimedia[0] || !el.attributes.multimedia[0].enhancement || !el.attributes.multimedia[0].enhancement.rekognition[0]) {
      getObject();
    }
    
    document.getElementById('title').innerHTML = '<a href="' + el.links.self + '">' + el.attributes.summary_title + '</a>';
    document.getElementById('pix').innerHTML = '<a href="' + el.links.self + '"><img src="' + imghost + el.attributes.multimedia[0].processed.medium_thumbnail.location + '"></a> ';
    if (el.attributes.multimedia[0].enhancement.rekognition[1]) {
      document.getElementById('morepix').innerHTML = '<a href="' + el.links.self + '"><img src="' + imghost + el.attributes.multimedia[1].processed.medium_thumbnail.location + '"></a> ';
    }
    if (el.attributes.multimedia[0].enhancement.rekognition[0].labels[0]) document.getElementById('tags').innerHTML = '1. ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[0].value + '? ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[0].details.confidence + '%';
    if (el.attributes.multimedia[0].enhancement.rekognition[0].labels[1]) document.getElementById('moretags').innerHTML = '2. ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[1].value + '? ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[1].details.confidence + '%';
    if (el.attributes.multimedia[0].enhancement.rekognition[0].labels[2]) document.getElementById('evenmoretags').innerHTML = '3. ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[2].value + '? ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[2].details.confidence + '%';
    if (el.attributes.multimedia[0].enhancement.rekognition[0].labels[3]) document.getElementById('fourthtags').innerHTML = '4. ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[3].value + '? ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[3].details.confidence + '%';
    if (el.attributes.multimedia[0].enhancement.rekognition[0].labels[4]) document.getElementById('fifthtags').innerHTML = '5. ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[4].value + '? ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[4].details.confidence + '%';
    if (el.attributes.multimedia[0].enhancement.rekognition[0].labels[5]) document.getElementById('sixthtag').innerHTML = '6. ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[5].value + '? ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[5].details.confidence + '%';
    if (el.attributes.multimedia[0].enhancement.rekognition[0].labels[6]) document.getElementById('seventhtag').innerHTML = '7. ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[6].value + '? ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[6].details.confidence + '%';
    if (el.attributes.multimedia[0].enhancement.rekognition[0].labels[7]) document.getElementById('eighthtag').innerHTML = '8. ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[7].value + '? ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[7].details.confidence + '%';
    if (el.attributes.multimedia[0].enhancement.rekognition[0].labels[8]) document.getElementById('ninethtag').innerHTML = '9. ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[8].value + '? ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[8].details.confidence + '%';
    if (el.attributes.multimedia[0].enhancement.rekognition[0].labels[9]) document.getElementById('tenthtag').innerHTML = '10. ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[9].value + '? ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[9].details.confidence + '%';
    if (el.attributes.multimedia[0].enhancement.rekognition[0].labels[10]) document.getElementById('eleventhtag').innerHTML = '11. ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[10].value + '? ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[10].details.confidence + '%';
  });
});

// Get a random object
function getObject () {
  request.open('GET', 'https://collection.sciencemuseumgroup.org.uk/search/images/?random=1');
  request.setRequestHeader('accept', 'application/json');
  request.send();
}
getObject();
