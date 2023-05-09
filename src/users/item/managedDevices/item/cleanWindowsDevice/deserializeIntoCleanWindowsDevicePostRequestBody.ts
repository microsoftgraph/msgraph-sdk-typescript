import {CleanWindowsDevicePostRequestBody} from './cleanWindowsDevicePostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCleanWindowsDevicePostRequestBody(cleanWindowsDevicePostRequestBody: CleanWindowsDevicePostRequestBody | undefined = {} as CleanWindowsDevicePostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "keepUserData": n => { cleanWindowsDevicePostRequestBody.keepUserData = n.getBooleanValue(); },
    }
}
