import { NavLink } from 'react-router'
import { Header } from '../components/Header'
import './ErrorPage.css'

export function ErrorPage() {
  return (
    <>
      <title>Page Not Found</title>
      <Header
        title="Error"
      />

      <main>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <NavLink to="/">Go back home</NavLink>
      </main>
    </>
  )
}