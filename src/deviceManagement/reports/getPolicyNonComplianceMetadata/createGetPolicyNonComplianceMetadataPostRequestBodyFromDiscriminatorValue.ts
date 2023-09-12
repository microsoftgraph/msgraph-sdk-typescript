import { deserializeIntoGetPolicyNonComplianceMetadataPostRequestBody } from './deserializeIntoGetPolicyNonComplianceMetadataPostRequestBody';
import { type GetPolicyNonComplianceMetadataPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetPolicyNonComplianceMetadataPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetPolicyNonComplianceMetadataPostRequestBody;
}
