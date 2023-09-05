import { deserializeIntoExactPostRequestBody } from './deserializeIntoExactPostRequestBody';
import { type ExactPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createExactPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoExactPostRequestBody;
}
