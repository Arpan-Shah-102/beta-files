import { useNavigate, NavLink } from "react-router";
import { Header } from "../components/Header";
import { FilterGrid } from "../components/FilterGrid";
import "./ListItemPage.css";

export function ListItemPage({ lists, setLists, index, favoriteItems }) {
  const navigate = useNavigate();

  function handleEditName() {
    const newName = prompt("Enter a new name for the list:", lists[index]?.name);
    if (newName && newName.trim() == "") {
      alert("List name cannot be empty.");
    } else if (newName && lists.every((list) => list.name == newName.trim())) {
      alert("A list with this name already exists. Please choose a different name.");
    } else if (newName && newName.trim().length > 16) {
      alert("List name cannot exceed 16 characters.");
    } else if (newName) {
      const updatedLists = [...lists];
      updatedLists[index].name = newName.trim();
      setLists(updatedLists);
      localStorage.setItem("lists", JSON.stringify(updatedLists));

      const newPath = `/lists/${newName.trim().toLowerCase().replace(/[\s/]+/g, '-').replace(/[^a-z0-9-]/g, '')}`;
      navigate(newPath);
    }
  }
  function handleEditDescription() {
    const newDescription = prompt("Enter a new description for the list:", lists[index]?.description);
    if (newDescription.trim() !== null) {
      const updatedLists = [...lists];
      updatedLists[index].description = newDescription;
      setLists(updatedLists);
      localStorage.setItem("lists", JSON.stringify(updatedLists));
    } else {
      alert("Description cannot be empty.");
    }
  }

  function handleDeleteList() {
    if (confirm(`Are you sure you want to delete the list "${lists[index]?.name}"? This action cannot be undone.`)) {
      const updatedLists = [...lists];
      updatedLists.splice(index, 1);
      setLists(updatedLists);
      localStorage.setItem("lists", JSON.stringify(updatedLists));
      navigate("/lists");
    }
  }

  return (
    <>
      <Header title={`${lists[index]?.name}`} />
      <title>{`${lists[index]?.name}`}</title>

      <main className="list-item-page">
        <h2>{lists[index]?.name} <sub onClick={handleEditName} className="edit-icon">✎</sub></h2>
        <p>{lists[index]?.description || 'No description available.'} <sub onClick={handleEditDescription} className="edit-icon">✎</sub></p>
        <NavLink to="/lists"><button className="btn back-to-lists">Back to Lists</button></NavLink>
        <button className="btn delete-list" onClick={handleDeleteList}>Delete 🗑</button>

        <FilterGrid
          items={lists[index]?.items || []}
          favoriteItems={favoriteItems}
          filterBy="list"
          lists={lists}
          setLists={setLists}
          listName={lists[index]?.name}
        />
      </main>
    </>
  );
}