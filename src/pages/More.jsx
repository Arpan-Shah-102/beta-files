import { NavLink } from "react-router";
import { Header } from "../components/Header";
import assetData from "../data/asset-data.json";
import "./More.css";

export function More() {
  function slugify(name) {
    return String(name || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[\s/]+/g, '-')
      .replace(/[^a-z0-9-]/g, '')
      .replace(/-+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  
  function getRandomFileSlug(items, rand = Math.random) {
    const arr = Array.isArray(items) ? items : Object.values(items || {});
    if (arr.length === 0) return '';
    const i = Math.floor(rand() * arr.length);
    return slugify(arr[i].name);
  }

  return (
    <>
      <Header
        title="More"
      />
      <title>More</title>

    <main>
      <h2>More</h2>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to={`/${getRandomFileSlug(assetData)}`}>Random File</NavLink>
      <NavLink to="/recently-viewed">Recently Viewed</NavLink>
      <NavLink to="/lists">Your Lists</NavLink>
    </main>
    </>
  )
}