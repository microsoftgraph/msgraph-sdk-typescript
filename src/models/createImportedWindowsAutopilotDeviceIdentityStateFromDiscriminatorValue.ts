import {ImportedWindowsAutopilotDeviceIdentityStateImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImportedWindowsAutopilotDeviceIdentityStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : ImportedWindowsAutopilotDeviceIdentityStateImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImportedWindowsAutopilotDeviceIdentityStateImpl();
}
