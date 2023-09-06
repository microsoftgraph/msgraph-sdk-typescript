import { deserializeIntoAsinPostRequestBody } from './deserializeIntoAsinPostRequestBody';
import { type AsinPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAsinPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAsinPostRequestBody;
}
