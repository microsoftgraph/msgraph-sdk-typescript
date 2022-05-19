import {GetPolicyNonComplianceMetadataPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetPolicyNonComplianceMetadataPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetPolicyNonComplianceMetadataPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetPolicyNonComplianceMetadataPostRequestBody();
}
