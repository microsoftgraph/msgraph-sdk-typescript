import {GetComplianceSettingNonComplianceReportRequestBody} from './getComplianceSettingNonComplianceReportRequestBody';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetComplianceSettingNonComplianceReportRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetComplianceSettingNonComplianceReportRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetComplianceSettingNonComplianceReportRequestBody();
}
