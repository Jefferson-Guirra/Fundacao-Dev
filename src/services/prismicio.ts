import * as prismic from '@prismicio/client'
import * as prismicNext from '@prismicio/next'
import sm from '../../sm.json'

export function linkResolver(document: any) {
  if (document.type === 'post') {
    return '/blog/' + document.uid
  }

  return '/'
}

/**
 * The project's Prismic repository name.
 */
export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint)

// Update the routes array to match your project's route structure
/** @type {prismic.ClientConfig['routes']} **/
const routes = [
  {
    type: 'homepage',
    path: '/'
  },
  {
    type: 'page',
    path: '/:uid'
  }
]

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param config {prismicNext.CreateClientConfig} - Configuration for the Prismic client.
 */

export function createClient({
  previewData,
  req,
  ...config
}: prismicNext.CreateClientConfig = {}) {
  const client = prismic.createClient('website-corporativo', config)

  prismicNext.enableAutoPreviews({ client, previewData, req })

  return client
}
