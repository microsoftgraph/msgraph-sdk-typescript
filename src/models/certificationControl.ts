
export interface CertificationControl{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Certification control name */
    name?:string | undefined;
    /** URL for the Microsoft Service Trust Portal */
    url?:string | undefined;
}
