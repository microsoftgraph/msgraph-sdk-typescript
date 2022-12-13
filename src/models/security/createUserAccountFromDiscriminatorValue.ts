import {UserAccount} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserAccountFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserAccount {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserAccount();
}
