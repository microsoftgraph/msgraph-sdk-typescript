import { type ClaimsMappingPolicy } from './claimsMappingPolicy';
import { deserializeIntoStsPolicy } from './deserializeIntoStsPolicy';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoClaimsMappingPolicy(claimsMappingPolicy: ClaimsMappingPolicy | undefined = {} as ClaimsMappingPolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoStsPolicy(claimsMappingPolicy),
    }
}
