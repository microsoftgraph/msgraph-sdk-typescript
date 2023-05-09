import {deserializeIntoStsPolicy} from './deserializeIntoStsPolicy';
import {TokenIssuancePolicy} from './tokenIssuancePolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTokenIssuancePolicy(tokenIssuancePolicy: TokenIssuancePolicy | undefined = {} as TokenIssuancePolicy) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoStsPolicy(tokenIssuancePolicy),
    }
}
