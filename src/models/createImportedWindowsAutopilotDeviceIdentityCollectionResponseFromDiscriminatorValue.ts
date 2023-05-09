import {deserializeIntoImportedWindowsAutopilotDeviceIdentityCollectionResponse} from './deserializeIntoImportedWindowsAutopilotDeviceIdentityCollectionResponse';
import {ImportedWindowsAutopilotDeviceIdentityCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImportedWindowsAutopilotDeviceIdentityCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImportedWindowsAutopilotDeviceIdentityCollectionResponse;
}
