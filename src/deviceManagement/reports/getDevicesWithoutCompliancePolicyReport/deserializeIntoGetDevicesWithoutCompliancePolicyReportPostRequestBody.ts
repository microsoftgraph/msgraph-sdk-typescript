import type {GetDevicesWithoutCompliancePolicyReportPostRequestBody} from './getDevicesWithoutCompliancePolicyReportPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetDevicesWithoutCompliancePolicyReportPostRequestBody(getDevicesWithoutCompliancePolicyReportPostRequestBody: GetDevicesWithoutCompliancePolicyReportPostRequestBody | undefined = {} as GetDevicesWithoutCompliancePolicyReportPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "filter": n => { getDevicesWithoutCompliancePolicyReportPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getDevicesWithoutCompliancePolicyReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "name": n => { getDevicesWithoutCompliancePolicyReportPostRequestBody.name = n.getStringValue(); },
        "orderBy": n => { getDevicesWithoutCompliancePolicyReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getDevicesWithoutCompliancePolicyReportPostRequestBody.search = n.getStringValue(); },
        "select": n => { getDevicesWithoutCompliancePolicyReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "sessionId": n => { getDevicesWithoutCompliancePolicyReportPostRequestBody.sessionId = n.getStringValue(); },
        "skip": n => { getDevicesWithoutCompliancePolicyReportPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getDevicesWithoutCompliancePolicyReportPostRequestBody.top = n.getNumberValue(); },
    }
}
