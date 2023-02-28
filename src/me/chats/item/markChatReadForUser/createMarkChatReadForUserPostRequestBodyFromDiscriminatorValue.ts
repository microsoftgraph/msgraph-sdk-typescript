import {MarkChatReadForUserPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMarkChatReadForUserPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : MarkChatReadForUserPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MarkChatReadForUserPostRequestBody();
}
