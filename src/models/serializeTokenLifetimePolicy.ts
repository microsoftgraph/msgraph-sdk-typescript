import {serializeStsPolicy} from './serializeStsPolicy';
import {TokenLifetimePolicy} from './tokenLifetimePolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTokenLifetimePolicy(writer: SerializationWriter, tokenLifetimePolicy: TokenLifetimePolicy | undefined = {} as TokenLifetimePolicy) : void {
        serializeStsPolicy(writer, tokenLifetimePolicy)
}
