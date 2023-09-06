import { deserializeIntoClaimsMappingPolicyCollectionResponse } from './deserializeIntoClaimsMappingPolicyCollectionResponse';
import { type ClaimsMappingPolicyCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createClaimsMappingPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoClaimsMappingPolicyCollectionResponse;
}
