import { deserializeIntoAccrIntMPostRequestBody } from './deserializeIntoAccrIntMPostRequestBody';
import { type AccrIntMPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccrIntMPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccrIntMPostRequestBody;
}
