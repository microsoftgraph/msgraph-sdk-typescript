import {GetComplianceSettingNonComplianceReportRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetComplianceSettingNonComplianceReportRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetComplianceSettingNonComplianceReportRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetComplianceSettingNonComplianceReportRequestBodyImpl();
}
