import { deserializeIntoXorPostRequestBody } from './deserializeIntoXorPostRequestBody';
import { type XorPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createXorPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoXorPostRequestBody;
}
