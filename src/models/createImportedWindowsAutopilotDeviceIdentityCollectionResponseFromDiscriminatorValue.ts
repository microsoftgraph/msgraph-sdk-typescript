import { deserializeIntoImportedWindowsAutopilotDeviceIdentityCollectionResponse } from './deserializeIntoImportedWindowsAutopilotDeviceIdentityCollectionResponse';
import { type ImportedWindowsAutopilotDeviceIdentityCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createImportedWindowsAutopilotDeviceIdentityCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImportedWindowsAutopilotDeviceIdentityCollectionResponse;
}
