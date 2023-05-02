import {deserializeIntoGetSettingNonComplianceReportPostRequestBody} from './deserializeIntoGetSettingNonComplianceReportPostRequestBody';
import {GetSettingNonComplianceReportPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetSettingNonComplianceReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetSettingNonComplianceReportPostRequestBody;
}
