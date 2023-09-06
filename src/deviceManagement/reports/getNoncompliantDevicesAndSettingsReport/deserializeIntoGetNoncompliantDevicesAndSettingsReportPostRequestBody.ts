import { type GetNoncompliantDevicesAndSettingsReportPostRequestBody } from './getNoncompliantDevicesAndSettingsReportPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoGetNoncompliantDevicesAndSettingsReportPostRequestBody(getNoncompliantDevicesAndSettingsReportPostRequestBody: GetNoncompliantDevicesAndSettingsReportPostRequestBody | undefined = {} as GetNoncompliantDevicesAndSettingsReportPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "filter": n => { getNoncompliantDevicesAndSettingsReportPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getNoncompliantDevicesAndSettingsReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "name": n => { getNoncompliantDevicesAndSettingsReportPostRequestBody.name = n.getStringValue(); },
        "orderBy": n => { getNoncompliantDevicesAndSettingsReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getNoncompliantDevicesAndSettingsReportPostRequestBody.search = n.getStringValue(); },
        "select": n => { getNoncompliantDevicesAndSettingsReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "sessionId": n => { getNoncompliantDevicesAndSettingsReportPostRequestBody.sessionId = n.getStringValue(); },
        "skip": n => { getNoncompliantDevicesAndSettingsReportPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getNoncompliantDevicesAndSettingsReportPostRequestBody.top = n.getNumberValue(); },
    }
}
