import type {GetCompliancePolicyNonComplianceReportPostRequestBody} from './getCompliancePolicyNonComplianceReportPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetCompliancePolicyNonComplianceReportPostRequestBody(getCompliancePolicyNonComplianceReportPostRequestBody: GetCompliancePolicyNonComplianceReportPostRequestBody | undefined = {} as GetCompliancePolicyNonComplianceReportPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "filter": n => { getCompliancePolicyNonComplianceReportPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getCompliancePolicyNonComplianceReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "name": n => { getCompliancePolicyNonComplianceReportPostRequestBody.name = n.getStringValue(); },
        "orderBy": n => { getCompliancePolicyNonComplianceReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getCompliancePolicyNonComplianceReportPostRequestBody.search = n.getStringValue(); },
        "select": n => { getCompliancePolicyNonComplianceReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "sessionId": n => { getCompliancePolicyNonComplianceReportPostRequestBody.sessionId = n.getStringValue(); },
        "skip": n => { getCompliancePolicyNonComplianceReportPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getCompliancePolicyNonComplianceReportPostRequestBody.top = n.getNumberValue(); },
    }
}
