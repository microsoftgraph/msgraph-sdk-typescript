import { deserializeIntoMarkUnreadPostRequestBody } from './deserializeIntoMarkUnreadPostRequestBody';
import { type MarkUnreadPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMarkUnreadPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMarkUnreadPostRequestBody;
}
