import { deserializeIntoUserRegistrationDetailsCollectionResponse } from './deserializeIntoUserRegistrationDetailsCollectionResponse';
import { type UserRegistrationDetailsCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserRegistrationDetailsCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserRegistrationDetailsCollectionResponse;
}
