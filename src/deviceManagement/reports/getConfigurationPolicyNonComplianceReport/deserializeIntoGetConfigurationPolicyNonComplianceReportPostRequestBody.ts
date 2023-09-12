import { type GetConfigurationPolicyNonComplianceReportPostRequestBody } from './getConfigurationPolicyNonComplianceReportPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoGetConfigurationPolicyNonComplianceReportPostRequestBody(getConfigurationPolicyNonComplianceReportPostRequestBody: GetConfigurationPolicyNonComplianceReportPostRequestBody | undefined = {} as GetConfigurationPolicyNonComplianceReportPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "filter": n => { getConfigurationPolicyNonComplianceReportPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getConfigurationPolicyNonComplianceReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "name": n => { getConfigurationPolicyNonComplianceReportPostRequestBody.name = n.getStringValue(); },
        "orderBy": n => { getConfigurationPolicyNonComplianceReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getConfigurationPolicyNonComplianceReportPostRequestBody.search = n.getStringValue(); },
        "select": n => { getConfigurationPolicyNonComplianceReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "sessionId": n => { getConfigurationPolicyNonComplianceReportPostRequestBody.sessionId = n.getStringValue(); },
        "skip": n => { getConfigurationPolicyNonComplianceReportPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getConfigurationPolicyNonComplianceReportPostRequestBody.top = n.getNumberValue(); },
    }
}
