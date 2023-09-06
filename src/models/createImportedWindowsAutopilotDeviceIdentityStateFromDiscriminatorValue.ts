import { deserializeIntoImportedWindowsAutopilotDeviceIdentityState } from './deserializeIntoImportedWindowsAutopilotDeviceIdentityState';
import { type ImportedWindowsAutopilotDeviceIdentityState } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createImportedWindowsAutopilotDeviceIdentityStateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImportedWindowsAutopilotDeviceIdentityState;
}
