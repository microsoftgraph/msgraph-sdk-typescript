import { deserializeIntoUserAccount } from './deserializeIntoUserAccount';
import { type UserAccount } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserAccountFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserAccount;
}
