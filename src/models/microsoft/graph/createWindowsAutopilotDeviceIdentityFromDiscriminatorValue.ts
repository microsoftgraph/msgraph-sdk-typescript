import {WindowsAutopilotDeviceIdentity} from './windowsAutopilotDeviceIdentity';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsAutopilotDeviceIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsAutopilotDeviceIdentity {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsAutopilotDeviceIdentity();
}
