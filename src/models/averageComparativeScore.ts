
export interface AverageComparativeScore{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Average score within specified basis. */
    averageScore?:number | undefined;
    /** Scope type. The possible values are: AllTenants, TotalSeats, IndustryTypes. */
    basis?:string | undefined;
}
