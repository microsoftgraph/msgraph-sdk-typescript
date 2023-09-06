import { deserializeIntoWindowsAutopilotDeviceIdentity } from './deserializeIntoWindowsAutopilotDeviceIdentity';
import { type WindowsAutopilotDeviceIdentity } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsAutopilotDeviceIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsAutopilotDeviceIdentity;
}
