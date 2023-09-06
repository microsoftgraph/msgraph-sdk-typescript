import { deserializeIntoCancelPostRequestBody } from './deserializeIntoCancelPostRequestBody';
import { type CancelPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCancelPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCancelPostRequestBody;
}
