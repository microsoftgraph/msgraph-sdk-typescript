import {GetPolicyNonComplianceReportPostRequestBody} from './getPolicyNonComplianceReportPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetPolicyNonComplianceReportPostRequestBody(getPolicyNonComplianceReportPostRequestBody: GetPolicyNonComplianceReportPostRequestBody | undefined = {} as GetPolicyNonComplianceReportPostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("filter", getPolicyNonComplianceReportPostRequestBody.filter);
        writer.writeCollectionOfPrimitiveValues<string>("groupBy", getPolicyNonComplianceReportPostRequestBody.groupBy);
        writer.writeStringValue("name", getPolicyNonComplianceReportPostRequestBody.name);
        writer.writeCollectionOfPrimitiveValues<string>("orderBy", getPolicyNonComplianceReportPostRequestBody.orderBy);
        writer.writeStringValue("search", getPolicyNonComplianceReportPostRequestBody.search);
        writer.writeCollectionOfPrimitiveValues<string>("select", getPolicyNonComplianceReportPostRequestBody.select);
        writer.writeStringValue("sessionId", getPolicyNonComplianceReportPostRequestBody.sessionId);
        writer.writeNumberValue("skip", getPolicyNonComplianceReportPostRequestBody.skip);
        writer.writeNumberValue("top", getPolicyNonComplianceReportPostRequestBody.top);
        writer.writeAdditionalData(getPolicyNonComplianceReportPostRequestBody.additionalData);
}
