import {ClaimsMappingPolicy} from './claimsMappingPolicy';
import {serializeStsPolicy} from './serializeStsPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeClaimsMappingPolicy(writer: SerializationWriter, claimsMappingPolicy: ClaimsMappingPolicy | undefined = {} as ClaimsMappingPolicy) : void {
        serializeStsPolicy(writer, claimsMappingPolicy)
}
