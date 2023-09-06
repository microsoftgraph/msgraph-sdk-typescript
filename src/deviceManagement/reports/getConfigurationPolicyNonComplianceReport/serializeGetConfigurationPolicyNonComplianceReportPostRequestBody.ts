import { type GetConfigurationPolicyNonComplianceReportPostRequestBody } from './getConfigurationPolicyNonComplianceReportPostRequestBody';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeGetConfigurationPolicyNonComplianceReportPostRequestBody(writer: SerializationWriter, getConfigurationPolicyNonComplianceReportPostRequestBody: GetConfigurationPolicyNonComplianceReportPostRequestBody | undefined = {} as GetConfigurationPolicyNonComplianceReportPostRequestBody) : void {
        writer.writeStringValue("filter", getConfigurationPolicyNonComplianceReportPostRequestBody.filter);
        writer.writeCollectionOfPrimitiveValues<string>("groupBy", getConfigurationPolicyNonComplianceReportPostRequestBody.groupBy);
        writer.writeStringValue("name", getConfigurationPolicyNonComplianceReportPostRequestBody.name);
        writer.writeCollectionOfPrimitiveValues<string>("orderBy", getConfigurationPolicyNonComplianceReportPostRequestBody.orderBy);
        writer.writeStringValue("search", getConfigurationPolicyNonComplianceReportPostRequestBody.search);
        writer.writeCollectionOfPrimitiveValues<string>("select", getConfigurationPolicyNonComplianceReportPostRequestBody.select);
        writer.writeStringValue("sessionId", getConfigurationPolicyNonComplianceReportPostRequestBody.sessionId);
        writer.writeNumberValue("skip", getConfigurationPolicyNonComplianceReportPostRequestBody.skip);
        writer.writeNumberValue("top", getConfigurationPolicyNonComplianceReportPostRequestBody.top);
        writer.writeAdditionalData(getConfigurationPolicyNonComplianceReportPostRequestBody.additionalData);
}
