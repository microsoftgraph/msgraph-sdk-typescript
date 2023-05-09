import {serializeStsPolicy} from './serializeStsPolicy';
import {TokenIssuancePolicy} from './tokenIssuancePolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTokenIssuancePolicy(writer: SerializationWriter, tokenIssuancePolicy: TokenIssuancePolicy | undefined = {} as TokenIssuancePolicy) : void {
        serializeStsPolicy(writer, tokenIssuancePolicy)
}
