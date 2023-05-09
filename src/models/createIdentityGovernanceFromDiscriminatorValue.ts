import {deserializeIntoIdentityGovernance} from './deserializeIntoIdentityGovernance';
import {IdentityGovernance} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityGovernanceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIdentityGovernance;
}
