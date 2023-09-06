import { deserializeIntoErfPostRequestBody } from './deserializeIntoErfPostRequestBody';
import { type ErfPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createErfPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoErfPostRequestBody;
}
