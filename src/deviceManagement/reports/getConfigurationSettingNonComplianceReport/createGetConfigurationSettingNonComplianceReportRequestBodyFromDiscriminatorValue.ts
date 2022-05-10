import {GetConfigurationSettingNonComplianceReportRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetConfigurationSettingNonComplianceReportRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetConfigurationSettingNonComplianceReportRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetConfigurationSettingNonComplianceReportRequestBodyImpl();
}
