class HomePage {
    get url() {
        return "/";
    }

    get searchField() {
        return $("#gh-ac");
    }

    get searchButton() {
        return $("#gh-btn");
    }

    async search(keyword) {
        await this.searchField.setValue(keyword);
        await this.searchButton.click();
    }
}
export default new HomePage();