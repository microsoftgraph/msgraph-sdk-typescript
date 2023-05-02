import {deserializeIntoGetNoncompliantDevicesAndSettingsReportPostRequestBody} from './deserializeIntoGetNoncompliantDevicesAndSettingsReportPostRequestBody';
import {GetNoncompliantDevicesAndSettingsReportPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetNoncompliantDevicesAndSettingsReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetNoncompliantDevicesAndSettingsReportPostRequestBody;
}
