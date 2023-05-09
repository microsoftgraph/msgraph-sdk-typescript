import {deserializeIntoGetDeviceManagementIntentSettingsReportPostRequestBody} from './deserializeIntoGetDeviceManagementIntentSettingsReportPostRequestBody';
import {GetDeviceManagementIntentSettingsReportPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetDeviceManagementIntentSettingsReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetDeviceManagementIntentSettingsReportPostRequestBody;
}
