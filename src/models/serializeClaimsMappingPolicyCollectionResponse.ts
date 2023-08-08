import type {ClaimsMappingPolicy} from './claimsMappingPolicy';
import type {ClaimsMappingPolicyCollectionResponse} from './claimsMappingPolicyCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeClaimsMappingPolicy} from './serializeClaimsMappingPolicy';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeClaimsMappingPolicyCollectionResponse(writer: SerializationWriter, claimsMappingPolicyCollectionResponse: ClaimsMappingPolicyCollectionResponse | undefined = {} as ClaimsMappingPolicyCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, claimsMappingPolicyCollectionResponse)
        writer.writeCollectionOfObjectValues<ClaimsMappingPolicy>("value", claimsMappingPolicyCollectionResponse.value, serializeClaimsMappingPolicy);
}
