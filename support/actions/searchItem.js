export default async (searchKeyWord, searchField, searchButton) => {
    await searchField.setValue(searchKeyWord);
    await searchButton.click();
}