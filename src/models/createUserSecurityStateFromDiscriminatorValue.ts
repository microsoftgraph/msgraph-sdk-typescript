import {UserSecurityStateImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserSecurityStateFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserSecurityStateImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserSecurityStateImpl();
}
