import { deserializeIntoEvenPostRequestBody } from './deserializeIntoEvenPostRequestBody';
import { type EvenPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEvenPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEvenPostRequestBody;
}
