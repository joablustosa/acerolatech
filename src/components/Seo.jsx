import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getPageSeo, getJsonLd } from '../content/seo'
import { applyPageSeo } from '../utils/seoHead'

export default function Seo() {
  const { pathname } = useLocation()

  useEffect(() => {
    const seo = getPageSeo(pathname)
    const jsonLd = getJsonLd(pathname)
    applyPageSeo(seo, jsonLd)
  }, [pathname])

  return null
}
