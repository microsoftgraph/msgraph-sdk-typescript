import {WindowsDeviceAccount} from './windowsDeviceAccount';

export interface UpdateWindowsDeviceAccountActionParameter{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Not yet documented */
    calendarSyncEnabled?:boolean | undefined;
    /** Not yet documented */
    deviceAccount?:WindowsDeviceAccount | undefined;
    /** Not yet documented */
    deviceAccountEmail?:string | undefined;
    /** Not yet documented */
    exchangeServer?:string | undefined;
    /** Not yet documented */
    passwordRotationEnabled?:boolean | undefined;
    /** Not yet documented */
    sessionInitiationProtocalAddress?:string | undefined;
}
