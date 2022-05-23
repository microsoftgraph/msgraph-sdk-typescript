import {UserImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserImpl();
}
