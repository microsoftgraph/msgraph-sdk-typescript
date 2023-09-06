import { deserializeIntoGetConfigurationSettingNonComplianceReportPostRequestBody } from './deserializeIntoGetConfigurationSettingNonComplianceReportPostRequestBody';
import { type GetConfigurationSettingNonComplianceReportPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetConfigurationSettingNonComplianceReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetConfigurationSettingNonComplianceReportPostRequestBody;
}
