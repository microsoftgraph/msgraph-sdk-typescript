import {ClaimsMappingPolicy} from './claimsMappingPolicy';
import {ClaimsMappingPolicyCollectionResponse} from './claimsMappingPolicyCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeClaimsMappingPolicy} from './serializeClaimsMappingPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeClaimsMappingPolicyCollectionResponse(claimsMappingPolicyCollectionResponse: ClaimsMappingPolicyCollectionResponse | undefined = {} as ClaimsMappingPolicyCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, claimsMappingPolicyCollectionResponse)
        writer.writeCollectionOfObjectValues<ClaimsMappingPolicy>("value", claimsMappingPolicyCollectionResponse.value, serializeClaimsMappingPolicy);
}
