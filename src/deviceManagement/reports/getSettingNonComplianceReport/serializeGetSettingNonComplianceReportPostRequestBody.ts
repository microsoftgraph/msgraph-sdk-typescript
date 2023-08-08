import type {GetSettingNonComplianceReportPostRequestBody} from './getSettingNonComplianceReportPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetSettingNonComplianceReportPostRequestBody(writer: SerializationWriter, getSettingNonComplianceReportPostRequestBody: GetSettingNonComplianceReportPostRequestBody | undefined = {} as GetSettingNonComplianceReportPostRequestBody) : void {
        writer.writeStringValue("filter", getSettingNonComplianceReportPostRequestBody.filter);
        writer.writeCollectionOfPrimitiveValues<string>("groupBy", getSettingNonComplianceReportPostRequestBody.groupBy);
        writer.writeStringValue("name", getSettingNonComplianceReportPostRequestBody.name);
        writer.writeCollectionOfPrimitiveValues<string>("orderBy", getSettingNonComplianceReportPostRequestBody.orderBy);
        writer.writeStringValue("search", getSettingNonComplianceReportPostRequestBody.search);
        writer.writeCollectionOfPrimitiveValues<string>("select", getSettingNonComplianceReportPostRequestBody.select);
        writer.writeStringValue("sessionId", getSettingNonComplianceReportPostRequestBody.sessionId);
        writer.writeNumberValue("skip", getSettingNonComplianceReportPostRequestBody.skip);
        writer.writeNumberValue("top", getSettingNonComplianceReportPostRequestBody.top);
        writer.writeAdditionalData(getSettingNonComplianceReportPostRequestBody.additionalData);
}
