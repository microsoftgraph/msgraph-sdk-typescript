import {SettingSourceType} from './settingSourceType';

export interface SettingSource{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Not yet documented */
    displayName?:string | undefined;
    /** Not yet documented */
    id?:string | undefined;
    /** Not yet documented. Possible values are: deviceConfiguration, deviceIntent. */
    sourceType?:SettingSourceType | undefined;
}
