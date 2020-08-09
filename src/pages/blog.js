import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

const Blog = ({ data }) => (
  <Layout>
    <h1>Blog</h1>
    <ul>
      {data.allWpPost.nodes.map(node => (
        <li>
          <Link to={`/${node.slug}`}>
            <div key={node.slug}>
              <h2 dangerouslySetInnerHTML={{ __html: node.title }} />
              <p className="postDate">{node.date}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export default Blog

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
      nodes {
        title
        slug
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
