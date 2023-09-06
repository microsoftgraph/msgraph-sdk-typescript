import { type GetPolicyNonComplianceReportPostRequestBody } from './getPolicyNonComplianceReportPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoGetPolicyNonComplianceReportPostRequestBody(getPolicyNonComplianceReportPostRequestBody: GetPolicyNonComplianceReportPostRequestBody | undefined = {} as GetPolicyNonComplianceReportPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "filter": n => { getPolicyNonComplianceReportPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getPolicyNonComplianceReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "name": n => { getPolicyNonComplianceReportPostRequestBody.name = n.getStringValue(); },
        "orderBy": n => { getPolicyNonComplianceReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getPolicyNonComplianceReportPostRequestBody.search = n.getStringValue(); },
        "select": n => { getPolicyNonComplianceReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "sessionId": n => { getPolicyNonComplianceReportPostRequestBody.sessionId = n.getStringValue(); },
        "skip": n => { getPolicyNonComplianceReportPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getPolicyNonComplianceReportPostRequestBody.top = n.getNumberValue(); },
    }
}
