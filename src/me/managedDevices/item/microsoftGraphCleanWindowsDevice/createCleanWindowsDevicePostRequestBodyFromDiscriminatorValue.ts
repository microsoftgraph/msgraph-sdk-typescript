import {CleanWindowsDevicePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCleanWindowsDevicePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CleanWindowsDevicePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CleanWindowsDevicePostRequestBody();
}
