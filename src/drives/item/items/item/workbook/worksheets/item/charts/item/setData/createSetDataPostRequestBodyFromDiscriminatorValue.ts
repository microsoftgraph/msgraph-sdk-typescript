import { deserializeIntoSetDataPostRequestBody } from './deserializeIntoSetDataPostRequestBody';
import { type SetDataPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSetDataPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSetDataPostRequestBody;
}
