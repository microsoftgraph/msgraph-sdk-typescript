import {UpdateWindowsDeviceAccountRequestBody} from './updateWindowsDeviceAccountRequestBody';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUpdateWindowsDeviceAccountRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : UpdateWindowsDeviceAccountRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UpdateWindowsDeviceAccountRequestBody();
}
