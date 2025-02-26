'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const AddPost = () => {
  const router = useRouter()
  const [title, setTitle] = React.useState('')
  const [content, setContent] = React.useState('')
const handleTitleChange = (event) => {
  setTitle(event.target.value)
}

const handleContentChange = (event) => {  
  setContent(event.target.value)
}

const handleSubmit = async(event) => { 
   event.preventDefault()
   if(!title || !content) return
   try{
      await fetch('/api/add-post',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, content})
      })
   }catch(error){
    console.error(error)
   }
   
   setTitle('')
    setContent('')
   
}
  return (
    <main>
        <div>
        <Link href={'/'}>View Feed</Link>
        </div>
      <div className='flex justify-center items-center h-screen'>
       <div className='h-96 w-96 border-2 border-gray-300 rounded-md flex flex-col'>
        <div className='font-semibold p-5 text-center text-xl'>Add Post</div>
       <form onSubmit={handleSubmit}>
        <div className='flex flex-col p-5'>
          <label htmlFor='title'>Title</label>
          <input
           type="text"
           id="title"
           placeholder='Title'
           onChange={handleTitleChange}
           required
           className='rounded-sm pl-2 text-black'
           />
           </div>
        <div className='flex flex-col p-5'>
          <label htmlFor='content'>Content</label>
          <input
           type="text"
           id="content"
           placeholder='Content'
           onChange={handleContentChange}
           required
           className='rounded-sm pl-2 text-black'
           />
           </div>
           <div className='flex justify-center p-5'>
            <button type='submit' className='border p-2 rounded-md'>Submit</button>
           </div>
       </form>
      </div>
      </div>

    </main>
  )
}

export default AddPost