import { deserializeIntoWindowsAutopilotDeviceIdentityCollectionResponse } from './deserializeIntoWindowsAutopilotDeviceIdentityCollectionResponse';
import { type WindowsAutopilotDeviceIdentityCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsAutopilotDeviceIdentityCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsAutopilotDeviceIdentityCollectionResponse;
}
