import { deserializeIntoDeviceActionResult } from './deserializeIntoDeviceActionResult';
import { type WindowsDefenderScanActionResult } from './windowsDefenderScanActionResult';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsDefenderScanActionResult(windowsDefenderScanActionResult: WindowsDefenderScanActionResult | undefined = {} as WindowsDefenderScanActionResult) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceActionResult(windowsDefenderScanActionResult),
        "scanType": n => { windowsDefenderScanActionResult.scanType = n.getStringValue(); },
    }
}
