
export interface PersonOrGroupColumn{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Indicates whether multiple values can be selected from the source. */
    allowMultipleSelection?:boolean | undefined;
    /** Whether to allow selection of people only, or people and groups. Must be one of peopleAndGroups or peopleOnly. */
    chooseFromType?:string | undefined;
    /** How to display the information about the person or group chosen. See below. */
    displayAs?:string | undefined;
}
