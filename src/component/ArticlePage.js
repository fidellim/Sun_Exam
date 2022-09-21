import React from 'react'
import Article from './Article'


const ArticlePage = ({index, isButtonsShown, d}) => {
  return (
    <div>
        <Article key={index} index={index} {...d} isButtonsShown={isButtonsShown}/>
    </div>
  )
}

export default ArticlePage