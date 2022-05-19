import {UpdateWindowsDeviceAccountPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUpdateWindowsDeviceAccountPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : UpdateWindowsDeviceAccountPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UpdateWindowsDeviceAccountPostRequestBody();
}
