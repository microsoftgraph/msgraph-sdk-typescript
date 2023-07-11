import {deserializeIntoUserRegistrationFeatureCount} from './deserializeIntoUserRegistrationFeatureCount';
import {UserRegistrationFeatureCount} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserRegistrationFeatureCountFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserRegistrationFeatureCount;
}
