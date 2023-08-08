import type {GetPolicyNonComplianceSummaryReportPostRequestBody} from './getPolicyNonComplianceSummaryReportPostRequestBody';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetPolicyNonComplianceSummaryReportPostRequestBody(writer: SerializationWriter, getPolicyNonComplianceSummaryReportPostRequestBody: GetPolicyNonComplianceSummaryReportPostRequestBody | undefined = {} as GetPolicyNonComplianceSummaryReportPostRequestBody) : void {
        writer.writeStringValue("filter", getPolicyNonComplianceSummaryReportPostRequestBody.filter);
        writer.writeCollectionOfPrimitiveValues<string>("groupBy", getPolicyNonComplianceSummaryReportPostRequestBody.groupBy);
        writer.writeStringValue("name", getPolicyNonComplianceSummaryReportPostRequestBody.name);
        writer.writeCollectionOfPrimitiveValues<string>("orderBy", getPolicyNonComplianceSummaryReportPostRequestBody.orderBy);
        writer.writeStringValue("search", getPolicyNonComplianceSummaryReportPostRequestBody.search);
        writer.writeCollectionOfPrimitiveValues<string>("select", getPolicyNonComplianceSummaryReportPostRequestBody.select);
        writer.writeStringValue("sessionId", getPolicyNonComplianceSummaryReportPostRequestBody.sessionId);
        writer.writeNumberValue("skip", getPolicyNonComplianceSummaryReportPostRequestBody.skip);
        writer.writeNumberValue("top", getPolicyNonComplianceSummaryReportPostRequestBody.top);
        writer.writeAdditionalData(getPolicyNonComplianceSummaryReportPostRequestBody.additionalData);
}
