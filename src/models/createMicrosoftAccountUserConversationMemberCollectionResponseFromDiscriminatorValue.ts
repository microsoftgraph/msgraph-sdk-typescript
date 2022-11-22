import {MicrosoftAccountUserConversationMemberCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMicrosoftAccountUserConversationMemberCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MicrosoftAccountUserConversationMemberCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MicrosoftAccountUserConversationMemberCollectionResponse();
}
