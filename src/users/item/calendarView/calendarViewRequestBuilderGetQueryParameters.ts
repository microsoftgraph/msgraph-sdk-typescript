
export interface CalendarViewRequestBuilderGetQueryParameters {
    /** Include count of items */
    count?: boolean | undefined;
    /** The end date and time of the time range, represented in ISO 8601 format. For example, 2019-11-08T20:00:00-08:00 */
    endDateTime?: string | undefined;
    /** Expand related entities */
    expand?: string[] | undefined;
    /** Filter items by property values */
    filter?: string | undefined;
    /** Order items by property values */
    orderby?: string[] | undefined;
    /** Select properties to be returned */
    select?: string[] | undefined;
    /** Skip the first n items */
    skip?: number | undefined;
    /** The start date and time of the time range, represented in ISO 8601 format. For example, 2019-11-08T19:00:00-08:00 */
    startDateTime?: string | undefined;
    /** Show only the first n items */
    top?: number | undefined;
}
