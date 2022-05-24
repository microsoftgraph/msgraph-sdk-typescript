import {UpdateWindowsDeviceAccountPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUpdateWindowsDeviceAccountPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : UpdateWindowsDeviceAccountPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UpdateWindowsDeviceAccountPostRequestBodyImpl();
}
