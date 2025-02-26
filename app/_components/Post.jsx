import React from 'react'

const Post = ({title, content , author , id}) => {
  return (
      <div className='flex flex-col justify-center border rounded-md p-7'>
        <h4 className='text-center font-semibold'>Author - {author}</h4>
        <h4>Title - {title}</h4>
        <p>Content - {content}</p>
    </div>
  )
}

export default Post