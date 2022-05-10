import {GetConfigurationSettingNonComplianceReportResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetConfigurationSettingNonComplianceReportResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetConfigurationSettingNonComplianceReportResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetConfigurationSettingNonComplianceReportResponseImpl();
}
