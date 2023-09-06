import { deserializeIntoCreateForwardPostRequestBody } from './deserializeIntoCreateForwardPostRequestBody';
import { type CreateForwardPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCreateForwardPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCreateForwardPostRequestBody;
}
