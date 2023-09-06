import { deserializeIntoLowerPostRequestBody } from './deserializeIntoLowerPostRequestBody';
import { type LowerPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLowerPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLowerPostRequestBody;
}
