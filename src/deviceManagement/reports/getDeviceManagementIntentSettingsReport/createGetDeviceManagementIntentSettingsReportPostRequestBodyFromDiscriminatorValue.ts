import {GetDeviceManagementIntentSettingsReportPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetDeviceManagementIntentSettingsReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetDeviceManagementIntentSettingsReportPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetDeviceManagementIntentSettingsReportPostRequestBodyImpl();
}
