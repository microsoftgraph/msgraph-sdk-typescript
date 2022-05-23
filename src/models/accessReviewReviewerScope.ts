
export interface AccessReviewReviewerScope{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The query specifying who will be the reviewer. See table for examples. */
    query?:string | undefined;
    /** In the scenario where reviewers need to be specified dynamically, this property is used to indicate the relative source of the query. This property is only required if a relative query, for example, ./manager, is specified. Possible value: decisions. */
    queryRoot?:string | undefined;
    /** The type of query. Examples include MicrosoftGraph and ARM. */
    queryType?:string | undefined;
}
