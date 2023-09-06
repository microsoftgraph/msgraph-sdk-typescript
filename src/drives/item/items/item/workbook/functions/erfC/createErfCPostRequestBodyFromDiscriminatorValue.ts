import { deserializeIntoErfCPostRequestBody } from './deserializeIntoErfCPostRequestBody';
import { type ErfCPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createErfCPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoErfCPostRequestBody;
}
