import { deserializeIntoWindowsDefenderScanPostRequestBody } from './deserializeIntoWindowsDefenderScanPostRequestBody';
import { type WindowsDefenderScanPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindowsDefenderScanPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindowsDefenderScanPostRequestBody;
}
