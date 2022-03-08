import {GetPolicyNonComplianceMetadataResponse} from './getPolicyNonComplianceMetadataResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetPolicyNonComplianceMetadataResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetPolicyNonComplianceMetadataResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetPolicyNonComplianceMetadataResponse();
}
