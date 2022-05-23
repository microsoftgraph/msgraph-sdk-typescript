
export interface SharePostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The endDateTime property */
    endDateTime?:Date | undefined;
    /** The notifyTeam property */
    notifyTeam?:boolean | undefined;
    /** The startDateTime property */
    startDateTime?:Date | undefined;
}
