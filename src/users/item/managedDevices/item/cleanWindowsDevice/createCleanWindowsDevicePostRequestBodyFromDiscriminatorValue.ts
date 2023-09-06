import { deserializeIntoCleanWindowsDevicePostRequestBody } from './deserializeIntoCleanWindowsDevicePostRequestBody';
import { type CleanWindowsDevicePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCleanWindowsDevicePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCleanWindowsDevicePostRequestBody;
}
