import { deserializeIntoBitorPostRequestBody } from './deserializeIntoBitorPostRequestBody';
import { type BitorPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBitorPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBitorPostRequestBody;
}
