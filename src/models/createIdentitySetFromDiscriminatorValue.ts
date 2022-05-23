import {IdentitySetImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentitySetFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentitySetImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentitySetImpl();
}
