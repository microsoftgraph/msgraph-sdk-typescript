
/**
 * The set of appointments of this business in a specified date range. Read-only. Nullable.
 */
export class CalendarViewRequestBuilderGetQueryParameters {
    /** Include count of items */
    public count?: boolean | undefined;
    /** The end date and time of the time range, represented in ISO 8601 format. For example, 2019-11-08T20:00:00-08:00 */
    public end?: string | undefined;
    /** Expand related entities */
    public expand?: string[] | undefined;
    /** Filter items by property values */
    public filter?: string | undefined;
    /** Order items by property values */
    public orderby?: string[] | undefined;
    /** Search items by search phrases */
    public search?: string | undefined;
    /** Select properties to be returned */
    public select?: string[] | undefined;
    /** Skip the first n items */
    public skip?: number | undefined;
    /** The start date and time of the time range, represented in ISO 8601 format. For example, 2019-11-08T19:00:00-08:00 */
    public start?: string | undefined;
    /** Show only the first n items */
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
            case "expand": return "%24expand";
            case "filter": return "%24filter";
            case "orderby": return "%24orderby";
            case "search": return "%24search";
            case "select": return "%24select";
            case "skip": return "%24skip";
            case "top": return "%24top";
            default: return originalName;
        }
    };
}
