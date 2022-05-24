import {GetComplianceSettingNonComplianceReportPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetComplianceSettingNonComplianceReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetComplianceSettingNonComplianceReportPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetComplianceSettingNonComplianceReportPostRequestBodyImpl();
}
