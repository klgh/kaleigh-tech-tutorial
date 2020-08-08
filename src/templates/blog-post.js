import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function BlogPost({ data }) {
  const post = data.allWpPost.nodes[0]
  console.log(post)
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <h3>{post.date}</h3>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
         query($slug: String!) {
           allWpPost(filter: { slug: { eq: $slug } }) {
             nodes {
               title
               content
               date(formatString: "MMMM DD, YYYY")
             }
           }
         }
       `
