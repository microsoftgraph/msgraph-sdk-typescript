
/** Calculated relationship identifying documents trending around a user. Trending documents are calculated based on activity of the user's closest network of people and include files stored in OneDrive for Business and SharePoint. Trending insights help the user to discover potentially useful content that the user has access to, but has never viewed before. */
export class TrendingItemRequestBuilderGetQueryParameters {
    /** Expand related entities */
    public expand?: string[] | undefined;
    /** Select properties to be returned */
    public select?: string[] | undefined;
    /**
     * Maps the query parameters names to their encoded names for the URI template parsing.
     * @param originalName The original query parameter name in the class.
     * @returns a string
     */
    public getQueryParameter(originalName: string | undefined) : string {
        if(!originalName) throw new Error("originalName cannot be undefined");
        switch(originalName) {
            case "expand": return "%24expand";
            case "select": return "%24select";
            default: return originalName;
        }
    };
}
