import {GetComplianceSettingNonComplianceReportResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetComplianceSettingNonComplianceReportResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetComplianceSettingNonComplianceReportResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetComplianceSettingNonComplianceReportResponseImpl();
}
