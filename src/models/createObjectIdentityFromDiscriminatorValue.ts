import {ObjectIdentityImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createObjectIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) : ObjectIdentityImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ObjectIdentityImpl();
}
