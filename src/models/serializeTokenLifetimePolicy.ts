import { serializeStsPolicy } from './serializeStsPolicy';
import { type TokenLifetimePolicy } from './tokenLifetimePolicy';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeTokenLifetimePolicy(writer: SerializationWriter, tokenLifetimePolicy: TokenLifetimePolicy | undefined = {} as TokenLifetimePolicy) : void {
        serializeStsPolicy(writer, tokenLifetimePolicy)
}
