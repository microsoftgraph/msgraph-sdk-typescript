import {GetCompliancePolicyNonComplianceReportPostRequestBody} from './getCompliancePolicyNonComplianceReportPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetCompliancePolicyNonComplianceReportPostRequestBody(getCompliancePolicyNonComplianceReportPostRequestBody: GetCompliancePolicyNonComplianceReportPostRequestBody | undefined = {} as GetCompliancePolicyNonComplianceReportPostRequestBody, writer: SerializationWriter) : void {
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
