import {deserializeIntoImConjugatePostRequestBody} from './deserializeIntoImConjugatePostRequestBody';
import {ImConjugatePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImConjugatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImConjugatePostRequestBody;
}
