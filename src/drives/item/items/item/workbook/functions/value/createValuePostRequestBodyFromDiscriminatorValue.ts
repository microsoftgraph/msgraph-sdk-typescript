import { deserializeIntoValuePostRequestBody } from './deserializeIntoValuePostRequestBody';
import { type ValuePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createValuePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoValuePostRequestBody;
}
