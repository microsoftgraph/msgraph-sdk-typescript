
/** Retrieve a list of webhook subscriptions.  The content of the response depends on the context in which the app is calling; for details, see the scenarios in the Permissions section. */
export class SubscriptionsRequestBuilderGetQueryParameters {
    /** Search items by search phrases */
    public search?: string | undefined;
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
            case "search": return "%24search";
            case "select": return "%24select";
            default: return originalName;
        }
    };
}
