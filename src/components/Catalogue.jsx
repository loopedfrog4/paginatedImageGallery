import React, {useState, useEffect} from "react";
import ItemCard from "./ItemCard"
import images from "../data/image.json"
import axios from "axios";
import { Items } from "./Items";
import { CataloguePagination } from "./CataloguePagination"

function Catalogue(props){
        const [items, setItems] = useState([]);
        const [loading, setLoading] = useState(false);
        const [currentPage, setCurrentPage] = useState(1);
        const [itemsPerPage, setPostsPerPage] = useState(20);

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true);
            const res = await axios.get("https://picsum.photos/v2/list?limit=100");
            setItems(res.data);
            setLoading(false);
        }

        fetchItems();
    }, []);

    // Get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return <>
        <div className="catalogue-container">
            <h1>Shirts</h1>
            <Items items={currentItems} loading={loading}/>
            <CataloguePagination itemsPerPage={itemsPerPage} totalItems={items.length} paginate={paginate}/>
        </div>
    </>
}

export default Catalogue;

// {images.map((image) => {
//     return <ItemCard src={image.download_url}/>
// })}