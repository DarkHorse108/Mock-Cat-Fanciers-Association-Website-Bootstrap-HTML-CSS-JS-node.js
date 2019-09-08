	/*Uses images provided from The Cat API to create an image element in the #RandomCatImage div within the Cat Care Page. Source: https://docs.thecatapi.com/
	I used the AJAX lecture code to guide me on ensuring that my GET request was properly sent and that the response was properly utilized, along with the information provided by
	the API documentation. No API key is required to load the random images, though there is a requirement if you wish to upload images to the API*/

	document.addEventListener('DOMContentLoaded', GETCat);

	function GETCat(){

	document.getElementById('GetCatButton').addEventListener('click', function(event){

		var request = new XMLHttpRequest();

		request.open('GET', 'https://api.thecatapi.com/v1/images/search?size=full', true);

		request.addEventListener('load', function(){

			if((request.status >= 200) && (request.status < 400))
			{
				var response = JSON.parse(request.responseText);

				var html = '<img id="randomCatImage" src=" ' + response[0]['url'] + ' ">';
				document.getElementById('RandomCatImage').innerHTML = html;		
			}
			else
			{
				console.log('Error in network request: ' + request.statusText);
			}

		});

		request.send(null);

		event.preventDefault();
		});
	}