import { deserializeIntoCoshPostRequestBody } from './deserializeIntoCoshPostRequestBody';
import { type CoshPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createCoshPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCoshPostRequestBody;
}
