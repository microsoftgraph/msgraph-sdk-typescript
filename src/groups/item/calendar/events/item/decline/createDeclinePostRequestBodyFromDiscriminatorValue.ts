import { deserializeIntoDeclinePostRequestBody } from './deserializeIntoDeclinePostRequestBody';
import { type DeclinePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDeclinePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDeclinePostRequestBody;
}
