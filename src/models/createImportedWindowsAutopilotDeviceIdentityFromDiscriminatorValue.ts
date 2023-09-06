import { deserializeIntoImportedWindowsAutopilotDeviceIdentity } from './deserializeIntoImportedWindowsAutopilotDeviceIdentity';
import { type ImportedWindowsAutopilotDeviceIdentity } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImportedWindowsAutopilotDeviceIdentity;
}
