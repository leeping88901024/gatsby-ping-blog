import React from 'react'
import wrapLayout from '../api/wraplayout'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import ShareBox from '../components/ShareBox'
import Card from '../components/Card'
import { graphql } from 'gatsby';
import { parseChineseDate } from '../api/date'
import { getFirstParagraph } from '../api/text';

const IndexPage = ({ data, location }) => (
  <div className="row homepage">
  {/* 图片
      原码设计是在浏览博文的时候要对以下的内容进行替换，可知其也是构成博文的一部分
   */}
    <Header
      img={data.header.headerImage}
      title={data.header.title}
      titleVisible={data.header.titleVisible}
      subTitle={data.header.subTitle}
      subTitleVisible={data.header.subTitleVisible}
    />
    {/* 个人简绍 */}
    <Sidebar
      totalCount={data.latestPosts.totalCount}
      posts={data.latestPosts.edges}
    />
    <div className="col-xl-6 col-lg-7 col-md-12 col-xs-12 order-2">
      <div className="row">
         {/* 博客文章卡片  先用静态内容进行填充 */}
         {data.pagePosts.edges.map(({ node }, index) => (
          <Card
            title={node.title}
            date={parseChineseDate(node.createdDate)}
            url={node.url}
            headerSize={node.headerSize}
            headerImage={node.headerImgur}
            headerBackgroundColor={node.headerBackgroundColor || 'ededed'}
            key={node.title}
            index={index}
            content={getFirstParagraph(node.content)}
            tags={node.tags}
          />
        ))}
      </div>
    </div>
    <div className="col-xl-2 col-lg-1 order-3" />
    {/* 共享 */}
    <ShareBox url={location.href} hasCommentBox={false} />
  </div>
)

export default wrapLayout(IndexPage)

export const pageQuery = graphql`
  query getNextPage($limit: Int, $skip: Int) {
    header(purpose: { eq: "Home" }) {
      headerImage
      title
      titleVisible
      subTitle
      subTitleVisible
    }
    allPosts: allPostMarkdown(sort: { fields: [createdDate], order: DESC }) {
      edges {
        node {
          id
        }
      }
    }
    latestPosts: allPostMarkdown(
      limit: 6
      sort: { fields: [createdDate], order: DESC }
    ) {
      totalCount
      edges {
        node {
          title
          url
          createdDate
        }
      }
    }
    pagePosts: allPostMarkdown(
      sort: { order: DESC, fields: [createdDate] }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          title
          createdDate
          url
          headerImgur
          content
          tags
        }
      }
    }
  }
`;