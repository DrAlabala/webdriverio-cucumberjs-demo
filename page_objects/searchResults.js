class SearchResults {
    get searchResults() {
        return $$("div[class='s-item__wrapper clearfix']");
    }

    getResultsCount() {
        return this.getResultsCount.length;
    }
}

export default new SearchResults();