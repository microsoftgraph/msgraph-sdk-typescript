
export interface EventItemRequestBuilderGetQueryParameters {
    /**
     * The end date and time of the time range, represented in ISO 8601 format. For example, 2019-11-08T20:00:00-08:00
     */
    endDateTime?: string | undefined;
    /**
     * Expand related entities
     */
    expand?: string[] | undefined;
    /**
     * Select properties to be returned
     */
    select?: string[] | undefined;
    /**
     * The start date and time of the time range, represented in ISO 8601 format. For example, 2019-11-08T19:00:00-08:00
     */
    startDateTime?: string | undefined;
}
