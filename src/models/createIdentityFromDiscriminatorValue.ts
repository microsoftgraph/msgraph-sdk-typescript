import {IdentityImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) : IdentityImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IdentityImpl();
}
