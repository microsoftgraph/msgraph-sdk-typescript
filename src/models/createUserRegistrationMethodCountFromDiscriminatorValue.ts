import { deserializeIntoUserRegistrationMethodCount } from './deserializeIntoUserRegistrationMethodCount';
import { type UserRegistrationMethodCount } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserRegistrationMethodCountFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserRegistrationMethodCount;
}
