require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');
let imageData = require('../data/imageData.json');
genImageUrl=((imageDataArr)=>{
  for(let i = 0,j=imageDataArr.length;i<j;i++){
    var singleImageData = imageDataArr[i];

    singleImageData.imageURL = require('../iamges/'+
    singleImageData.fileName);
    imageDataArrp[i] = singleImageData;
  }
  return imageDataArr;
})(iamgeData)

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec">
          </section>
          <nav className="controller-nav">
          </nav>
        </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
