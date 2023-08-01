import type {GetComplianceSettingNonComplianceReportPostRequestBody} from './getComplianceSettingNonComplianceReportPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetComplianceSettingNonComplianceReportPostRequestBody(getComplianceSettingNonComplianceReportPostRequestBody: GetComplianceSettingNonComplianceReportPostRequestBody | undefined = {} as GetComplianceSettingNonComplianceReportPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "filter": n => { getComplianceSettingNonComplianceReportPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getComplianceSettingNonComplianceReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "name": n => { getComplianceSettingNonComplianceReportPostRequestBody.name = n.getStringValue(); },
        "orderBy": n => { getComplianceSettingNonComplianceReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getComplianceSettingNonComplianceReportPostRequestBody.search = n.getStringValue(); },
        "select": n => { getComplianceSettingNonComplianceReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "sessionId": n => { getComplianceSettingNonComplianceReportPostRequestBody.sessionId = n.getStringValue(); },
        "skip": n => { getComplianceSettingNonComplianceReportPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getComplianceSettingNonComplianceReportPostRequestBody.top = n.getNumberValue(); },
    }
}
