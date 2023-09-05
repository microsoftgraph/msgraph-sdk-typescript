import { deserializeIntoImSubPostRequestBody } from './deserializeIntoImSubPostRequestBody';
import { type ImSubPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createImSubPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImSubPostRequestBody;
}
