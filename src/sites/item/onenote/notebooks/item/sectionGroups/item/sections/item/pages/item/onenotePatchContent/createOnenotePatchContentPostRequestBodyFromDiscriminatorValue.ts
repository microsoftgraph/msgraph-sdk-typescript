import { deserializeIntoOnenotePatchContentPostRequestBody } from './deserializeIntoOnenotePatchContentPostRequestBody';
import { type OnenotePatchContentPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOnenotePatchContentPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnenotePatchContentPostRequestBody;
}
