import {AadUserConversationMemberCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAadUserConversationMemberCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : AadUserConversationMemberCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AadUserConversationMemberCollectionResponse();
}
