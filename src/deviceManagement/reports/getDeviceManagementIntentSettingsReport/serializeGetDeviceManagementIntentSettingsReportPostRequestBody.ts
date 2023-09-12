import { type GetDeviceManagementIntentSettingsReportPostRequestBody } from './getDeviceManagementIntentSettingsReportPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGetDeviceManagementIntentSettingsReportPostRequestBody(writer: SerializationWriter, getDeviceManagementIntentSettingsReportPostRequestBody: GetDeviceManagementIntentSettingsReportPostRequestBody | undefined = {} as GetDeviceManagementIntentSettingsReportPostRequestBody) : void {
        writer.writeStringValue("filter", getDeviceManagementIntentSettingsReportPostRequestBody.filter);
        writer.writeCollectionOfPrimitiveValues<string>("groupBy", getDeviceManagementIntentSettingsReportPostRequestBody.groupBy);
        writer.writeStringValue("name", getDeviceManagementIntentSettingsReportPostRequestBody.name);
        writer.writeCollectionOfPrimitiveValues<string>("orderBy", getDeviceManagementIntentSettingsReportPostRequestBody.orderBy);
        writer.writeStringValue("search", getDeviceManagementIntentSettingsReportPostRequestBody.search);
        writer.writeCollectionOfPrimitiveValues<string>("select", getDeviceManagementIntentSettingsReportPostRequestBody.select);
        writer.writeStringValue("sessionId", getDeviceManagementIntentSettingsReportPostRequestBody.sessionId);
        writer.writeNumberValue("skip", getDeviceManagementIntentSettingsReportPostRequestBody.skip);
        writer.writeNumberValue("top", getDeviceManagementIntentSettingsReportPostRequestBody.top);
        writer.writeAdditionalData(getDeviceManagementIntentSettingsReportPostRequestBody.additionalData);
}
