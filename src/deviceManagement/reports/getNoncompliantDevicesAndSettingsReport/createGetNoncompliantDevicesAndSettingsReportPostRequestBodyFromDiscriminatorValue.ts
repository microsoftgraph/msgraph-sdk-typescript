import { deserializeIntoGetNoncompliantDevicesAndSettingsReportPostRequestBody } from './deserializeIntoGetNoncompliantDevicesAndSettingsReportPostRequestBody';
import { type GetNoncompliantDevicesAndSettingsReportPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetNoncompliantDevicesAndSettingsReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetNoncompliantDevicesAndSettingsReportPostRequestBody;
}
