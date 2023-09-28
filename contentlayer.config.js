import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import moonlight from './src/assets/moonlight-ii.json'

export const Snippet = defineDocumentType(() => ({
  name: 'Snippet',
  filePathPattern: `**/snippets/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the snippet',
      required: true,
    },
    publishedAt: {
      type: 'date',
      description: 'The date the snippet was published at',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (snippet) => {
        return `/${snippet._raw.flattenedPath}`
      },
    },
  },
}))

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `**/projects/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the project',
      required: true,
    },
    summary: {
      type: 'string',
      description: 'A brief description of the project',
      required: true
    }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (project) => `/${project._raw.flattenedPath}`,
    },
  },
}))


const options = {
  theme: moonlight,
  onVisitHighlightedLine(node) {
    node.properties.className.push('line--highlighted')
  },
}

export default makeSource({
  contentDirPath: 'src/content',
  documentTypes: [Snippet, Project],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypePrettyCode, options
      ],
    ],
  },

})
