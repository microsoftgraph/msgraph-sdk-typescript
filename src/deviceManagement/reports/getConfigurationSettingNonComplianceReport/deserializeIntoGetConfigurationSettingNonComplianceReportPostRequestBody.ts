import { type GetConfigurationSettingNonComplianceReportPostRequestBody } from './getConfigurationSettingNonComplianceReportPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoGetConfigurationSettingNonComplianceReportPostRequestBody(getConfigurationSettingNonComplianceReportPostRequestBody: GetConfigurationSettingNonComplianceReportPostRequestBody | undefined = {} as GetConfigurationSettingNonComplianceReportPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "filter": n => { getConfigurationSettingNonComplianceReportPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getConfigurationSettingNonComplianceReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "name": n => { getConfigurationSettingNonComplianceReportPostRequestBody.name = n.getStringValue(); },
        "orderBy": n => { getConfigurationSettingNonComplianceReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getConfigurationSettingNonComplianceReportPostRequestBody.search = n.getStringValue(); },
        "select": n => { getConfigurationSettingNonComplianceReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "sessionId": n => { getConfigurationSettingNonComplianceReportPostRequestBody.sessionId = n.getStringValue(); },
        "skip": n => { getConfigurationSettingNonComplianceReportPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getConfigurationSettingNonComplianceReportPostRequestBody.top = n.getNumberValue(); },
    }
}
