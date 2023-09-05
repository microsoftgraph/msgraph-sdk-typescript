import { deserializeIntoLogTeleconferenceDeviceQualityPostRequestBody } from './deserializeIntoLogTeleconferenceDeviceQualityPostRequestBody';
import { type LogTeleconferenceDeviceQualityPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLogTeleconferenceDeviceQualityPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLogTeleconferenceDeviceQualityPostRequestBody;
}
