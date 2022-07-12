import {ImportedWindowsAutopilotDeviceIdentityUpload} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImportedWindowsAutopilotDeviceIdentityUploadFromDiscriminatorValue(parseNode: ParseNode | undefined) : ImportedWindowsAutopilotDeviceIdentityUpload {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImportedWindowsAutopilotDeviceIdentityUpload();
}
