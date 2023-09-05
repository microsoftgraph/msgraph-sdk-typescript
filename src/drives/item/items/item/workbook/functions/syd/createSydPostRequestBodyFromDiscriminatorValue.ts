import { deserializeIntoSydPostRequestBody } from './deserializeIntoSydPostRequestBody';
import { type SydPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSydPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSydPostRequestBody;
}
