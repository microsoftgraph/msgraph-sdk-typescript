import { type CleanWindowsDevicePostRequestBody } from './cleanWindowsDevicePostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoCleanWindowsDevicePostRequestBody(cleanWindowsDevicePostRequestBody: CleanWindowsDevicePostRequestBody | undefined = {} as CleanWindowsDevicePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "keepUserData": n => { cleanWindowsDevicePostRequestBody.keepUserData = n.getBooleanValue(); },
    }
}
