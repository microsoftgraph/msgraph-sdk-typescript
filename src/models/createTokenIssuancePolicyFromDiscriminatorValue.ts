import { deserializeIntoTokenIssuancePolicy } from './deserializeIntoTokenIssuancePolicy';
import { type TokenIssuancePolicy } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createTokenIssuancePolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTokenIssuancePolicy;
}
