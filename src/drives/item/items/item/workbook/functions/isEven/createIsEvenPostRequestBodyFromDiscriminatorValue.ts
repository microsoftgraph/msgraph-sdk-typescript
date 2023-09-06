import { deserializeIntoIsEvenPostRequestBody } from './deserializeIntoIsEvenPostRequestBody';
import { type IsEvenPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createIsEvenPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoIsEvenPostRequestBody;
}
