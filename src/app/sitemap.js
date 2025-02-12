export default async function sitemap() {
    const baseUrl = 'https://www.isharg.com'
  
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
      },
    ]
  }