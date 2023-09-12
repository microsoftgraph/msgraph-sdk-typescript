import { type GetCompliancePolicyNonComplianceSummaryReportPostRequestBody } from './getCompliancePolicyNonComplianceSummaryReportPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoGetCompliancePolicyNonComplianceSummaryReportPostRequestBody(getCompliancePolicyNonComplianceSummaryReportPostRequestBody: GetCompliancePolicyNonComplianceSummaryReportPostRequestBody | undefined = {} as GetCompliancePolicyNonComplianceSummaryReportPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "filter": n => { getCompliancePolicyNonComplianceSummaryReportPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getCompliancePolicyNonComplianceSummaryReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "name": n => { getCompliancePolicyNonComplianceSummaryReportPostRequestBody.name = n.getStringValue(); },
        "orderBy": n => { getCompliancePolicyNonComplianceSummaryReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getCompliancePolicyNonComplianceSummaryReportPostRequestBody.search = n.getStringValue(); },
        "select": n => { getCompliancePolicyNonComplianceSummaryReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "sessionId": n => { getCompliancePolicyNonComplianceSummaryReportPostRequestBody.sessionId = n.getStringValue(); },
        "skip": n => { getCompliancePolicyNonComplianceSummaryReportPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getCompliancePolicyNonComplianceSummaryReportPostRequestBody.top = n.getNumberValue(); },
    }
}
