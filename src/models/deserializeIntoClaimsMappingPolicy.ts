import {ClaimsMappingPolicy} from './claimsMappingPolicy';
import {deserializeIntoStsPolicy} from './deserializeIntoStsPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoClaimsMappingPolicy(claimsMappingPolicy: ClaimsMappingPolicy | undefined = {} as ClaimsMappingPolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoStsPolicy(claimsMappingPolicy),
    }
}
