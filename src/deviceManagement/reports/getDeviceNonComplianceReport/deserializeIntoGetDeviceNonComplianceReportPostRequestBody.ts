import type {GetDeviceNonComplianceReportPostRequestBody} from './getDeviceNonComplianceReportPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetDeviceNonComplianceReportPostRequestBody(getDeviceNonComplianceReportPostRequestBody: GetDeviceNonComplianceReportPostRequestBody | undefined = {} as GetDeviceNonComplianceReportPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "filter": n => { getDeviceNonComplianceReportPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getDeviceNonComplianceReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "name": n => { getDeviceNonComplianceReportPostRequestBody.name = n.getStringValue(); },
        "orderBy": n => { getDeviceNonComplianceReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getDeviceNonComplianceReportPostRequestBody.search = n.getStringValue(); },
        "select": n => { getDeviceNonComplianceReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "sessionId": n => { getDeviceNonComplianceReportPostRequestBody.sessionId = n.getStringValue(); },
        "skip": n => { getDeviceNonComplianceReportPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getDeviceNonComplianceReportPostRequestBody.top = n.getNumberValue(); },
    }
}
