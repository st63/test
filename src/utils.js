export function filterAndSortTheList(products, searchString, isSortingDesc) {
  return [...products]
  .filter((item) => item.name.includes(searchString))
  .sort((a, z) =>
    isSortingDesc
    ? z.name.localeCompare(a.name)
    : a.name.localeCompare(z.name)
  )
}