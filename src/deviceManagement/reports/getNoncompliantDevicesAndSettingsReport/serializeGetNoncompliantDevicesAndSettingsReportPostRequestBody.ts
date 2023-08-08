import type {GetNoncompliantDevicesAndSettingsReportPostRequestBody} from './getNoncompliantDevicesAndSettingsReportPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetNoncompliantDevicesAndSettingsReportPostRequestBody(writer: SerializationWriter, getNoncompliantDevicesAndSettingsReportPostRequestBody: GetNoncompliantDevicesAndSettingsReportPostRequestBody | undefined = {} as GetNoncompliantDevicesAndSettingsReportPostRequestBody) : void {
        writer.writeStringValue("filter", getNoncompliantDevicesAndSettingsReportPostRequestBody.filter);
        writer.writeCollectionOfPrimitiveValues<string>("groupBy", getNoncompliantDevicesAndSettingsReportPostRequestBody.groupBy);
        writer.writeStringValue("name", getNoncompliantDevicesAndSettingsReportPostRequestBody.name);
        writer.writeCollectionOfPrimitiveValues<string>("orderBy", getNoncompliantDevicesAndSettingsReportPostRequestBody.orderBy);
        writer.writeStringValue("search", getNoncompliantDevicesAndSettingsReportPostRequestBody.search);
        writer.writeCollectionOfPrimitiveValues<string>("select", getNoncompliantDevicesAndSettingsReportPostRequestBody.select);
        writer.writeStringValue("sessionId", getNoncompliantDevicesAndSettingsReportPostRequestBody.sessionId);
        writer.writeNumberValue("skip", getNoncompliantDevicesAndSettingsReportPostRequestBody.skip);
        writer.writeNumberValue("top", getNoncompliantDevicesAndSettingsReportPostRequestBody.top);
        writer.writeAdditionalData(getNoncompliantDevicesAndSettingsReportPostRequestBody.additionalData);
}
