import { deserializeIntoSetStatusMessagePostRequestBody } from './deserializeIntoSetStatusMessagePostRequestBody';
import { type SetStatusMessagePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSetStatusMessagePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSetStatusMessagePostRequestBody;
}
