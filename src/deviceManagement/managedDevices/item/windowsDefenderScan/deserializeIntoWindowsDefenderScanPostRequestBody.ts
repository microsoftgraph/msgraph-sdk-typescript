import { type WindowsDefenderScanPostRequestBody } from './windowsDefenderScanPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsDefenderScanPostRequestBody(windowsDefenderScanPostRequestBody: WindowsDefenderScanPostRequestBody | undefined = {} as WindowsDefenderScanPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "quickScan": n => { windowsDefenderScanPostRequestBody.quickScan = n.getBooleanValue(); },
    }
}
