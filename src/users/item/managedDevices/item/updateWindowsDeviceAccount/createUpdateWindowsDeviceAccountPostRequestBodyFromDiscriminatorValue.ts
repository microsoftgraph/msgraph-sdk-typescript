import { deserializeIntoUpdateWindowsDeviceAccountPostRequestBody } from './deserializeIntoUpdateWindowsDeviceAccountPostRequestBody';
import { type UpdateWindowsDeviceAccountPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUpdateWindowsDeviceAccountPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUpdateWindowsDeviceAccountPostRequestBody;
}
