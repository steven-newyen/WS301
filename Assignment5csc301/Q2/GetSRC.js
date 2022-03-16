if (!document.URL.includes('')) {
    alert("Hi");
} else {
var srcNodeList = document.querySelectorAll('[src]');
for (var i = 0; i < srcNodeList.length; ++i) {
  var item = srcNodeList[i];
  var src= [i]
    if(item.getAttribute('src') !== null){
         src=(item.getAttribute('src'));
    }
}

let links = src;
  
    // create string that will contain the HTML for the links
    let string = '<ul style = "padding:0px;">\n';
    for (var i = 0; i < links.length; ++i) {
        string += '<li><a>' + links + '</a></li>';
    }
    string += '</ul>';

    // create a div to hold the elements
    let div = document.createElement('div');

    // set the links string to the innerHTML
    div.innerHTML = string;

    // style the div
    div.className = 'headerCTA header-column';
    div.style.zIndex = '1000';
    div.style.position = 'fixed';
    div.style.top = '15%';
    div.style.left = '0%';
    div.style.backgroundColor = 'black';
    div.style.padding = '1%';
    div.style.border = 'solid 1px black';
	div.style.width= '20%'
	div.style.overflow = "Scroll";
	div.style.height = '30%';

    // append the div to the body so that it is displayed on the page
    document.body.append(div)
}


//Comment for Dr. Dancik, I kinda got this working wasn't sure how I could make it so all src would show rather than have one repeat 