import { deserializeIntoGetDeviceManagementIntentSettingsReportPostRequestBody } from './deserializeIntoGetDeviceManagementIntentSettingsReportPostRequestBody';
import { type GetDeviceManagementIntentSettingsReportPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetDeviceManagementIntentSettingsReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetDeviceManagementIntentSettingsReportPostRequestBody;
}
