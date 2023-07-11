import {deserializeIntoUserRegistrationFeatureSummary} from './deserializeIntoUserRegistrationFeatureSummary';
import {UserRegistrationFeatureSummary} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserRegistrationFeatureSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserRegistrationFeatureSummary;
}
