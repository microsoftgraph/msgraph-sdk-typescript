
export interface SettingTemplateValue{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Default value for the setting. Read-only. */
    defaultValue?:string | undefined;
    /** Description of the setting. Read-only. */
    description?:string | undefined;
    /** Name of the setting. Read-only. */
    name?:string | undefined;
    /** Type of the setting. Read-only. */
    type?:string | undefined;
}
