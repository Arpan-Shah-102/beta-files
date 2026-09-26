import { Header } from "../components/Header";
import { ListPreview } from "../components/ListPreview";
import "./Lists.css";

export function Lists({ lists, setLists }) {
  function createList() {
    const totalListNum = parseInt(localStorage.getItem("totalListNum")) || 0;
    localStorage.setItem("totalListNum", (totalListNum + 1));
    const newList = {
      name: `New List ${totalListNum + 1}`,
      description: "",
      items: [],
      updatedDate: new Date().toLocaleDateString()
    };
    setLists([...lists, newList]);
    localStorage.setItem("lists", JSON.stringify([...lists, newList]));
  }

  const sortedLists = [...lists].sort((a, b) => new Date(b.updatedDate) - new Date(a.updatedDate));

  return (
    <>
      <Header title="Lists" />
      <title>Lists</title>

      <main className="lists">
        <h2>My Lists</h2>
        <button onClick={createList} className="create-list">Create List</button>

        <div className="list-container">
          {lists.length === 0 ? (
            <>
              <h3>No lists available.</h3>
              <p>Create a new list to show here.</p>
            </>
          ) : (
            <>
              {sortedLists.map((list, index) => (
                <ListPreview
                  key={index}
                  listItem={list}
                />
              ))}
            </>
          )}
        </div>
      </main>
    </>
  );
}