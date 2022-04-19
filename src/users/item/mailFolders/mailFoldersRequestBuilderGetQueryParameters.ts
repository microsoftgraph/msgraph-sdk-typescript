
/** The user's mail folders. Read-only. Nullable.  */
export class MailFoldersRequestBuilderGetQueryParameters {
    /** Include count of items  */
    public count?: boolean | undefined;
    /** Filter items by property values  */
    public filter?: string | undefined;
    /** Order items by property values  */
    public orderby?: string[] | undefined;
    /** Select properties to be returned  */
    public select?: string[] | undefined;
    /** Skip the first n items  */
    public skip?: number | undefined;
    /** Show only the first n items  */
    public top?: number | undefined;
    /**
     * Maps the query parameters names to their encoded names for the URI template parsing.
     * @param originalName The original query parameter name in the class.
     * @returns a string
     */
    public getQueryParameter(originalName: string | undefined) : string {
        if(!originalName) throw new Error("originalName cannot be undefined");
        switch(originalName) {
            case "count": return "%24count";
            case "filter": return "%24filter";
            case "orderby": return "%24orderby";
            case "select": return "%24select";
            case "skip": return "%24skip";
            case "top": return "%24top";
            default: return originalName;
        }
    };
}
