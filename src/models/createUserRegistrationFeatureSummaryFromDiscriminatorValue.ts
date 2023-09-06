import { deserializeIntoUserRegistrationFeatureSummary } from './deserializeIntoUserRegistrationFeatureSummary';
import { type UserRegistrationFeatureSummary } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserRegistrationFeatureSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserRegistrationFeatureSummary;
}
