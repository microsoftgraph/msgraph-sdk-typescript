import {ClaimsMappingPolicyCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createClaimsMappingPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ClaimsMappingPolicyCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ClaimsMappingPolicyCollectionResponseImpl();
}
