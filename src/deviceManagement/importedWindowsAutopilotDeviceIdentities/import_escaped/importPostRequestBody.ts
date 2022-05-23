import {ImportedWindowsAutopilotDeviceIdentity} from '../../../models/importedWindowsAutopilotDeviceIdentity';

export interface ImportPostRequestBody{
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?:Record<string, unknown>;
    /** The importedWindowsAutopilotDeviceIdentities property */
    importedWindowsAutopilotDeviceIdentities?:ImportedWindowsAutopilotDeviceIdentity[] | undefined;
}
