import { deserializeIntoGetComplianceSettingNonComplianceReportPostRequestBody } from './deserializeIntoGetComplianceSettingNonComplianceReportPostRequestBody';
import { type GetComplianceSettingNonComplianceReportPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetComplianceSettingNonComplianceReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetComplianceSettingNonComplianceReportPostRequestBody;
}
