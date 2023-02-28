import {GetNoncompliantDevicesAndSettingsReportPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetNoncompliantDevicesAndSettingsReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetNoncompliantDevicesAndSettingsReportPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetNoncompliantDevicesAndSettingsReportPostRequestBody();
}
