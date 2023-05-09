import {WindowsDefenderScanPostRequestBody} from './windowsDefenderScanPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsDefenderScanPostRequestBody(writer: SerializationWriter, windowsDefenderScanPostRequestBody: WindowsDefenderScanPostRequestBody | undefined = {} as WindowsDefenderScanPostRequestBody) : void {
        writer.writeBooleanValue("quickScan", windowsDefenderScanPostRequestBody.quickScan);
        writer.writeAdditionalData(windowsDefenderScanPostRequestBody.additionalData);
}
