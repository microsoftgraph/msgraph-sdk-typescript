import {GetPolicyNonComplianceMetadataResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetPolicyNonComplianceMetadataResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetPolicyNonComplianceMetadataResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetPolicyNonComplianceMetadataResponseImpl();
}
