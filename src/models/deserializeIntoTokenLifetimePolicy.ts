import { deserializeIntoStsPolicy } from './deserializeIntoStsPolicy';
import { type TokenLifetimePolicy } from './tokenLifetimePolicy';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoTokenLifetimePolicy(tokenLifetimePolicy: TokenLifetimePolicy | undefined = {} as TokenLifetimePolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoStsPolicy(tokenLifetimePolicy),
    }
}
