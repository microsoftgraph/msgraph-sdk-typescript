import {ClaimsMappingPolicy} from './claimsMappingPolicy';
import {ClaimsMappingPolicyCollectionResponse} from './claimsMappingPolicyCollectionResponse';
import {createClaimsMappingPolicyFromDiscriminatorValue} from './createClaimsMappingPolicyFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeClaimsMappingPolicy} from './serializeClaimsMappingPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoClaimsMappingPolicyCollectionResponse(claimsMappingPolicyCollectionResponse: ClaimsMappingPolicyCollectionResponse | undefined = {} as ClaimsMappingPolicyCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(claimsMappingPolicyCollectionResponse),
        "value": n => { claimsMappingPolicyCollectionResponse.value = n.getCollectionOfObjectValues<ClaimsMappingPolicy>(createClaimsMappingPolicyFromDiscriminatorValue); },
    }
}
