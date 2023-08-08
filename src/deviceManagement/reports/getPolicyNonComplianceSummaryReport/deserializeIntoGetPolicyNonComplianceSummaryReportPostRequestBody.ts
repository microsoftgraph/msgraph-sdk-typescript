import type {GetPolicyNonComplianceSummaryReportPostRequestBody} from './getPolicyNonComplianceSummaryReportPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetPolicyNonComplianceSummaryReportPostRequestBody(getPolicyNonComplianceSummaryReportPostRequestBody: GetPolicyNonComplianceSummaryReportPostRequestBody | undefined = {} as GetPolicyNonComplianceSummaryReportPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "filter": n => { getPolicyNonComplianceSummaryReportPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getPolicyNonComplianceSummaryReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "name": n => { getPolicyNonComplianceSummaryReportPostRequestBody.name = n.getStringValue(); },
        "orderBy": n => { getPolicyNonComplianceSummaryReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getPolicyNonComplianceSummaryReportPostRequestBody.search = n.getStringValue(); },
        "select": n => { getPolicyNonComplianceSummaryReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "sessionId": n => { getPolicyNonComplianceSummaryReportPostRequestBody.sessionId = n.getStringValue(); },
        "skip": n => { getPolicyNonComplianceSummaryReportPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getPolicyNonComplianceSummaryReportPostRequestBody.top = n.getNumberValue(); },
    }
}
