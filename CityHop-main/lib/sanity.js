import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'db',
  apiVersion: 'v1',
  token: process.env.SANITY_TOKEN,
  useCdn: false,
})
