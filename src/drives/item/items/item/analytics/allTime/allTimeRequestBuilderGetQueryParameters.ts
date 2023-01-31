
/**
 * Get [itemAnalytics][] about the views that took place under this resource.The **itemAnalytics** resource is a convenient way to get activity stats for `allTime` and the `lastSevenDays`.For a custom time range or interval, use the [getActivitiesByInterval][] API.
 */
export class AllTimeRequestBuilderGetQueryParameters {
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
