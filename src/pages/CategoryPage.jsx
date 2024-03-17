import { useSelector } from "react-redux";
import SingleItems from "../components/singleItems";
import { useParams } from "react-router-dom";

function CategoryPage() {
  const { category } = useParams();

  const storeItems = useSelector((store) => store.items);

  const itemsInCategory = storeItems.filter((item) => item.category === category);

  if (!itemsInCategory || itemsInCategory.length === 0) {
    return <div className="container">Items not found in this category</div>;
  }

  return (
    <div className="all-items">
      <div className="container">
        <div className="title-section">
          <h2>{category}</h2>
          <h4>Happy Shopping</h4>
        </div>
        <div className="items-container">
          {itemsInCategory.map((item) => (
            <SingleItems key={item.id} index={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;
