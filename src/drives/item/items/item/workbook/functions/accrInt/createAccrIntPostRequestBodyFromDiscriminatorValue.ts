import { deserializeIntoAccrIntPostRequestBody } from './deserializeIntoAccrIntPostRequestBody';
import { type AccrIntPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccrIntPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccrIntPostRequestBody;
}
