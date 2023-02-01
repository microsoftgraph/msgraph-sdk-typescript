
/**
 * The status of workbook operations. Getting an operation collection is not supported, but you can get the status of a long-running operation if the Location header is returned in the response. Read-only.
 */
export class OperationsRequestBuilderGetQueryParameters {
    /** Expand related entities */
    public expand?: string[] | undefined;
    /** Order items by property values */
    public orderby?: string[] | undefined;
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
            case "expand": return "%24expand";
            case "orderby": return "%24orderby";
            case "search": return "%24search";
            case "select": return "%24select";
            default: return originalName;
        }
    };
}
