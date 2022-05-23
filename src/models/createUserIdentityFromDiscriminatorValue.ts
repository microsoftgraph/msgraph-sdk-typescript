import {UserIdentityImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserIdentityImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserIdentityImpl();
}
