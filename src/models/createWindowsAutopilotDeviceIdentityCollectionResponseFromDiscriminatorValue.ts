import {WindowsAutopilotDeviceIdentityCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsAutopilotDeviceIdentityCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : WindowsAutopilotDeviceIdentityCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WindowsAutopilotDeviceIdentityCollectionResponseImpl();
}
