import {IdentityGovernanceMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityGovernanceMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityGovernanceMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentityGovernanceMember1();
}
