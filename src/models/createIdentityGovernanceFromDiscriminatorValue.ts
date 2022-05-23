import {IdentityGovernanceImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityGovernanceFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityGovernanceImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentityGovernanceImpl();
}
