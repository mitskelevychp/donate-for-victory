import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import PaginationCard from "../paginationCard/PaginationCard";
import PaginationPages from "../paginationPages/PaginationPages";
import { GET_PRODUCTS_URL } from "../../endpoints/endpoints";

function Pagination({ query }) {
  const [coods, setCoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [goodsPearPages] = useState(12);

  useEffect(() => {
    const getGoods = async () => {
      setLoading(true);
      const res = await axios.get(GET_PRODUCTS_URL);
      if (query !== "") {
        const coodsFiltre = res.data.filter((product) => product.category === `${query}`);
        setCoods(coodsFiltre);
        setLoading(false);
      } else {
        setCoods(res.data);
        setLoading(false);
      }
    };

    getGoods();
  }, [query]);


  const lastCoodsIndex = currentPage * goodsPearPages;
  const firstCoodsIndex = lastCoodsIndex - goodsPearPages;
  const currentCoods = coods.slice(firstCoodsIndex, lastCoodsIndex);

  const paginateFunc = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <PaginationCard coods={currentCoods} loading={loading} />
      {/* eslint-disable-next-line max-len */}
      <PaginationPages goodsPearPages={goodsPearPages} tottalCoods={coods.length} paginateFunc={paginateFunc} />
    </>
  );
}

export default Pagination;

Pagination.propTypes = {
  query: PropTypes.string.isRequired,
};
