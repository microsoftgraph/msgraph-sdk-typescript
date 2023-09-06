import { deserializeIntoImportedWindowsAutopilotDeviceIdentityUpload } from './deserializeIntoImportedWindowsAutopilotDeviceIdentityUpload';
import { type ImportedWindowsAutopilotDeviceIdentityUpload } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createImportedWindowsAutopilotDeviceIdentityUploadFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImportedWindowsAutopilotDeviceIdentityUpload;
}
