import { deserializeIntoLenPostRequestBody } from './deserializeIntoLenPostRequestBody';
import { type LenPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createLenPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLenPostRequestBody;
}
