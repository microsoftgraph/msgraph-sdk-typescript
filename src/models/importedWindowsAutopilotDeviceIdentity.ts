import {Entity} from './entity';
import {ImportedWindowsAutopilotDeviceIdentityState} from './importedWindowsAutopilotDeviceIdentityState';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ImportedWindowsAutopilotDeviceIdentity extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** UPN of the user the device will be assigned */
    assignedUserPrincipalName?: string | undefined;
    /** Group Tag of the Windows autopilot device. */
    groupTag?: string | undefined;
    /** Hardware Blob of the Windows autopilot device. */
    hardwareIdentifier?: string | undefined;
    /** The Import Id of the Windows autopilot device. */
    importId?: string | undefined;
    /** Product Key of the Windows autopilot device. */
    productKey?: string | undefined;
    /** Serial number of the Windows autopilot device. */
    serialNumber?: string | undefined;
    /** Current state of the imported device. */
    state?: ImportedWindowsAutopilotDeviceIdentityState | undefined;
}
