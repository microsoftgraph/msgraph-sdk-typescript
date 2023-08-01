import type {WindowsDefenderScanPostRequestBody} from './windowsDefenderScanPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsDefenderScanPostRequestBody(windowsDefenderScanPostRequestBody: WindowsDefenderScanPostRequestBody | undefined = {} as WindowsDefenderScanPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "quickScan": n => { windowsDefenderScanPostRequestBody.quickScan = n.getBooleanValue(); },
    }
}
