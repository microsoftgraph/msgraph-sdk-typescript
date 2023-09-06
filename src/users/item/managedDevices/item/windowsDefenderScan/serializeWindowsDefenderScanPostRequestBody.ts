import { type WindowsDefenderScanPostRequestBody } from './windowsDefenderScanPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeWindowsDefenderScanPostRequestBody(writer: SerializationWriter, windowsDefenderScanPostRequestBody: WindowsDefenderScanPostRequestBody | undefined = {} as WindowsDefenderScanPostRequestBody) : void {
        writer.writeBooleanValue("quickScan", windowsDefenderScanPostRequestBody.quickScan);
        writer.writeAdditionalData(windowsDefenderScanPostRequestBody.additionalData);
}
