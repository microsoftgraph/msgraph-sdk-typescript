import { deserializeIntoIdentityGovernance } from './deserializeIntoIdentityGovernance';
import { type IdentityGovernance } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIdentityGovernanceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIdentityGovernance;
}
