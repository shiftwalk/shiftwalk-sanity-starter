// All Slugs go here...
const globalSlugs = {
  home: '/',
  work: '/work',
  // etc: '/etc'
}

const secret = process.env.SANITY_STUDIO_SANITY_PREVIEW_SECRET
export const getGlobalSlug = (slug) => globalSlugs[slug]

// Change remote url...
const remoteURL = 'https://your-live-site.com'
const localURL = 'http://localhost:3000'
export const previewURL = window.location.hostname === 'localhost' ? localURL : remoteURL

export const createUrl = ({ slug, globalSlug }) => {
  if (!globalSlug || !previewURL) {
    console.warn('Missing slug or previewURL', { globalSlug, previewURL })
    return ''
  }
  let path = `${globalSlug}`
  if (slug) path += `/${slug.current}`
  return `${previewURL}/api/preview?secret=${secret}&slug=${path}`
}

export default function resolveProductionUrl (document) {
  const url = createUrl({ globalSlug: getGlobalSlug(document._type), slug: document.slug })
  return url
}
