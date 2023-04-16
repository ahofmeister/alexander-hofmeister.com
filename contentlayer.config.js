import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    publishedAt: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'src/posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
          onVisitHighlightedLine(node) {
            node.properties.className.push("line--highlighted")
          },
        },
      ],
    ],
  },

})
