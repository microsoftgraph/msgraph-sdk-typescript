import {ClaimsMappingPolicy} from './claimsMappingPolicy';
import {serializeStsPolicy} from './serializeStsPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeClaimsMappingPolicy(claimsMappingPolicy: ClaimsMappingPolicy | undefined = {} as ClaimsMappingPolicy, writer: SerializationWriter) : void {
        serializeStsPolicy(writer, claimsMappingPolicy)
}
