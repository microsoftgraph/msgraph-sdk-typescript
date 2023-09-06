import { deserializeIntoClaimsMappingPolicy } from './deserializeIntoClaimsMappingPolicy';
import { type ClaimsMappingPolicy } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createClaimsMappingPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoClaimsMappingPolicy;
}
