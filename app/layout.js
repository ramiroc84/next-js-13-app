import '../styles/globals.css'
import Navigation from '../components/Navigation'
import { moonFreeze } from './font'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>
          Mi prim... layout-principal
        </title>
      </head>
      <body className={moonFreeze.className}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
