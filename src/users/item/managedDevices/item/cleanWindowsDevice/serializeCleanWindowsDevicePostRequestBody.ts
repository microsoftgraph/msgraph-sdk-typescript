import {CleanWindowsDevicePostRequestBody} from './cleanWindowsDevicePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCleanWindowsDevicePostRequestBody(writer: SerializationWriter, cleanWindowsDevicePostRequestBody: CleanWindowsDevicePostRequestBody | undefined = {} as CleanWindowsDevicePostRequestBody) : void {
        writer.writeBooleanValue("keepUserData", cleanWindowsDevicePostRequestBody.keepUserData);
        writer.writeAdditionalData(cleanWindowsDevicePostRequestBody.additionalData);
}
