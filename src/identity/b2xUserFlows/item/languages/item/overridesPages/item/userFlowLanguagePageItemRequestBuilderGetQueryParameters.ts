
/** Collection of pages with the overrides messages to display in a user flow for a specified language. This collection only allows to modify the content of the page, any other modification is not allowed (creation or deletion of pages).  */
export class UserFlowLanguagePageItemRequestBuilderGetQueryParameters {
    /** Expand related entities  */
    public expand?: string[] | undefined;
    /** Select properties to be returned  */
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
