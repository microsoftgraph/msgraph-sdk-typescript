
export interface SearchQuery{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The search query containing the search terms. Required. */
    queryString?:string | undefined;
}
