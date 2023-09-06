import { serializeDeviceActionResult } from './serializeDeviceActionResult';
import { type WindowsDefenderScanActionResult } from './windowsDefenderScanActionResult';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWindowsDefenderScanActionResult(writer: SerializationWriter, windowsDefenderScanActionResult: WindowsDefenderScanActionResult | undefined = {} as WindowsDefenderScanActionResult) : void {
        serializeDeviceActionResult(writer, windowsDefenderScanActionResult)
        writer.writeStringValue("scanType", windowsDefenderScanActionResult.scanType);
}
