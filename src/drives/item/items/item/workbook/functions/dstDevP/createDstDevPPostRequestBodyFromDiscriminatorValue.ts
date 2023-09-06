import { deserializeIntoDstDevPPostRequestBody } from './deserializeIntoDstDevPPostRequestBody';
import { type DstDevPPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDstDevPPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDstDevPPostRequestBody;
}
