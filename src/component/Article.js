import React, { useState } from 'react'

const Article = ({index, deleteHandler, isButtonsShown, title, content, date}) => {
    const [toggleArticle, setToggleArticle] = useState(false);
    
    return (
        <>
            <article className='articleContainer' onClick={() => setToggleArticle(true)}>
                <h1>{title}</h1>
                <p>{content}</p>
                <p>{date.toString()}</p>
                {isButtonsShown && <div className="buttonsContainer">
                    <button>
                        Edit
                    </button>
                    <button onClick={() => deleteHandler(index)}>
                        Delete
                    </button>
                </div>}
            </article>
            
            {toggleArticle && 
                <div 
                    className='modal'
                    onClick={(e) => {
                        e.stopPropagation()
                        setToggleArticle(false)
                    }}>
                    <div>
                        <button onClick={() => {
                        setToggleArticle(false)
                    }}>x</button>
                        <h1>{title}</h1>
                        <p>{content}</p>
                        <p>{date.toString()}</p>
                    </div>
                </div>
            }
        </>
    )
}

export default Article