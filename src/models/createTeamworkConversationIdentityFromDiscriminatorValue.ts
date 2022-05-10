import {TeamworkConversationIdentityImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTeamworkConversationIdentityFromDiscriminatorValue(parseNode: ParseNode | undefined) : TeamworkConversationIdentityImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TeamworkConversationIdentityImpl();
}
