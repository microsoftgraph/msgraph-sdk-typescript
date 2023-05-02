import {ClaimsMappingPolicy} from './claimsMappingPolicy';
import {ClaimsMappingPolicyCollectionResponse} from './claimsMappingPolicyCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeClaimsMappingPolicy} from './serializeClaimsMappingPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeClaimsMappingPolicyCollectionResponse(writer: SerializationWriter, claimsMappingPolicyCollectionResponse: ClaimsMappingPolicyCollectionResponse | undefined = {} as ClaimsMappingPolicyCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, claimsMappingPolicyCollectionResponse)
        writer.writeCollectionOfObjectValues<ClaimsMappingPolicy>("value", claimsMappingPolicyCollectionResponse.value, serializeClaimsMappingPolicy);
}
