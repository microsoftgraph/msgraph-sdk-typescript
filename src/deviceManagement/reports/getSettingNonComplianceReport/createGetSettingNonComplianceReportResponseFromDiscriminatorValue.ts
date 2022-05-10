import {GetSettingNonComplianceReportResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetSettingNonComplianceReportResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetSettingNonComplianceReportResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetSettingNonComplianceReportResponseImpl();
}
