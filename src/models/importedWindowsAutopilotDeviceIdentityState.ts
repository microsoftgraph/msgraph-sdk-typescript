import {ImportedWindowsAutopilotDeviceIdentityImportStatus} from './importedWindowsAutopilotDeviceIdentityImportStatus';

export interface ImportedWindowsAutopilotDeviceIdentityState{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** Device error code reported by Device Directory Service(DDS). */
    deviceErrorCode?:number | undefined;
    /** Device error name reported by Device Directory Service(DDS). */
    deviceErrorName?:string | undefined;
    /** Device status reported by Device Directory Service(DDS). Possible values are: unknown, pending, partial, complete, error. */
    deviceImportStatus?:ImportedWindowsAutopilotDeviceIdentityImportStatus | undefined;
    /** Device Registration ID for successfully added device reported by Device Directory Service(DDS). */
    deviceRegistrationId?:string | undefined;
}
