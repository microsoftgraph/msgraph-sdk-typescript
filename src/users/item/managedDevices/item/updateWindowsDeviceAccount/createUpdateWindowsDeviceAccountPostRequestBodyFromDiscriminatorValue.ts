import {deserializeIntoUpdateWindowsDeviceAccountPostRequestBody} from './deserializeIntoUpdateWindowsDeviceAccountPostRequestBody';
import {UpdateWindowsDeviceAccountPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUpdateWindowsDeviceAccountPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUpdateWindowsDeviceAccountPostRequestBody;
}
