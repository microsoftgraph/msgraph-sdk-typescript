import {CleanWindowsDevicePostRequestBody} from './cleanWindowsDevicePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCleanWindowsDevicePostRequestBody(cleanWindowsDevicePostRequestBody: CleanWindowsDevicePostRequestBody | undefined = {} as CleanWindowsDevicePostRequestBody, writer: SerializationWriter) : void {
        writer.writeBooleanValue("keepUserData", cleanWindowsDevicePostRequestBody.keepUserData);
        writer.writeAdditionalData(cleanWindowsDevicePostRequestBody.additionalData);
}
