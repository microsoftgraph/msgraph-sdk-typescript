import { type GetDevicesWithoutCompliancePolicyReportPostRequestBody } from './getDevicesWithoutCompliancePolicyReportPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGetDevicesWithoutCompliancePolicyReportPostRequestBody(writer: SerializationWriter, getDevicesWithoutCompliancePolicyReportPostRequestBody: GetDevicesWithoutCompliancePolicyReportPostRequestBody | undefined = {} as GetDevicesWithoutCompliancePolicyReportPostRequestBody) : void {
        writer.writeStringValue("filter", getDevicesWithoutCompliancePolicyReportPostRequestBody.filter);
        writer.writeCollectionOfPrimitiveValues<string>("groupBy", getDevicesWithoutCompliancePolicyReportPostRequestBody.groupBy);
        writer.writeStringValue("name", getDevicesWithoutCompliancePolicyReportPostRequestBody.name);
        writer.writeCollectionOfPrimitiveValues<string>("orderBy", getDevicesWithoutCompliancePolicyReportPostRequestBody.orderBy);
        writer.writeStringValue("search", getDevicesWithoutCompliancePolicyReportPostRequestBody.search);
        writer.writeCollectionOfPrimitiveValues<string>("select", getDevicesWithoutCompliancePolicyReportPostRequestBody.select);
        writer.writeStringValue("sessionId", getDevicesWithoutCompliancePolicyReportPostRequestBody.sessionId);
        writer.writeNumberValue("skip", getDevicesWithoutCompliancePolicyReportPostRequestBody.skip);
        writer.writeNumberValue("top", getDevicesWithoutCompliancePolicyReportPostRequestBody.top);
        writer.writeAdditionalData(getDevicesWithoutCompliancePolicyReportPostRequestBody.additionalData);
}
