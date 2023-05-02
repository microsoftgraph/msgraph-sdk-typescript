import {deserializeIntoTeamworkConversationIdentity} from './deserializeIntoTeamworkConversationIdentity';
import {TeamworkConversationIdentity} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkConversationIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoTeamworkConversationIdentity;
}
