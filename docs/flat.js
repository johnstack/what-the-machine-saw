var request = new XMLHttpRequest();
var imghost = 'https://s3-eu-west-1.amazonaws.com/smgco-images/images/';

request.addEventListener('load', function (e) {
  // response comes back as "{data: [{attributes: {locations: [{...}], summary_title: '...'} ...}, {} ...]}"
  JSON.parse(this.responseText).data.forEach(function (el) {
    if (!el.attributes.multimedia[0] || !el.attributes.multimedia[0].enhancement || !el.attributes.multimedia[0].enhancement.rekognition[0] || !el.attributes.multimedia[0].enhancement.rekognition[0].labels[0]) {
      getObject();
      return;
    }
    
    document.getElementById('title').innerHTML = '<h1><a href="' + el.links.self + '">' + el.attributes.summary_title + '</a></h1>';
    document.getElementById('pix').innerHTML = '<img src="' + imghost + el.attributes.multimedia[0].processed.medium.location + '">';
    if (el.attributes.multimedia[1]) {
      document.getElementById('morepix').innerHTML = '<img src="' + imghost + el.attributes.multimedia[1].processed.medium.location + '">';
    }
    if (el.attributes.multimedia[2]) {
      document.getElementById('evenmorepix').innerHTML = '<img src="' + imghost + el.attributes.multimedia[2].processed.medium_thumbnail.location + '">';
    }
     if (el.attributes.multimedia[3]) {
      document.getElementById('fourthpix').innerHTML = '<img src="' + imghost + el.attributes.multimedia[3].processed.medium_thumbnail.location + '">';
    }
 
    if (el.attributes.multimedia[0].enhancement.rekognition[0].labels[0]) document.getElementById('tags').innerHTML = '<a href="http://collection.sciencemuseum.org.uk/search/imgtag/' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[0].value + '">1. ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[0].value + ' ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[0].details.confidence + '%</a>';
    if (el.attributes.multimedia[0].enhancement.rekognition[0].labels[1]) document.getElementById('moretags').innerHTML = '<a href="http://collection.sciencemuseum.org.uk/search/imgtag/' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[1].value + '">2. ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[1].value + ' ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[1].details.confidence + '%</a>';
    if (el.attributes.multimedia[0].enhancement.rekognition[0].labels[2]) document.getElementById('evenmoretags').innerHTML = '<a href="http://collection.sciencemuseum.org.uk/search/imgtag/' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[2].value + '">3. ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[2].value + ' ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[2].details.confidence + '%</a>';
    if (el.attributes.multimedia[0].enhancement.rekognition[0].labels[3]) document.getElementById('fourthtags').innerHTML = '<a href="http://collection.sciencemuseum.org.uk/search/imgtag/' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[3].value + '">4. ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[3].value + ' ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[3].details.confidence + '%</a>';
    if (el.attributes.multimedia[0].enhancement.rekognition[0].labels[4]) document.getElementById('fifthtags').innerHTML = '<a href="http://collection.sciencemuseum.org.uk/search/imgtag/' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[4].value + '">5. ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[4].value + ' ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[4].details.confidence + '%</a>';
    if (el.attributes.multimedia[0].enhancement.rekognition[0].labels[5]) document.getElementById('sixthtag').innerHTML = '<a href="http://collection.sciencemuseum.org.uk/search/imgtag/' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[5].value + '">6. ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[5].value + ' ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[5].details.confidence + '%</a>';
    if (el.attributes.multimedia[0].enhancement.rekognition[0].labels[6]) document.getElementById('seventhtag').innerHTML = '<a href="http://collection.sciencemuseum.org.uk/search/imgtag/' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[6].value + '">7. ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[6].value + ' ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[6].details.confidence + '%</a>';
    if (el.attributes.multimedia[0].enhancement.rekognition[0].labels[7]) document.getElementById('eighthtag').innerHTML = '<a href="http://collection.sciencemuseum.org.uk/search/imgtag/' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[7].value + '">8. ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[7].value + ' ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[7].details.confidence + '%</a>';
    if (el.attributes.multimedia[0].enhancement.rekognition[0].labels[8]) document.getElementById('ninethtag').innerHTML = '<a href="http://collection.sciencemuseum.org.uk/search/imgtag/' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[8].value + '">9. ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[8].value + ' ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[8].details.confidence + '%</a>';
    if (el.attributes.multimedia[0].enhancement.rekognition[0].labels[9]) document.getElementById('tenthtag').innerHTML = '<a href="http://collection.sciencemuseum.org.uk/search/imgtag/' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[9].value + '">10. ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[9].value + ' ' + el.attributes.multimedia[0].enhancement.rekognition[0].labels[9].details.confidence + '%</a>';
  });
});

// Get a random object
function getObject () {
  request.open('GET', 'https://collection.sciencemuseumgroup.org.uk/search/images/?random=1');
  request.setRequestHeader('accept', 'application/json');
  request.send();
}
getObject();
