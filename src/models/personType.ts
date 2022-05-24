
export interface PersonType{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The type of data source, such as Person. */
    class_escaped?:string | undefined;
    /** The secondary type of data source, such as OrganizationUser. */
    subclass?:string | undefined;
}
