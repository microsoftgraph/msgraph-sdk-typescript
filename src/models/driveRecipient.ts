
export interface DriveRecipient{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The alias of the domain object, for cases where an email address is unavailable (e.g. security groups). */
    alias?:string | undefined;
    /** The email address for the recipient, if the recipient has an associated email address. */
    email?:string | undefined;
    /** The unique identifier for the recipient in the directory. */
    objectId?:string | undefined;
}
