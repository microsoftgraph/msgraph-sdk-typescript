
/**
 * The occurrences of a recurring series, if the event is a series master. This property includes occurrences that are part of the recurrence pattern, and exceptions that have been modified, but does not include occurrences that have been cancelled from the series. Navigation property. Read-only. Nullable.
 */
export class EventItemRequestBuilderGetQueryParameters {
    /** The end date and time of the time range, represented in ISO 8601 format. For example, 2019-11-08T20:00:00-08:00 */
    public endDateTime?: string | undefined;
    /** Select properties to be returned */
    public select?: string[] | undefined;
    /** The start date and time of the time range, represented in ISO 8601 format. For example, 2019-11-08T19:00:00-08:00 */
    public startDateTime?: string | undefined;
    /**
     * Maps the query parameters names to their encoded names for the URI template parsing.
     * @param originalName The original query parameter name in the class.
     * @returns a string
     */
    public getQueryParameter(originalName: string | undefined) : string {
        if(!originalName) throw new Error("originalName cannot be undefined");
        switch(originalName) {
            case "select": return "%24select";
            default: return originalName;
        }
    };
}
