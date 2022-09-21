import React from 'react'

const EditPostArticle = () => {
  return (
    <div>
        <form action="" className='formContainer'>
            <input type="text" placeholder='Article Title'/>
            <input type="text" placeholder='Article Content'/>
            <button className='buttonEditPostArticle' >
                Submit
            </button>
        </form>
    </div>
  )
}

export default EditPostArticle