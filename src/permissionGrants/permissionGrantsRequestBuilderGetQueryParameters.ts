
export interface PermissionGrantsRequestBuilderGetQueryParameters {
    /** Expand related entities */
    expand?: string[] | undefined;
    /** Filter items by property values */
    filter?: string | undefined;
    /** Order items by property values */
    orderby?: string[] | undefined;
    /** Search items by search phrases */
    search?: string | undefined;
    /** Select properties to be returned */
    select?: string[] | undefined;
}
