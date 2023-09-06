import { deserializeIntoMarkChatReadForUserPostRequestBody } from './deserializeIntoMarkChatReadForUserPostRequestBody';
import { type MarkChatReadForUserPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMarkChatReadForUserPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMarkChatReadForUserPostRequestBody;
}
