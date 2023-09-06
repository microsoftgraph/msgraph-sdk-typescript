import { deserializeIntoUserSummary } from './deserializeIntoUserSummary';
import { type UserSummary } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserSummary;
}
