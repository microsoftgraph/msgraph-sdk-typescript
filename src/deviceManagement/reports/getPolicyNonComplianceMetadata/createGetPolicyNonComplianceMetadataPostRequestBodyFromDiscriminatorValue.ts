import {GetPolicyNonComplianceMetadataPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetPolicyNonComplianceMetadataPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetPolicyNonComplianceMetadataPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetPolicyNonComplianceMetadataPostRequestBodyImpl();
}
