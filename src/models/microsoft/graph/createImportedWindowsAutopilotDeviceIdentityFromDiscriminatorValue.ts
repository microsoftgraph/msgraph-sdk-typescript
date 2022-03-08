import {ImportedWindowsAutopilotDeviceIdentity} from './importedWindowsAutopilotDeviceIdentity';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImportedWindowsAutopilotDeviceIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) : ImportedWindowsAutopilotDeviceIdentity {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImportedWindowsAutopilotDeviceIdentity();
}
