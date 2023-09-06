import { type ClaimsMappingPolicy } from './claimsMappingPolicy';
import { serializeStsPolicy } from './serializeStsPolicy';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeClaimsMappingPolicy(writer: SerializationWriter, claimsMappingPolicy: ClaimsMappingPolicy | undefined = {} as ClaimsMappingPolicy) : void {
        serializeStsPolicy(writer, claimsMappingPolicy)
}
