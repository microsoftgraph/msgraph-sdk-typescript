import {deserializeIntoStsPolicy} from './deserializeIntoStsPolicy';
import {TokenLifetimePolicy} from './tokenLifetimePolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTokenLifetimePolicy(tokenLifetimePolicy: TokenLifetimePolicy | undefined = {} as TokenLifetimePolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoStsPolicy(tokenLifetimePolicy),
    }
}
