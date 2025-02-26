import Image from "next/image";
import prisma from "@/lib/prisma";
import Post from "./_components/Post";
import Link from "next/link";
async function getPosts(){
  const posts = await prisma.post.findMany({
    where:{published: true},
    include:{
      author:{
        select: {name: true}
      }
    }
  })
  return posts
}
export default async function Home() {
  const posts = await getPosts()
  console.log({posts})
  return (
    <div className="h-screen w-full flex justify-center ">
    <div>
      <h1 className="mt-20 text-4xl font-semibold">Feed</h1>
      <Link href={'/add-post'}>Add Post</Link>
      {posts ? posts.map((item)=>{
        return (
          <Post key={item.id}
          title={item.title}
          content={item.content}
          author={item.author?.name}
          ></Post>
        )
      }): <>
      <div>
        No Posts
      </div>
      </>}
    </div>
    </div>
  );
}
