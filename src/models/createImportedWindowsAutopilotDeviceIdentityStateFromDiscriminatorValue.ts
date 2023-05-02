import {deserializeIntoImportedWindowsAutopilotDeviceIdentityState} from './deserializeIntoImportedWindowsAutopilotDeviceIdentityState';
import {ImportedWindowsAutopilotDeviceIdentityState} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImportedWindowsAutopilotDeviceIdentityStateFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImportedWindowsAutopilotDeviceIdentityState;
}
