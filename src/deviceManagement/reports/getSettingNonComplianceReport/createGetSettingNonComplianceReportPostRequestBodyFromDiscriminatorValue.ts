import {GetSettingNonComplianceReportPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetSettingNonComplianceReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetSettingNonComplianceReportPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetSettingNonComplianceReportPostRequestBodyImpl();
}
