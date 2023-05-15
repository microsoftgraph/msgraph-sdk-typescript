import {deserializeIntoGetConfigurationSettingNonComplianceReportPostRequestBody} from './deserializeIntoGetConfigurationSettingNonComplianceReportPostRequestBody';
import {GetConfigurationSettingNonComplianceReportPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetConfigurationSettingNonComplianceReportPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetConfigurationSettingNonComplianceReportPostRequestBody;
}
