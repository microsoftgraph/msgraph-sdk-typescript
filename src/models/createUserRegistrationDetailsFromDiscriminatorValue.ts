import {deserializeIntoUserRegistrationDetails} from './deserializeIntoUserRegistrationDetails';
import {UserRegistrationDetails} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserRegistrationDetailsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserRegistrationDetails;
}
