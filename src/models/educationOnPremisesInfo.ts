
export interface EducationOnPremisesInfo{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Unique identifier for the user object in Active Directory. */
    immutableId?:string | undefined;
}
