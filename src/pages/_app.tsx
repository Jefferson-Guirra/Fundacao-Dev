import Link from 'next/link'
import '../styles/globals.css'
import { PrismicProvider } from '@prismicio/react'
import { AppProps } from 'next/app'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName, linkResolver } from '../services/prismicio'
import { Header } from '../components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Header />
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
    </>
  )
}
