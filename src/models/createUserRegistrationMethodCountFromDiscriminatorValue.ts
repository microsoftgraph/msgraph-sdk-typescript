import {deserializeIntoUserRegistrationMethodCount} from './deserializeIntoUserRegistrationMethodCount';
import {UserRegistrationMethodCount} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserRegistrationMethodCountFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserRegistrationMethodCount;
}
