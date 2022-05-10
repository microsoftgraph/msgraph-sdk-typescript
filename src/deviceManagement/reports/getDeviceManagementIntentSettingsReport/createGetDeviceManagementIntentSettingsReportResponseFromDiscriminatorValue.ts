import {GetDeviceManagementIntentSettingsReportResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetDeviceManagementIntentSettingsReportResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetDeviceManagementIntentSettingsReportResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetDeviceManagementIntentSettingsReportResponseImpl();
}
