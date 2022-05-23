import {SharePointIdentitySetImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSharePointIdentitySetFromDiscriminatorValue(parseNode: ParseNode | undefined) : SharePointIdentitySetImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SharePointIdentitySetImpl();
}
