import {GetDeviceManagementIntentSettingsReportRequestBody} from './getDeviceManagementIntentSettingsReportRequestBody';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetDeviceManagementIntentSettingsReportRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetDeviceManagementIntentSettingsReportRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetDeviceManagementIntentSettingsReportRequestBody();
}
