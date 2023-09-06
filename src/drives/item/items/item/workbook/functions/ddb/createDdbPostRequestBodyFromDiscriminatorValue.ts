import { deserializeIntoDdbPostRequestBody } from './deserializeIntoDdbPostRequestBody';
import { type DdbPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDdbPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDdbPostRequestBody;
}
