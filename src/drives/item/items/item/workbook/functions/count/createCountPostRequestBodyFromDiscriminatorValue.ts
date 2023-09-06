import { deserializeIntoCountPostRequestBody } from './deserializeIntoCountPostRequestBody';
import { type CountPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCountPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCountPostRequestBody;
}
