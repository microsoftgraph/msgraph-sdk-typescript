import {ImportedWindowsAutopilotDeviceIdentityCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImportedWindowsAutopilotDeviceIdentityCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ImportedWindowsAutopilotDeviceIdentityCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImportedWindowsAutopilotDeviceIdentityCollectionResponseImpl();
}
