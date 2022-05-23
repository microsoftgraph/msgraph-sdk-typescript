
export interface ConditionalAccessUsers{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Group IDs excluded from scope of policy. */
    excludeGroups?:string[] | undefined;
    /** Role IDs excluded from scope of policy. */
    excludeRoles?:string[] | undefined;
    /** User IDs excluded from scope of policy and/or GuestsOrExternalUsers. */
    excludeUsers?:string[] | undefined;
    /** Group IDs in scope of policy unless explicitly excluded, or All. */
    includeGroups?:string[] | undefined;
    /** Role IDs in scope of policy unless explicitly excluded, or All. */
    includeRoles?:string[] | undefined;
    /** User IDs in scope of policy unless explicitly excluded, or None or All or GuestsOrExternalUsers. */
    includeUsers?:string[] | undefined;
}
