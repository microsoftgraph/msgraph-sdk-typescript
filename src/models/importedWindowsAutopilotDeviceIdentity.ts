import { type Entity } from './entity';
import { type ImportedWindowsAutopilotDeviceIdentityState } from './importedWindowsAutopilotDeviceIdentityState';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ImportedWindowsAutopilotDeviceIdentity extends Entity, Parsable {
    /**
     * UPN of the user the device will be assigned
     */
    assignedUserPrincipalName?: string | undefined;
    /**
     * Group Tag of the Windows autopilot device.
     */
    groupTag?: string | undefined;
    /**
     * Hardware Blob of the Windows autopilot device.
     */
    hardwareIdentifier?: string | undefined;
    /**
     * The Import Id of the Windows autopilot device.
     */
    importId?: string | undefined;
    /**
     * Product Key of the Windows autopilot device.
     */
    productKey?: string | undefined;
    /**
     * Serial number of the Windows autopilot device.
     */
    serialNumber?: string | undefined;
    /**
     * Current state of the imported device.
     */
    state?: ImportedWindowsAutopilotDeviceIdentityState | undefined;
}
