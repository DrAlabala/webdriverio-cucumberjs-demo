import searchResults from "../../page_objects/searchResults";

export default () => {
    expect(searchResults.getResultsCount).not.toBe(0);
}