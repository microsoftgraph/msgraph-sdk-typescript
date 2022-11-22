import {AnonymousGuestConversationMemberCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAnonymousGuestConversationMemberCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AnonymousGuestConversationMemberCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AnonymousGuestConversationMemberCollectionResponse();
}
