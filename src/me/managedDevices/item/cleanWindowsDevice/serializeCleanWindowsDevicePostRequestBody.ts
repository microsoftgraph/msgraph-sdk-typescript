import { type CleanWindowsDevicePostRequestBody } from './cleanWindowsDevicePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeCleanWindowsDevicePostRequestBody(writer: SerializationWriter, cleanWindowsDevicePostRequestBody: CleanWindowsDevicePostRequestBody | undefined = {} as CleanWindowsDevicePostRequestBody) : void {
        writer.writeBooleanValue("keepUserData", cleanWindowsDevicePostRequestBody.keepUserData);
        writer.writeAdditionalData(cleanWindowsDevicePostRequestBody.additionalData);
}
