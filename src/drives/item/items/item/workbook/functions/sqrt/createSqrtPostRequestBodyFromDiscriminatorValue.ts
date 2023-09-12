import { deserializeIntoSqrtPostRequestBody } from './deserializeIntoSqrtPostRequestBody';
import { type SqrtPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSqrtPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSqrtPostRequestBody;
}
