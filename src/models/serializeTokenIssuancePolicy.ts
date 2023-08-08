import {serializeStsPolicy} from './serializeStsPolicy';
import type {TokenIssuancePolicy} from './tokenIssuancePolicy';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTokenIssuancePolicy(writer: SerializationWriter, tokenIssuancePolicy: TokenIssuancePolicy | undefined = {} as TokenIssuancePolicy) : void {
        serializeStsPolicy(writer, tokenIssuancePolicy)
}
