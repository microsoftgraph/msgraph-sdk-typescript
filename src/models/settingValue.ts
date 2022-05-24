
export interface SettingValue{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Name of the setting (as defined by the directorySettingTemplate). */
    name?:string | undefined;
    /** Value of the setting. */
    value?:string | undefined;
}
