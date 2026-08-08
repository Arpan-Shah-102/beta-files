import { Header } from '../components/Header';
import { FileCard } from '../components/FileCard';
import './FilePage.css';

function capitalizeStr(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function FilePage({ item, favoriteItems }) {
  return (
    <>
      <Header
        title={item.name}
      />

      <main>
        <FileCard
          item={item}
          favoriteItems={favoriteItems}
        />
        <div className="section">
          <h2>{item.name}</h2>
          <h3>{item.date.slice(4, 6)}/{item.date.slice(6, 8)}/{item.date.slice(0, 4)}</h3>
        </div>
        <div className="section">
          <h3>Location: {capitalizeStr(item.type)}</h3>
          <h3>Type: {capitalizeStr(item.filetype)}</h3>
        </div>
        <div className="section tag-section">
          <h3>Tags: </h3>
          {item.tags && item.tags.map((tag, index) => {
            return <p className={`tag tag-${index}`} key={index}>{tag}</p>;
          })}
        </div>
      </main>
    </>
  )
}