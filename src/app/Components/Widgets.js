import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import "./CSS/Widgets.css";
function Widgets() {

  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )
  return (
    <div className='widgets'>
     <div className="widgets__header">
     <h2>LinkedIn News</h2>
     <InfoIcon />
     </div>
     {newsArticle("News are the best")}
     {newsArticle("News are the best")}
     {newsArticle("News are the best")}
     {newsArticle("News are the best")}
     {newsArticle("News are the best")}
    </div>
  )
}

export default Widgets;