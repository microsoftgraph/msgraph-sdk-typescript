
export interface LicenseProcessingState{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The state property */
    state?:string | undefined;
}
