import { deserializeIntoImConjugatePostRequestBody } from './deserializeIntoImConjugatePostRequestBody';
import { type ImConjugatePostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createImConjugatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImConjugatePostRequestBody;
}
