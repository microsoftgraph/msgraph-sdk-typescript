import {GetSettingNonComplianceReportRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetSettingNonComplianceReportRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetSettingNonComplianceReportRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetSettingNonComplianceReportRequestBodyImpl();
}
