import { deserializeIntoGcdPostRequestBody } from './deserializeIntoGcdPostRequestBody';
import { type GcdPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGcdPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGcdPostRequestBody;
}
