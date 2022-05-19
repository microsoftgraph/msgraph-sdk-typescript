import {GetDeviceManagementIntentSettingsReportPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetDeviceManagementIntentSettingsReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetDeviceManagementIntentSettingsReportPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetDeviceManagementIntentSettingsReportPostRequestBody();
}
