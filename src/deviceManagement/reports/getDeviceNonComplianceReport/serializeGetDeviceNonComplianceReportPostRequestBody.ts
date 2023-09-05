import { type GetDeviceNonComplianceReportPostRequestBody } from './getDeviceNonComplianceReportPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGetDeviceNonComplianceReportPostRequestBody(writer: SerializationWriter, getDeviceNonComplianceReportPostRequestBody: GetDeviceNonComplianceReportPostRequestBody | undefined = {} as GetDeviceNonComplianceReportPostRequestBody) : void {
        writer.writeStringValue("filter", getDeviceNonComplianceReportPostRequestBody.filter);
        writer.writeCollectionOfPrimitiveValues<string>("groupBy", getDeviceNonComplianceReportPostRequestBody.groupBy);
        writer.writeStringValue("name", getDeviceNonComplianceReportPostRequestBody.name);
        writer.writeCollectionOfPrimitiveValues<string>("orderBy", getDeviceNonComplianceReportPostRequestBody.orderBy);
        writer.writeStringValue("search", getDeviceNonComplianceReportPostRequestBody.search);
        writer.writeCollectionOfPrimitiveValues<string>("select", getDeviceNonComplianceReportPostRequestBody.select);
        writer.writeStringValue("sessionId", getDeviceNonComplianceReportPostRequestBody.sessionId);
        writer.writeNumberValue("skip", getDeviceNonComplianceReportPostRequestBody.skip);
        writer.writeNumberValue("top", getDeviceNonComplianceReportPostRequestBody.top);
        writer.writeAdditionalData(getDeviceNonComplianceReportPostRequestBody.additionalData);
}
