import {IsEvenPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIsEvenPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : IsEvenPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IsEvenPostRequestBody();
}
