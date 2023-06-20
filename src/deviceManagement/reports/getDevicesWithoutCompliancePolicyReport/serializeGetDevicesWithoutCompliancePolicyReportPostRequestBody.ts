import {GetDevicesWithoutCompliancePolicyReportPostRequestBody} from './getDevicesWithoutCompliancePolicyReportPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetDevicesWithoutCompliancePolicyReportPostRequestBody(getDevicesWithoutCompliancePolicyReportPostRequestBody: GetDevicesWithoutCompliancePolicyReportPostRequestBody | undefined = {} as GetDevicesWithoutCompliancePolicyReportPostRequestBody, writer: SerializationWriter) : void {
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
