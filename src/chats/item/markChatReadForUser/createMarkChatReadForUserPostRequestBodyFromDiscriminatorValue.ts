import {deserializeIntoMarkChatReadForUserPostRequestBody} from './deserializeIntoMarkChatReadForUserPostRequestBody';
import {MarkChatReadForUserPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMarkChatReadForUserPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMarkChatReadForUserPostRequestBody;
}
