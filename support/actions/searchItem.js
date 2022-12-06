import homePage from "../../page_objects/homePage";

export default  async searchForItem => {
   await homePage.search(searchForItem);
}