import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"
export async function POST(request){
    try{
        const response = await request.json()
        const {title,content} = response
        if (!title || !content) {
            return NextResponse.json({ error: "Title and content are required." }, { status: 400 });
        }
        console.log({response})
        const result = await prisma.post.create({
            data:{
                title: title,
                content: content,
                published: true,
                authorId: 1
            }
        })
    }catch(error){
        console.error(error)
    }
    
    return NextResponse.json({
        data:response
    })

}