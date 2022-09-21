import React from 'react'
import Article from './Article'
import dataArticle from "../data"
import { useState } from 'react'

const Home = () => {
    const [arr, setArr] = useState(dataArticle)
    const [articleTitle, setArticleTitle] = useState('')
    const [articleContent, setArticleContent] = useState('')
    
    const deleteHandler = (position) => {
        setArr(arr.filter((article, index) => index !== position))
    }
    
    const addHandler = (e) => {
        e.preventDefault()
        const article = {
            title: articleTitle,
            content: articleContent,
            date: new Date()
        }
        setArr([...arr, article])
    }
    
  return (
    <div>
        <h1>Bulletin Board</h1>
        <main className='articlesContainer'>
            {
                arr.map((d, index) => <Article key={index} deleteHandler={deleteHandler} index={index} {...d} isButtonsShown={true}/>)
            }
        </main>
        <button className='buttonNewArticle'>
            Create New Article
        </button>
        
        <div>
        <form action="" className='formContainer'>
            <input type="text" placeholder='Article Title' value={articleTitle} onChange={(e) => setArticleTitle(e.target.value)}/>
            <input type="text" placeholder='Article Content' value={articleContent} onChange={(e) => setArticleContent(e.target.value)}/>
            <button className='buttonEditPostArticle' onClick={addHandler}>
                Submit
            </button>
        </form>
    </div>
    </div>
  )
}

export default Home