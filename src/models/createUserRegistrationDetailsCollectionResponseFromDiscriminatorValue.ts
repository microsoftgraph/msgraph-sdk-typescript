import {deserializeIntoUserRegistrationDetailsCollectionResponse} from './deserializeIntoUserRegistrationDetailsCollectionResponse';
import {UserRegistrationDetailsCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserRegistrationDetailsCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserRegistrationDetailsCollectionResponse;
}
