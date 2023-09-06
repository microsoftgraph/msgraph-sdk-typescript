import { deserializeIntoRightPostRequestBody } from './deserializeIntoRightPostRequestBody';
import { type RightPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRightPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRightPostRequestBody;
}
