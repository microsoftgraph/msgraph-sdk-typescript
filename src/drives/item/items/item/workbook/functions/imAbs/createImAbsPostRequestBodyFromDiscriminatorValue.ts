import { deserializeIntoImAbsPostRequestBody } from './deserializeIntoImAbsPostRequestBody';
import { type ImAbsPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createImAbsPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImAbsPostRequestBody;
}
