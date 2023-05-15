import {deserializeIntoCleanWindowsDevicePostRequestBody} from './deserializeIntoCleanWindowsDevicePostRequestBody';
import {CleanWindowsDevicePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCleanWindowsDevicePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCleanWindowsDevicePostRequestBody;
}
