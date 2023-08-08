import type {GetConfigurationPolicyNonComplianceSummaryReportPostRequestBody} from './getConfigurationPolicyNonComplianceSummaryReportPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetConfigurationPolicyNonComplianceSummaryReportPostRequestBody(getConfigurationPolicyNonComplianceSummaryReportPostRequestBody: GetConfigurationPolicyNonComplianceSummaryReportPostRequestBody | undefined = {} as GetConfigurationPolicyNonComplianceSummaryReportPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "filter": n => { getConfigurationPolicyNonComplianceSummaryReportPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getConfigurationPolicyNonComplianceSummaryReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "name": n => { getConfigurationPolicyNonComplianceSummaryReportPostRequestBody.name = n.getStringValue(); },
        "orderBy": n => { getConfigurationPolicyNonComplianceSummaryReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getConfigurationPolicyNonComplianceSummaryReportPostRequestBody.search = n.getStringValue(); },
        "select": n => { getConfigurationPolicyNonComplianceSummaryReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "sessionId": n => { getConfigurationPolicyNonComplianceSummaryReportPostRequestBody.sessionId = n.getStringValue(); },
        "skip": n => { getConfigurationPolicyNonComplianceSummaryReportPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getConfigurationPolicyNonComplianceSummaryReportPostRequestBody.top = n.getNumberValue(); },
    }
}
