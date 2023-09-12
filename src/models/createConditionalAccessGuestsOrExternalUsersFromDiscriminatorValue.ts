import { deserializeIntoConditionalAccessGuestsOrExternalUsers } from './deserializeIntoConditionalAccessGuestsOrExternalUsers';
import { type ConditionalAccessGuestsOrExternalUsers } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createConditionalAccessGuestsOrExternalUsersFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConditionalAccessGuestsOrExternalUsers;
}
