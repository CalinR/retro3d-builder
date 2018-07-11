import React from 'react'

const InfoContainer = (props) => {
  if(props.show){
    let translate = {
      x: -50,
      y: -150
    }

    let styles = {
      left: `${ props.x }px`,
      top: `${ props.y }px`,
      position: 'absolute'
    }

    if(props.x < 50 && props.y < 50){
      translate.x = 50;
      translate.y = 50;
    }
    else if(props.x > window.outerWidth - 50 && props.y < 50){
      console.log(props.x, props.y);
      translate.x = -150;
      translate.y = 50;
    }
    else if(props.x < 50){
      translate.x = 50;
      translate.y = -50;
    }
    
    else if(props.x > window.outerWidth - 50){
      translate.x = -150;
      translate.y = -50;
    }
    else if(props.y < 50){
      translate.x = -50;
      translate.y = 50;
    }

    styles.transform = `translate(${ translate.x }%,${ translate.y }%)`;

    return (
      <div className="info-container" style={ styles }>
        { props.x }, { props.y }
      </div>
    )
  }
  return null;
}

export default InfoContainer;