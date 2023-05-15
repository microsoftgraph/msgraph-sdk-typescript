import {GetDeviceManagementIntentSettingsReportPostRequestBody} from './getDeviceManagementIntentSettingsReportPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetDeviceManagementIntentSettingsReportPostRequestBody(getDeviceManagementIntentSettingsReportPostRequestBody: GetDeviceManagementIntentSettingsReportPostRequestBody | undefined = {} as GetDeviceManagementIntentSettingsReportPostRequestBody) : Record<string, (node: ParseNode) => void> {
    return {
        "filter": n => { getDeviceManagementIntentSettingsReportPostRequestBody.filter = n.getStringValue(); },
        "groupBy": n => { getDeviceManagementIntentSettingsReportPostRequestBody.groupBy = n.getCollectionOfPrimitiveValues<string>(); },
        "name": n => { getDeviceManagementIntentSettingsReportPostRequestBody.name = n.getStringValue(); },
        "orderBy": n => { getDeviceManagementIntentSettingsReportPostRequestBody.orderBy = n.getCollectionOfPrimitiveValues<string>(); },
        "search": n => { getDeviceManagementIntentSettingsReportPostRequestBody.search = n.getStringValue(); },
        "select": n => { getDeviceManagementIntentSettingsReportPostRequestBody.select = n.getCollectionOfPrimitiveValues<string>(); },
        "sessionId": n => { getDeviceManagementIntentSettingsReportPostRequestBody.sessionId = n.getStringValue(); },
        "skip": n => { getDeviceManagementIntentSettingsReportPostRequestBody.skip = n.getNumberValue(); },
        "top": n => { getDeviceManagementIntentSettingsReportPostRequestBody.top = n.getNumberValue(); },
    }
}
