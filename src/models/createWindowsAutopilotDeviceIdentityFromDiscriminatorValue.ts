import {deserializeIntoWindowsAutopilotDeviceIdentity} from './deserializeIntoWindowsAutopilotDeviceIdentity';
import {WindowsAutopilotDeviceIdentity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsAutopilotDeviceIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsAutopilotDeviceIdentity;
}
