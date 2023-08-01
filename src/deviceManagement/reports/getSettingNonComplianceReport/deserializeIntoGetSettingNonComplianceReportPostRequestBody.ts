import type {GetSettingNonComplianceReportPostRequestBody} from './getSettingNonComplianceReportPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetSettingNonComplianceReportPostRequestBody(getSettingNonComplianceReportPostRequestBody: GetSettingNonComplianceReportPostRequestBody | undefined = {} as GetSettingNonComplianceReportPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "filter": n => { getSettingNonComplianceReportPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getSettingNonComplianceReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "name": n => { getSettingNonComplianceReportPostRequestBody.name = n.getStringValue(); },
        "orderBy": n => { getSettingNonComplianceReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getSettingNonComplianceReportPostRequestBody.search = n.getStringValue(); },
        "select": n => { getSettingNonComplianceReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "sessionId": n => { getSettingNonComplianceReportPostRequestBody.sessionId = n.getStringValue(); },
        "skip": n => { getSettingNonComplianceReportPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getSettingNonComplianceReportPostRequestBody.top = n.getNumberValue(); },
    }
}
