import { deserializeIntoUserRegistrationMethodSummary } from './deserializeIntoUserRegistrationMethodSummary';
import { type UserRegistrationMethodSummary } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserRegistrationMethodSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserRegistrationMethodSummary;
}
