import { type GetCompliancePolicyNonComplianceReportPostRequestBody } from './getCompliancePolicyNonComplianceReportPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGetCompliancePolicyNonComplianceReportPostRequestBody(writer: SerializationWriter, getCompliancePolicyNonComplianceReportPostRequestBody: GetCompliancePolicyNonComplianceReportPostRequestBody | undefined = {} as GetCompliancePolicyNonComplianceReportPostRequestBody) : void {
        writer.writeStringValue("filter", getCompliancePolicyNonComplianceReportPostRequestBody.filter);
        writer.writeCollectionOfPrimitiveValues<string>("groupBy", getCompliancePolicyNonComplianceReportPostRequestBody.groupBy);
        writer.writeStringValue("name", getCompliancePolicyNonComplianceReportPostRequestBody.name);
        writer.writeCollectionOfPrimitiveValues<string>("orderBy", getCompliancePolicyNonComplianceReportPostRequestBody.orderBy);
        writer.writeStringValue("search", getCompliancePolicyNonComplianceReportPostRequestBody.search);
        writer.writeCollectionOfPrimitiveValues<string>("select", getCompliancePolicyNonComplianceReportPostRequestBody.select);
        writer.writeStringValue("sessionId", getCompliancePolicyNonComplianceReportPostRequestBody.sessionId);
        writer.writeNumberValue("skip", getCompliancePolicyNonComplianceReportPostRequestBody.skip);
        writer.writeNumberValue("top", getCompliancePolicyNonComplianceReportPostRequestBody.top);
        writer.writeAdditionalData(getCompliancePolicyNonComplianceReportPostRequestBody.additionalData);
}
