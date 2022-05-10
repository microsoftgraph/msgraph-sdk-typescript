import {UpdateWindowsDeviceAccountRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUpdateWindowsDeviceAccountRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : UpdateWindowsDeviceAccountRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UpdateWindowsDeviceAccountRequestBodyImpl();
}
