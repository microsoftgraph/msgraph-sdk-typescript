import {ImConjugatePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImConjugatePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ImConjugatePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImConjugatePostRequestBody();
}
