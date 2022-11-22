import {SkypeForBusinessUserConversationMemberCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSkypeForBusinessUserConversationMemberCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : SkypeForBusinessUserConversationMemberCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SkypeForBusinessUserConversationMemberCollectionResponse();
}
