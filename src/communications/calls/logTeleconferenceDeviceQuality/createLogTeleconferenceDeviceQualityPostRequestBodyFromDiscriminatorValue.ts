import {LogTeleconferenceDeviceQualityPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLogTeleconferenceDeviceQualityPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : LogTeleconferenceDeviceQualityPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LogTeleconferenceDeviceQualityPostRequestBody();
}
