
export interface AudioConferencing{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The conference id of the online meeting. */
    conferenceId?:string | undefined;
    /** A URL to the externally-accessible web page that contains dial-in information. */
    dialinUrl?:string | undefined;
    /** The tollFreeNumber property */
    tollFreeNumber?:string | undefined;
    /** List of toll-free numbers that are displayed in the meeting invite. */
    tollFreeNumbers?:string[] | undefined;
    /** The tollNumber property */
    tollNumber?:string | undefined;
    /** List of toll numbers that are displayed in the meeting invite. */
    tollNumbers?:string[] | undefined;
}
