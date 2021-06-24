import React, { useEffect, useState, memo, useCallback } from "react";
import { List } from "./List";
import { Button } from "./Button";
import { filterAndSortTheList } from '../utils';

export const SearchForm = memo(function SearchForm() {
  const [searchString, setSearchString] = useState("");
  const [isSortingDesc, setSortingDesc] = useState(false);
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);

  useEffect(() => {
    console.count("render fetch");

    fetch("https://reqres.in/api/products")
      .then((response) => response.json())
      .then((json) => {
        const sortedList = filterAndSortTheList(json.data, searchString, isSortingDesc);
        setProducts(sortedList)
        setSortedProducts(sortedList)
      }
    );
  }, []);

  useEffect(() => {
    const sortedList = filterAndSortTheList(products, searchString, isSortingDesc);
    setSortedProducts(sortedList);
  }, [searchString, isSortingDesc])

  const changeSearchString = useCallback(
    (inputFieldEvent) => {
      setSearchString(inputFieldEvent.target.value);
    }, [],
  )

  const changeTheSortingOrder = useCallback(
    () => {
      setSortingDesc((value) => !value);
    }, [],
  )

  return (
    <div className="App">
      <input
        type="search"
        value={searchString}
        onChange={changeSearchString}
      />
      <Button onClick={changeTheSortingOrder}>
        Change sort direction
      </Button>
      <List products={sortedProducts} />
    </div>
  )
})