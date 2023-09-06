import { deserializeIntoUserRegistrationFeatureCount } from './deserializeIntoUserRegistrationFeatureCount';
import { type UserRegistrationFeatureCount } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserRegistrationFeatureCountFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserRegistrationFeatureCount;
}
