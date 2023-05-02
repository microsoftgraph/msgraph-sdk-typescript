import {deserializeIntoLogTeleconferenceDeviceQualityPostRequestBody} from './deserializeIntoLogTeleconferenceDeviceQualityPostRequestBody';
import {LogTeleconferenceDeviceQualityPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLogTeleconferenceDeviceQualityPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLogTeleconferenceDeviceQualityPostRequestBody;
}
