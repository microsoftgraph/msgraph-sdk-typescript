import {deserializeIntoWindowsDefenderScanPostRequestBody} from './deserializeIntoWindowsDefenderScanPostRequestBody';
import {WindowsDefenderScanPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindowsDefenderScanPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsDefenderScanPostRequestBody;
}
