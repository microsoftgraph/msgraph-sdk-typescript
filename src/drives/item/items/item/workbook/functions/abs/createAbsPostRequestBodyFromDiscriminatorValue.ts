import { deserializeIntoAbsPostRequestBody } from './deserializeIntoAbsPostRequestBody';
import { type AbsPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAbsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAbsPostRequestBody;
}
