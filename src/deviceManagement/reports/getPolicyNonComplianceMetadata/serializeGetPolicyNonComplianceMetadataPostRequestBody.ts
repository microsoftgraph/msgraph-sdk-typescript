import {GetPolicyNonComplianceMetadataPostRequestBody} from './getPolicyNonComplianceMetadataPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetPolicyNonComplianceMetadataPostRequestBody(getPolicyNonComplianceMetadataPostRequestBody: GetPolicyNonComplianceMetadataPostRequestBody | undefined = {} as GetPolicyNonComplianceMetadataPostRequestBody, writer: SerializationWriter) : void {
        writer.writeStringValue("filter", getPolicyNonComplianceMetadataPostRequestBody.filter);
        writer.writeCollectionOfPrimitiveValues<string>("groupBy", getPolicyNonComplianceMetadataPostRequestBody.groupBy);
        writer.writeStringValue("name", getPolicyNonComplianceMetadataPostRequestBody.name);
        writer.writeCollectionOfPrimitiveValues<string>("orderBy", getPolicyNonComplianceMetadataPostRequestBody.orderBy);
        writer.writeStringValue("search", getPolicyNonComplianceMetadataPostRequestBody.search);
        writer.writeCollectionOfPrimitiveValues<string>("select", getPolicyNonComplianceMetadataPostRequestBody.select);
        writer.writeStringValue("sessionId", getPolicyNonComplianceMetadataPostRequestBody.sessionId);
        writer.writeNumberValue("skip", getPolicyNonComplianceMetadataPostRequestBody.skip);
        writer.writeNumberValue("top", getPolicyNonComplianceMetadataPostRequestBody.top);
        writer.writeAdditionalData(getPolicyNonComplianceMetadataPostRequestBody.additionalData);
}
