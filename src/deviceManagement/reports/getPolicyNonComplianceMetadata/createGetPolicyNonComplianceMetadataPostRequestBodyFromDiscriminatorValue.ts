import {deserializeIntoGetPolicyNonComplianceMetadataPostRequestBody} from './deserializeIntoGetPolicyNonComplianceMetadataPostRequestBody';
import {GetPolicyNonComplianceMetadataPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetPolicyNonComplianceMetadataPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetPolicyNonComplianceMetadataPostRequestBody;
}
