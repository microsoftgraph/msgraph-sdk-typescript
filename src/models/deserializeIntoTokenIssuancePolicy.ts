import {deserializeIntoStsPolicy} from './deserializeIntoStsPolicy';
import type {TokenIssuancePolicy} from './tokenIssuancePolicy';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTokenIssuancePolicy(tokenIssuancePolicy: TokenIssuancePolicy | undefined = {} as TokenIssuancePolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoStsPolicy(tokenIssuancePolicy),
    }
}
