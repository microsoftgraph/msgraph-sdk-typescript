import {serializeDeviceActionResult} from './serializeDeviceActionResult';
import {WindowsDefenderScanActionResult} from './windowsDefenderScanActionResult';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsDefenderScanActionResult(writer: SerializationWriter, windowsDefenderScanActionResult: WindowsDefenderScanActionResult | undefined = {} as WindowsDefenderScanActionResult) : void {
        serializeDeviceActionResult(writer, windowsDefenderScanActionResult)
        writer.writeStringValue("scanType", windowsDefenderScanActionResult.scanType);
}
