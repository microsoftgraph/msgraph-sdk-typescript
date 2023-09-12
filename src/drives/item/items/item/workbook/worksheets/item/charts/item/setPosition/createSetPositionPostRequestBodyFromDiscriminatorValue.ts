import { deserializeIntoSetPositionPostRequestBody } from './deserializeIntoSetPositionPostRequestBody';
import { type SetPositionPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSetPositionPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSetPositionPostRequestBody;
}
