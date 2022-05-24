
export interface ConditionalAccessApplications{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The list of application IDs explicitly excluded from the policy. */
    excludeApplications?:string[] | undefined;
    /** The list of application IDs the policy applies to, unless explicitly excluded (in excludeApplications). Can also be set to All. */
    includeApplications?:string[] | undefined;
    /** Authentication context class references include. Supported values are c1 through c25. */
    includeAuthenticationContextClassReferences?:string[] | undefined;
    /** User actions to include. Supported values are urn:user:registersecurityinfo and urn:user:registerdevice */
    includeUserActions?:string[] | undefined;
}
