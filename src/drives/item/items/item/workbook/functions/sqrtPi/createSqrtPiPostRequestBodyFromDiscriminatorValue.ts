import { deserializeIntoSqrtPiPostRequestBody } from './deserializeIntoSqrtPiPostRequestBody';
import { type SqrtPiPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createSqrtPiPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoSqrtPiPostRequestBody;
}
