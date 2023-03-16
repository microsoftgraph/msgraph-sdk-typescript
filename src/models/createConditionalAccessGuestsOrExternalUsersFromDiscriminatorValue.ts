import {ConditionalAccessGuestsOrExternalUsers} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConditionalAccessGuestsOrExternalUsersFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConditionalAccessGuestsOrExternalUsers {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConditionalAccessGuestsOrExternalUsers();
}
