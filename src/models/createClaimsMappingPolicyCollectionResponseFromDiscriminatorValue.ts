import {deserializeIntoClaimsMappingPolicyCollectionResponse} from './deserializeIntoClaimsMappingPolicyCollectionResponse';
import {ClaimsMappingPolicyCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createClaimsMappingPolicyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoClaimsMappingPolicyCollectionResponse;
}
