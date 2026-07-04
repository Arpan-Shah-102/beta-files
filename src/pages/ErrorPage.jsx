import { Header } from '../components/Header'
import './ErrorPage.css'

export function ErrorPage() {
  return (
    <>
      <title>Page Not Found</title>
      <Header />

      <div className="error-page">
        <h2>404 - Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
      </div>
    </>
  )
}