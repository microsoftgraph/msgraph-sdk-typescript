import { deserializeIntoImCoshPostRequestBody } from './deserializeIntoImCoshPostRequestBody';
import { type ImCoshPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createImCoshPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImCoshPostRequestBody;
}
