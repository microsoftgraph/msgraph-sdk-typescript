import {SkypeUserConversationMemberCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSkypeUserConversationMemberCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SkypeUserConversationMemberCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SkypeUserConversationMemberCollectionResponse();
}
