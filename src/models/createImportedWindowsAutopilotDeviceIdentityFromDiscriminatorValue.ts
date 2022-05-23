import {ImportedWindowsAutopilotDeviceIdentityImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) : ImportedWindowsAutopilotDeviceIdentityImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImportedWindowsAutopilotDeviceIdentityImpl();
}
