import {deserializeIntoDeviceActionResult} from './deserializeIntoDeviceActionResult';
import {WindowsDefenderScanActionResult} from './windowsDefenderScanActionResult';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsDefenderScanActionResult(windowsDefenderScanActionResult: WindowsDefenderScanActionResult | undefined = {} as WindowsDefenderScanActionResult) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoDeviceActionResult(windowsDefenderScanActionResult),
        "scanType": n => { windowsDefenderScanActionResult.scanType = n.getStringValue(); },
    }
}
